Shery.imageEffect(".back",{
  style:5,
  config: {"a":{"value":0.99,"range":[0,30]},"b":{"value":-0.85,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0532724505327247},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":7}},"discard_threshold":{"value":0.76,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.45,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  gooey: true
  
});

let elem = document.querySelectorAll("#elem");

elem.forEach(function(elem){
  
  
let h1s = elem.querySelectorAll('h1');

let index = 0;

let animated = false;


document.querySelector(".main").addEventListener("click",() => {
  
  if (!animated) {
    animated = true;
    gsap.to(h1s[index], {

  top: "-=100%",
  ease: Expo.easeInOut,
  duration: 1,
  onComplete: function(){
    gsap.set(this._targets[0],{
      top : "100%",
    });
    
    animated = false;
  }

});

index === h1s.length-1 ? (index = 0) : index++;

gsap.to(h1s[index], {

  top: "-=100%",
  ease: Expo.easeInOut,
  duration: 1

});

  }
  
});
  
});
