
var loansOutGlobal = []
document.addEventListener('DOMContentLoaded', function() {

	//var URL = "19xUJfyoUysOqZwo--bvWgoVuUY9WsFrGbpeDTROfXlw"
	var URL = "1Oy_zV6jVcKCYXoZ2FhQOiOVGWYWkHpvsUuMTgQ_pj2k"


	Tabletop.init( { key: URL, callback: callback, simpleSheet: true } )


})

function callback(loansOut) {

	loansOut.forEach(function(loan){
		if(loan["Returned?"] == "Returned"){
			console.log("This item is returned.");
		}else{
			loansOutGlobal.push(loan);
		}
	})

	var URL = "19xUJfyoUysOqZwo--bvWgoVuUY9WsFrGbpeDTROfXlw"

	Tabletop.init( { key: URL, callback: createPublicList, simpleSheet: true } )

}

function createPublicList(allData){
	// console.log(allData);
	//Remove stuff that we don't wanna show
	var showData = [];

	allData.forEach(function(obj){
		if(obj["Checkout Tier"] == "3"){

		}else{

			//Checkout Tier
			if(obj["Checkout Tier"] == "2"){
				obj["Checkout Tier"] = "Email James"
			}
			else if(obj["Checkout Tier"] == "1"){
				obj["Checkout Tier"] = "In-lab use only"
			}else if(obj["Checkout Tier"] == "0"){
				obj["Checkout Tier"] = "Use freely!"
			}
			var outNum = 0;
			loansOutGlobal.forEach(function(loan){
				// console.log(loan);
				if(loan["Items on loan"].trim() == obj["Name of Item"].trim()){
					outNum += 1;
				}
			})

			obj["Status"] = outNum.toString() + " item(s) currently out"

			showData.push(obj);
		}
	})

	var tableOptions = {
			"data": showData,
			"pagination": 100,
			"tableDiv": "#siteTable",
			"filterDiv": "#siteTableFilter",
			"templateID": "siteTable_template"
		}
		Sheetsee.makeTable(tableOptions)
		Sheetsee.initiateTableFilter(tableOptions)
}
