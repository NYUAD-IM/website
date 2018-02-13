let fetch = () => {
  $.ajax({
    url: TARGET_URL,
    dataType: 'json'
  }).done((data) => {
    populate(data)
  }).fail(() => {
    console.log('fetching data from',TARGET_URL,'failed...');
  })
}
