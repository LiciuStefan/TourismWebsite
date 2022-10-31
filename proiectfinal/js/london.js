function myFunction(checked) {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var elm = document.getElementById('chk');
    if (checked != elm.checked) {
        elm.click();
    }
    if (elm.checked == true) {
      document.getElementById("photo1").src = "../images/londonnight.jpeg";
  } else {
      document.getElementById("photo1").src = "https://images.pexels.com/photos/4854415/pexels-photo-4854415.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
  }
 }