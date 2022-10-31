function myFunction(checked) {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var elm = document.getElementById('chk');
    if (checked != elm.checked) {
        elm.click();
    }
    if (elm.checked == true) {
      document.getElementById("photo1").src = "../images/romenight.jpeg";
  } else {
      document.getElementById("photo1").src = "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  }
 }