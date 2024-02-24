let close_btn = document.querySelector(".close-btn");
let menu_bar = document.querySelector(".menu_bar");
let nav_link = document.querySelectorAll(".nav_link");
let header = document.querySelector("header");
let cross = document.querySelector('.cross')
let dark = document.querySelector('body');

let darkmode = document.querySelector('.darkmode');

let nav = document.querySelector('header')

let progress = gsap.utils.toArray(".progress_bar");

let iconify = document.querySelectorAll('iconify-icon')

let footer = document.querySelector('footer')

let logo = document.querySelector('.logo')

close_btn.addEventListener("click", function() {
  menu_bar.classList.toggle("active");

});


window.addEventListener("scroll", () => {
  header.classList.toggle("active", scrollY > 0);
})

nav_link.forEach(item => {
  item.addEventListener('click', () => {
    menu_bar.classList.toggle("active");
  });
});

cross.onclick = () => {
  menu_bar.classList.toggle("active");
}


// -- gsap ---

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from('.logo , .darkmode , li', {
  x: -300,
  stagger: 0.5,
  opacity: 1,
  duration: 1.8,
})


gsap.from(".banner_img", {
  scale: 0,
  duration: 2,
})



gsap.from(".item", {
  scale: 0,
  opacity: 0,
  stagger: 0.5,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#javascript",
    scoller: window,
    start: 'top 30%',
    //markers: true,
    end: 'bottom'
  }
});


// About Section 


gsap.to(".about_text .text", {
  scrollTrigger: {
    trigger: "#About .container",
    // markers: true,
    start: "top 20%",
    scrub: 2,
    end: "bottom 100%"
  },
  duration: 1,
  color: "red"
});

gsap.to(".grid .about_img", {

  scrollTrigger: {

    trigger: "#About .container",
   // markers: true,
    start: "top 20%",
    end: "bottom 100%"
  },
  duration: 1,
  width: '300px'
})




// this is for progress

gsap.to(progress[0], {
  scrollTrigger: {
    trigger: '.sub_header',
    scroller: window,
    //markers: true,
    start: 'top 30%',
    onEnter: animate1
  },
  width: '90%',
  duration: 3.2,
})

gsap.to(progress[1], {
  scrollTrigger: {
    trigger: '.sub_header',
    scroller: window,
    //markers: true,
    start: 'top 30%',
    onEnter: animate2
  },
  width: '70%',
  duration: 3,
})



gsap.to(progress[2], {
  scrollTrigger: {
    trigger: '.sub_header',
    scroller: window,
    //markers: true,
    start: 'top 30%',
    onEnter: animate3
  },
  width: '50%',
  duration: 2.8,
})




const counterElement = gsap.utils.toArray('.counter');


function animate1() {
  let startNumber = parseInt(counterElement[0].innerText);
  let increment = (90 - startNumber) / (3000 / 16); // 16ms is close to 60fps

  function updateNumber() {
    if (startNumber < 90) {
      counterElement[0].innerText = Math.ceil(startNumber) + '%';
      startNumber += increment;
      requestAnimationFrame(updateNumber);
    }
  }

  updateNumber();
}

// Example: Increase the number to 100 over 3 seconds



function animate2() {
  let startNumber = parseInt(counterElement[1].innerText);

  let increment = (70 - startNumber) / (3000 / 19); // 16ms is close to 60fps


  function updateNumber() {
    if (startNumber < 70) {
      counterElement[1].innerText = Math.ceil(startNumber) + '%';
      startNumber += increment;
      requestAnimationFrame(updateNumber);
    }
  }

  updateNumber();

}




function animate3() {
  let startNumber = parseInt(counterElement[2].innerText);

  let increment = (50 - startNumber) / (3000 / 19); // 16ms is close to 60fps


  function updateNumber() {
    if (startNumber < 50) {
      counterElement[2].innerText = Math.ceil(startNumber) + '%';
      startNumber += increment;
      requestAnimationFrame(updateNumber);
    }
  }

  updateNumber();

}

// darkmode 

darkmode.onclick = () => {

  dark.classList.toggle('dark');

  if (dark.classList.contains("darkmode")) {

  }


  if (dark.classList.contains('dark')) {

    iconify[0].icon = 'line-md:moon-twotone-alt-loop';
    iconify[0].style = 'color : whitesmoke;';
    nav.style = 'background: #151515F2;'
    iconify[1].style = 'color : whitesmoke;';
    nav_link[0].style = "color : whitesmoke"
    nav_link[1].style = "color : whitesmoke"
    nav_link[2].style = "color : whitesmoke"
    nav_link[3].style = "color : whitesmoke"
    nav_link[4].style = "color : whitesmoke"
    footer.style = 'background: #151515F2;';
    logo.style = "color : white";
  } else {
    iconify[0].icon = 'line-md:sun-rising-filled-loop';
    nav.style = 'background: rgb(244, 239, 239);'
    logo.style = "color : black";
    iconify[0].style = 'color : black;'
    iconify[1].style = 'color : black;'
    nav_link[0].style = "color : #818181";
    nav_link[1].style = "color : #818181";
    nav_link[2].style = "color : #818181";
    nav_link[3].style = "color : #818181";
    nav_link[4].style = "color : #818181";
    footer.style = "background: black;";


  }
}