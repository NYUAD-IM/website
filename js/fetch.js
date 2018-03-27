let fetch = () => {
  $.ajax({
    url: TARGET_URL,
    dataType: 'json'
  }).done((data) => {
    loader()
    populate(data)
  }).fail(() => {
    console.log('fetching data from',TARGET_URL,'failed...');
  })
}

function loader() {
  document.getElementById("loader").style.display = "none";
}
