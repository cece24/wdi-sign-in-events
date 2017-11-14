document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var close = document.querySelector('.close');

  button.addEventListener('click', function() {
    modal.style.display = "unset";

    close.addEventListener('click', function() {
      modal.style.display = "none";
    })
  })



});
