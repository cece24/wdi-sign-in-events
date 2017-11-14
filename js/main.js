document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var close = document.querySelector('.close');
  var inputUser = document.querySelector('#user');
  var inputPass = document.querySelector('#pass');
  var submitButton = document.querySelector('.submit');

  button.addEventListener('click', function() {
    modal.style.display = "unset";

    submitButton.addEventListener('click', function() {
      inputUser.classList.add('error');
      inputPass.classList.add('error');
    })

    close.addEventListener('click', function() {
      modal.style.display = "none";
    })


  })



});
