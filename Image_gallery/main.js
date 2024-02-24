//this is for select all .item classs 

const items = document.querySelectorAll(".item");

const container = document.querySelector(".container");

const number_of_item = items.length;


const angle_increment = (2 * Math.PI) / number_of_item;

const radius = 300;

let iscalleropen = true;

//his is calculate container width
const contextX = container.offsetWidth / 2;

//his is calculate container height
const contextY = container.offsetHeight / 2;



// it will run one by one animation 

const tl = gsap.timeline();


items.forEach(function(item, index) {

  //it will create img tag


  const img = document.createElement("img");


  //it will add image from local storage 

  img.src = "images/img" + (index + 1) + ".jpg";

  //ye img tag ko item div me daal dega

  item.appendChild(img)

  const angle = index * angle_increment;

  const initialRotation = (angle * 180 / Math.PI) - 90;

  const x = contextX + radius * Math.cos(angle);

  const y = contextY + radius * Math.sin(angle);

  gsap.set(item, { scale: 0 })

  tl.to(item, {
    left: x + "px",
    top: y + "px",
    rotation: initialRotation,
    scale: 1,
    ease: "power2.out",
    duration: 1,
    delay: 1

  }, index * 0.1);



  item.addEventListener('click', function() {

    let timeruning = 2000;
    let timeout;

    if (iscalleropen) {
      iscalleropen = true;

      document.body.style.pointerEvents = "none";

      clearTimeout(timeout)

      timeout = setTimeout(() => {
        document.body.style.pointerEvents = "auto";
      }, timeruning)

      const duplicate = item.cloneNode(true);

      duplicate.style.position = "absolute";

      container.appendChild(duplicate);

      gsap.to(Array.from(items).filter(i => i != item), {
        scale: 0,
        duration: 0.5,
        ease: 'power2.in',
        stagger: 0.05
      });


      const endRotation = initialRotation > 100 ? initialRotation - 360 : initialRotation;

      gsap.to([item, duplicate], {
        rotation: endRotation,
        duration: 0.0001,
        onStart: function() {

        },
        onComplete: function() {
          gsap.to([item, duplicate], {
            left: '50%',
            top: "50%",
            transform: "translate(-50% , -50%) scale(8)",
            duration: 1,
            ease: 'power2.out',
            delay: 1.25,
          });



        }
      });

      const closegallery = function() {
        if (iscalleropen) {

          document.body.style.pointerEvents = "none";

          clearTimeout(timeout)

          timeout = setTimeout(() => {
            document.body.style.pointerEvents = "auto";
          }, timeruning)

          gsap.to([item, duplicate], {
            left: x + 'px',
            top: y + 'px',
            scale: 1,
            onStart: function() {

            },
            rotation: initialRotation,
            duration: 1,
            ease: 'power2.out',
            onComplete: function() {
              duplicate.remove();
              gsap.to(items, {
                scale: 1,
                duration: 1,
                stagger: 0.05,
                ease: 'power2.out'

              });


            }

          });


        }

      };



      duplicate.addEventListener("click", closegallery);

    }

  });

})