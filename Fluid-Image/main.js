gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline();

tl.from('.nav h3', {
    duration: 2,
    y: 15,
    yoyo:true,
    repeat: -1

  })

gsap.to('.box1', {
  duration:1,
  y: 300,
  opacity: 0,
  scrollTrigger: {
    trigger: '.box1',
    
    toggleClass: 'enable',
    start: 'top',
    scrub: 1,
    scroller:'body'

  }


});



gsap.to('.box2', {
  duration: 2,
  x: -300,
  opacity: 0,
  scrollTrigger: {
    trigger: '.box2',
    start: 'top',
    toggleClass: 'enable',
    scrub: 1,
    scroller:'body'

  }


});


gsap.to('.box3', {
  duration: 2,
  x: 300,
  opacity: 0,
  scrollTrigger: {
    trigger: '.box3',
    toggleClass: 'enable',
    start: 'top',
    scrub:1,
    scroller:'body'

  }


});


gsap.to('.box4', {
  duration: 2,
  opacity:0,
  scrollTrigger: {
    trigger: '.box4',
    scroller:'body',
    start: 'top',
    scrub: 1,
    pin: true,
    pinSpacing:false

  },


});

gsap.to('.box5', {
  duration: 2,
  x: -300,
  opacity: 0,
  scrollTrigger: {
    trigger: '.box5',
    
    start: 'top',
    scrub: 1,

  }


});


gsap.to('.box6', {
  duration: 5,
  opacity: 0,
  scale:0,
  scrollTrigger: {
    trigger: '.box6',
    scrub:1,
    
    start: 'top',
    end:'bottom -30%'

  }


});


