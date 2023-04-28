const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
 window.onload = function () {
    setTimeout(function(){
        popup.style.display = "block";
    },2000)
 }
 close.addEventListener('click', () => {
    popup.style.display = "none";
 })
// dark light mode button code
 function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }