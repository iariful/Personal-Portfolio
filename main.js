const toggle = document.querySelector('.toggle');
const banner = document.querySelector('.banner');
 toggle.onclick = function (){
     toggle.classList.toggle('active');
     banner.classList.toggle('active');
 }