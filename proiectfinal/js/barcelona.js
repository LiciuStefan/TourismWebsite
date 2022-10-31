function myFunction(checked) {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var elm = document.getElementById('chk');
    if (checked != elm.checked) {
        elm.click();
    }
    if (elm.checked == true) {
      document.getElementById("photo1").src = "../images/barcelonanight.jpeg";
  } else {
      document.getElementById("photo1").src = "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
  }
 }