
const img1 = document.querySelector(".img1");

const img2 = document.querySelector(".img2");

const img3 = document.querySelector(".img3");

const img4 = document.querySelector(".img4");

const img5 = document.querySelector(".img5");

const img6 = document.querySelector(".img6");

let img = document.querySelectorAll('.img');




document.addEventListener("touchmove", (e) => {

  img.forEach((i) => {
    
    
    i.setAttribute(
      "style",
      "top :" + (e.touches[0].pageY - 200) + "px; left :" + (e.touches[0].pageX - 200) + "px;",

    );
    
    
    console.log(e);

  });
  
  
 




});

console.log(window.innerWidth);
console.log(window.innerHeight);