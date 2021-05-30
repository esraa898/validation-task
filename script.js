var password ,Nameu ,Email,form ,formLabels,valid;


Email = document.getElementById( "Email");
password = document.getElementById('pass');
Nameu =document.getElementById('user-name');
form =document.getElementById('form');
formLabels = document.getElementsByTagName ("label");
formInput = document.getElementsByTagName ("input");


form.addEventListener("submit", function (e) {
 e.preventDefault();
 valid = true;
     if ( Nameu.value === '' || Nameu.value == null){
        formLabels[0].innerHTML = "First Name :   * [required]"
        Nameu.style.borderColor="red";
        formLabels[0].style.color = "red";
        valid =false;
    }
    else {
      formLabels[0].innerHTML = "First Name : "
      formLabels[0].style.color='black';
      Nameu.style.borderColor="black";
      valid = (valid) ? true : false ;  
    }

    var at = Email.value.indexOf("@");
    var dotCom = Email.value.indexOf(".com");
    if (Email.value == '' ) {
      formLabels[1].innerHTML = "Email: *[ required ]";
      Email.style.borderColor="red";
      formLabels[1].style.color= "red"
         
  }
   else if ( at == -1 || dotCom == -1 || dotCom < at){
    formLabels[1].innerHTML = "Email : *[ @ and .com are required]";
    Email.style.borderColor="red";
    formLabels[1].style.color= "red"
   }
   else {
    formLabels[1].innerHTML = "Email : "
    formLabels[1].style.color='black';
      Email.style.borderColor="black";
    valid = (valid) ? true : false ;  
  }

    if (password.value == '' ) {
      formLabels[2].innerHTML = "passowrd : *[ required ]";
      password.style.borderColor="red";
      formLabels[2].style.color= "red"
         
      
  }
   else if (password.value.length < 8){
    formLabels[2].innerHTML = "passowrd : *[ more than 8 characters]";
    password.style.borderColor="red";
    formLabels[2].style.color= "red"
   }
   else {
    formLabels[2].innerHTML = "Password: "
    formLabels[2].style.color='black';
    password.style.borderColor="black";
    valid = (valid) ? true : false ;  
  }
   return valid;
} );


function clear2(){
  var mylabels = new Array();
  mylabels[0] = "First Name :"
  mylabels[1] = "Email :"
   mylabels[2] = "Password :"


 for ( var i =0 ; i < mylabels.length ; i++) {
     formLabels[i].innerHTML = mylabels [i];
     formLabels[i].style.color= "black";
     formInput[i].style.borderColor="rgb(118, 118, 118, 0.5)"; 

 } 
  
}
