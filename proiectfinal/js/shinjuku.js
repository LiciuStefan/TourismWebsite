function myFunction(checked) {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var elm = document.getElementById('chk');
    if (checked != elm.checked) {
        elm.click();
    }
    if (elm.checked == true) {
      document.getElementById("photo1").src = "../images/shinjukunight.jpeg";
  } else {
      document.getElementById("photo1").src = "https://images.unsplash.com/photo-1565106387604-cf186f0c2987?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80";
  }
 }