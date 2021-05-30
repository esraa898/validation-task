var valid ,formlabels ,firstName ,lastName ,emaill ,password;

function validation (){
    
   
     valid = true;
     formLabels =document.getElementsByTagName("label");
    firstName = document.regForm.firstName.value;
    if (firstName == ""){
        formLabels[0].innerHTML = "First Name : * [required]";
        formLabels[0].style.color='red';
        valid =false;
    }
    else if ( !isNaN(firstName)){
        formLabels[0].innerHTML = "First Name : * [text only]";
        formLabels[0].style.color='red';
        valid =false;
    }
    else{
        formLabels[0].innerHTML = "First Name : "
        formLabels[0].style.color='black';
        valid = (valid) ? true : false ;  
    }
     lastName = document.regForm.lastName.value;
    if (lastName == ""){
        formLabels[1].innerHTML = "last Name : * [required]";
        formLabels[1].style.color='red';
        valid =false;
    }
    else if ( !isNaN(lastName)){
        formLabels[1].innerHTML = "last Name : * [text only]";
        formLabels[1].style.color='red';
        valid =false;
    }
    else{
        formLabels[1].innerHTML = "Last Name : ";
        formLabels[1].style.color='black';
        valid = (valid) ? true : false ;  
    }

//  emaill = document.regForm.email.value;
//    var at = email.value.indexOf("@");
//     var dotCom = email.value.indexOf(".com");
//     if (email == '' ) {
//       formLabels[1].innerHTML = "Email: *[ required ]";
//       email.style.borderColor="red";
//       formLabels[1].style.color= "red"
         
//   }
//    else if ( at == -1 || dotCom == -1 || dotCom < at){
//     formLabels[1].innerHTML = "Email : *[ @ and .com are required]";
//     email.style.borderColor="red";
//     formLabels[1].style.color= "red"
//    }
//    else {
//     formLabels[1].innerHTML = "Email : "
//     formLabels[1].style.color='black';
//       email.style.borderColor="black";
//     valid = (valid) ? true : false ;  
//   }
     password = document.regForm.password.value;

    if (password == ""){
        formLabels[3].innerHTML = "password : * [required]";
        formLabels[3].style.color='red';
        valid =false;
    }
    else if ( password.length < 8){
        formLabels[3].innerHTML = "password : * [more than 8]";
        formLabels[3].style.color='red';
        valid =false;
    }
    else{
        formLabels[3].innerHTML = "password : ";
        formLabels[3].style.color='black';
        valid = (valid) ? true : false ;  
    }

    return valid; 
    
}

function clear2 (){
    var mylabels = new Array();
    mylabels[0] = "First Name :"
    mylabels[1] = "Last Name :"
     mylabels[2] = "Email :"
     mylabels[3] = "Password :"

   for ( var i =0 ; i < mylabels.length ; i++) {
       formLabels[i].innerHTML = mylabels [i];
       formLabels[i].style.color= "black"; 
   } 
    
}