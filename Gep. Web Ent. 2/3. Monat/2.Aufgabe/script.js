var datum=new Date();
var day=datum.getDate();
var monat=datum.getMonth()+1;
var jahr=datum.getFullYear();

document.querySelector("#datum").innerHTML="Heute ist"+" "+day+"." +monat+"."+jahr;

function setNewImage(id, quelle) {
    document.getElementById(id).src = quelle;
}

  

function pruefung(){
  var email=document.getElementById("email");
  var password=document.getElementById("password");

  if(email.value==""){
    alert("Bitte Geben Sie Ihre Email ein.");
    email.focus();
    return false;
  }
  if(password.value==""){
    alert("Bitte Geben Sie Ihre Password ein.")
    password.focus();
    return false;
  }
}
