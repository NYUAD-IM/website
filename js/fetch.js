let fetch = () => {
  $.ajax({
    url: TARGET_URL,
    dataType: 'json'
  }).done((data) => {
    fadeOutLoader()
    populate(data)
  }).fail(() => {
    console.log('fetching data from',TARGET_URL,'failed...');
  })
}

function fadeOutLoader() {
  //-- first fade out
  document.getElementById("load-bg").style.opacity = 0;
  document.getElementById("load-anim").style.opacity = 0;

  //-- 0.4s later, make it disappear
  setTimeout(() => {
    document.getElementById("load-bg").style.display = 'none';
    document.getElementById("load-anim").style.display = 'none';
  }, 400)
}
