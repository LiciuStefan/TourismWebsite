const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', () => {
        remove();
        image.classList.add('img-active');
    })
})

const remove = () => {
    images.forEach(image => {
        image.classList.remove('img-active');
    })
}
var myVar; /*loading animation*/

function myFunction() { /*loading animation*/
  myVar = setTimeout(showPage, 3000);
}

function showPage() { /*loading animation*/
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "inlineblock"; 
}
