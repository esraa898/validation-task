var password ,Nameu ,Email,form ,Elementerror;

Email = document.getElementById( "Email");
password = document.getElementById('pass');
Nameu =document.getElementById('user-name');
form =document.getElementById('form');
Elementerror=document.getElementById('error');
secondError=document.getElementById('secondError');
passLabel=document.getElementById('pause');

form.addEventListener("submit", function (e) {
 e.preventDefault();
    if ( Nameu.value === '' || Nameu.value == null){
        Elementerror.innerHTML= '<p class= "error"> enter your name its required </p>';
        Nameu.style.borderColor="red";
    }

    if (password.value == '' ) {
      password.style.borderColor="red";
          secondError.innerHTML= '<span class="error"> enter your password required </span>';
      
  }
  if (password.value.length < 8){
    passLabel.innerHTML= '<p class="error"> password must be more than 8 characters </p>';
  }
} )