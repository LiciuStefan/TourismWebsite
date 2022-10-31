function myFunction(checked) {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var elm = document.getElementById('chk');
    if (checked != elm.checked) {
        elm.click();
    }
    if (elm.checked == true) {
      document.getElementById("photo1").src = "../images/newyorknight.jpeg";
  } else {
      document.getElementById("photo1").src = "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
  }
 }

 /*const card= document.querySelector('.img-fluid img-thumbnail card-img-top');


 const tl = new TimelineMax();
  tl.fromTo(card, 5, { x: "-100%"}, { x:"0%", ease: Power2.easeInOut});
  tl.fromTo(
    card, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut }
)
*/



