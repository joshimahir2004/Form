function MyFunction() {
  let FName = document.getElementById("fname-input").value;
  let FSurName = document.getElementById("fsurname-input").value;
  let total = FName + "  ,"+" "+" " + FSurName;
  alert(total);
}
let txt;
if (confirm("Submit the Form ? ")) {
  txt = "submit successful !";
} else {
  txt = "Please trt again";
}
document.getElementById("demo").innerHTML = txt;
