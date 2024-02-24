
const { gsap } = window;

gsap.timeline().set(".menu", { autoAlpha: 1 }).from(".menu_item-innertext", {
    delay: 1,
    duration: 0.85,
    xPercent: 25,
    yPercent: 125,
    stagger: 0.09,
    skewY: gsap.utils.wrap([-8, 8]),
    ease: "expo.out"
  })
  .set(".menu", { pointerEvents: "all" });

gsap.defaults({
  duration: 0.55,
  ease: "expo.out"
});

const menuItem = document.querySelectorAll(".menu_item");


const text = document.querySelectorAll('.menu_item-text');
const txt = document.querySelector('#text');
  
  text.forEach((i,y) => {
   
   i.addEventListener('touchstart',(i) => {
     text[y].style.color = 'red'
   })
   
   i.addEventListener('touchend', (i) => {
     text[y].style.color = 'white'
   })
   
  })


menuItem.forEach((item) => {
  const imagerWrapper = item.querySelector(".menu_item-image_wrapper");

  let imagerWrapperBounds = imagerWrapper.getBoundingClientRect();

  let itemBounds = item.getBoundingClientRect();
      
  
  
  const onMouseEnter = () => {
      
    gsap.set(imagerWrapper, {

      scale: 0.8,
      xPercent: 25,
      yPercent: 50,
      rotation: -15,

    });


    gsap.to(imagerWrapper, {
      opacity: 1,
      scale: 1,
      yPercent: -40,
      xPercent: -30,
      rotation: 0
    });
    
    
    
  };


  const onMouseLeve = () => {
    gsap.to(imagerWrapper, {
      opacity: 0,
      yPercent: -50,
      xPercent: 25,
      scale: 0.8,
      rotation: -15,
    });
  };

  const onMouseMove = ({ x,y }) => {
      
      
    let yoffset = itemBounds.top / imagerWrapperBounds.height;

    yoffset = gsap.utils.mapRange(0, 1.5, -150, 150, yoffset);
    
    gsap.to(imagerWrapper, {
      duration: 1.25,
      x: Math.abs(x - itemBounds.left) - imagerWrapperBounds.width / 1.55,
      y: Math.abs(y - itemBounds.top) - imagerWrapperBounds.height / 2 - yoffset,

    });

  };
  

  item.addEventListener("touchstart", onMouseEnter);
  item.addEventListener("touchend", onMouseLeve);
/*  item.addEventListener("mouseenter", onMouseEnter);
  item.addEventListener("mouseleave", onMouseLeve);
  item.addEventListener("mousemove", onMouseMove);*/
  item.addEventListener("touchmove",(i) => {
    
    let yoffset = itemBounds.top / imagerWrapperBounds.height;

    yoffset = gsap.utils.mapRange(0, 1.5, -150, 150, yoffset);
    
    gsap.to(imagerWrapper, {
      duration: 1.25,
      x: Math.abs(i.touches[0].clientX - itemBounds.left) - imagerWrapperBounds.width / 1.55,
      y: Math.abs(i.touches[0].clientY - itemBounds.top) - imagerWrapperBounds.height / 2 - yoffset,

    });

    
  });


  window.addEventListener("resize", () => {

    itemBounds = item.getBoundingClientRect();


  });



});

