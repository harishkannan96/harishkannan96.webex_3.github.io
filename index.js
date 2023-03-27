function SUBMITTED() {
  //var name1 = document.getElementById("name");
  //var password = document.getElementById("pass");
  
  var n1 = document.RegForm.Name.value;
  var n2 = document.RegForm.namepassword.value;
  var send=document.getElementById("send");

  if (n1 == "") {
    alert("Name can't be blank");
  }
  if (n2.length < 6) {
    alert("give valid password");
  }
  if((n1!="") && (n2.length>6)){
  alert("Form Submitted By: "+n1);}
}


