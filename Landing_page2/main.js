
const tl = gsap.timeline()


tl.from(".nav img,.nav2,.nav3", {
    x: -100,
    duraction: 5,
    Delay: 1,
    opacity: 0,
    stagger: 0.5,

})

tl.from("#main h1", {
    y: 100,
    duraction: 5,
    Delay: 1,
    opacity: 0,
    stagger: 0.5,
})

tl.from('#main .left-image,.right-image',{
    duraction: 5,
    Delay: 1,
    opacity: 0,
    rotate : 20,
    stagger: 0.5,
})