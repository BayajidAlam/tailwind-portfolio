// Light mode and dark mode 
let html = document.getElementById('html');
let chage_btn = document.getElementById('chage_btn');
let change_image = document.getElementById('change_image');

chage_btn.addEventListener('click', function(){
  html.classList.toggle('dark');
  if(change_image.src.includes('img/moon.svg')){
    change_image.src = 'img/sun.svg';
  }
  else{
    change_image.src = 'img/moon.svg';
  }
})

let chage_btn2 = document.getElementById('chage_btn2');
let change_image2 = document.getElementById('change_image2');

chage_btn2.addEventListener('click', function(){
  html.classList.toggle('dark');
  if(change_image2.src.includes('img/moon.svg')){
    change_image2.src = 'img/sun.svg';
  }
  else{
    change_image2.src = 'img/moon.svg';
  }
})