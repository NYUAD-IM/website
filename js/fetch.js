let fetch = () => {
  $.ajax({
    url: TARGET_URL,
    dataType: 'json'
  }).done((data) => {
  	$(".load-container").delay(500).fadeOut();
    populate(data)
  }).fail(() => {
    console.log('fetching data from',TARGET_URL,'failed...');
  })
}

