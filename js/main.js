document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var close = document.querySelector('.close');
  // var inputUser = document.querySelector('#user');
  // var inputPass = document.querySelector('#pass');
  var inputs = document.querySelectorAll('input[name]');
  var submitButton = document.querySelector('.submit');

  button.addEventListener('click', function() {
    modal.style.display = "unset";

    submitButton.addEventListener('click', function(e) {
      e.stopPropagation();

      // inputUser.classList.add('error');
      // inputPass.classList.add('error');

      inputs.forEach(function(input) {
        input.classList.add('error');
      })

      inputs.forEach(function(input) {
        input.addEventListener('mouseover', function() {
          input.classList.remove('error');
        })
      })
      
    })


    close.addEventListener('click', function() {
      modal.style.display = "none";
    })

    modal.addEventListener('click', function() {
      modal.style.display = "none";
    })

  })

});
