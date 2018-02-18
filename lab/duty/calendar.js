var mykey = 'AIzaSyB3mdUhS3ANUVIJx2FDTzpGY7DIGm0DVDg'; // typically like Gtg-rtZdsreUr_fLfhgPfgff
var calendarid = 'nyu.edu_4h0j8ra7ljn6ir91ptj5hcjb3c@group.calendar.google.com'; // will look somewhat like 3ruy234vodf6hf4sdf5sd84f@group.calendar.google.com

var monitorName = "";
var monitorTime = "";
var monitorStatus = false;
var monitorDate = ""

$(document).ready(main());


function main() {
	checkCalendar();
	setInterval(checkCalendar, 300000)
	//checkCalendar();
}



function checkCalendar(){

	var currentTime = timestamp();

	console.log(currentTime);

	var URL = encodeURI('https://www.googleapis.com/calendar/v3/calendars/' + calendarid + '/events?key=' + mykey);
	console.log(URL)
	$.ajax({
	    type: 'GET',
	    url: URL,
	    data: 
	    { 	singleEvents: true,			//Lists recurring events (default does not)
	    	timeMin: currentTime		//Only responds with results ending AFTER current time
	    },
	    dataType: 'json',
	    success: function (response) {

	    	var events = response.items;
	    	console.log("Successful AJAX call to calendar!")

	        parseEvents(events);

	    },
	    error: function (response) {

	    	console.log("Error on AJAX call to calendar!")
	        console.log(response);
	    }
	});
}


function parseEvents(events) {
	var usefulEventsArray = []

	events.forEach(function(data){

		//Only add to array if event is confirmed
		if(data.status == "confirmed"){
			
			var usefulEvent = {	start : data.start.dateTime, 
								end: data.end.dateTime,
								name: data.summary}

			usefulEventsArray.push(usefulEvent);		
		}
		
	});

	//Sort events array
	usefulEventsArray.sort(dynamicSort("start"));

	parseTime(usefulEventsArray);
}

function parseTime(eventsArray) {

	var currentTime = timestamp();

	if(eventsArray[0].start < timestamp()){
		console.log("Monitor is on duty");

		//Display monitor on duty

		var name = getNameFromEvent(eventsArray[0])
		var endTime = getTimeFromTimestamp(eventsArray[0].end);

		/*
		console.log(getNameFromEvent(eventsArray[0]) + " is here until:")
		console.log(getTimeFromTimestamp(endTime));
		*/

		monitorStatus = true;
		monitorName = name;
		monitorTime = endTime.substring(0,5);
	}
	else{
		console.log("Monitor is not on duty");
		//Display next monitor
		var name = getNameFromEvent(eventsArray[0])
		var startTime = getTimeFromTimestamp(eventsArray[0].start);
		var startDate = getDateFromTimestamp(eventsArray[0].start);

		/*
		console.log("No montitor on duty. Next monitor is:");
		console.log(name);
		console.log("At " + startTime.substring(0,5));
		console.log("On " + startDate.substring(5,10));
		*/

		monitorStatus = false;
		monitorName = name;
		monitorTime = startTime.substring(0,5);

		//Format the date:
		if(startDate == getDateFromTimestamp(timestamp())){
			//If it is today:
			monitorDate = "Today";
		}else{
			//Convert date into mm/dd format
			monitorDate = startDate.substring(5,10).replace("-", "/");;
		}

		//Reset Timer
		//setTimeout(checkCalendar, 2000)
	}

}

function getNameFromEvent(event) {
	return event.name.split(" - ")[1]
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}