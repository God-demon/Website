const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const particlesArray = [];
let hue = 0 ;


window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    initCanvas();
})

const mouse = {
  x: undefined,
  y: undefined,
  
  }

canvas.addEventListener('mousemove', function (event){
       mouse.x = event.x;
       mouse.y = event.y;
      
      for (let i = 0; i < 15 ; i++){
        particlesArray.push(new Particle());
      }
      
});

canvas.addEventListener('touchmove', function(event){
  let touch = event.touches[0];
  mouse.x = touch.clientX
  mouse.y = touch.clientY
  
     for (let i = 0; i < 10; i++){
        particlesArray.push(new Particle());
        //you can add boll from this code
      }
  
})

 class Particle {
   constructor(){
    this.x = mouse.x;
    this.y = mouse.y;

     this.size = Math.random() * 10 + 1;
     //for increasing size of Circle
     this.speedX = Math.random() * 3 - 1.5; //for speed x direction ball
     this.speedY = Math.random() * 3 - 1.5; //for speed y direction ball
     this.color = 'hsl(' + hue + ',100%, 50%)';
   }
   update(){
     this.x += this.speedX;
     this.y += this.speedY;
     
     if (this.size > 0.2) this.size -= 0.1;
   }
   draw(){
     ctx.fillStyle = this.color;
 ctx.beginPath();
 ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
 ctx.fill();
   }
 //draw the circal and dot ball 
 }


function handlePartical(){
  for (let i = 0 ; i < particlesArray.length; i++){
    particlesArray[i].update();
    particlesArray[i].draw();
    
/*
        for (let j = i ; j < particlesArray.length; j++){
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 15){
              ctx.beginPath();
              ctx.strokeStyle = particlesArray[i].color;
              ctx.linewidth = 0.3;
              ctx.moveTo(particlesArray[i].x , particlesArray[i].y);
              ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
              ctx.stroke();
            }
    }
    
   */
    
    if(particlesArray[i].size <= 0.3){
       particlesArray.splice(i , 1);
       
       i--;
    }
  }
}


function animate(){
 ctx.fillStyle = 'rgba(0,0,0,0.02)';
ctx.fillRect(0,0,canvas.width,canvas.height); 
//ctx.clearRect(0,0,canvas.width,canvas.height);
  handlePartical();
  const loop = Math.floor(Math.random() * 5) + 1.2; //this code control color to disappear quickly and not to be
  hue+=loop;
  requestAnimationFrame(animate);
}
animate();

const exite = confirm("this project made by Kanhaiya for Saniya 💙💙")

if(exite == false){
  alert("Where are You Going Dont go anywhere");}
   else{
    alert("अपनी उंगली से अपने मोबाइल की स्क्रीन को दबा कर घुमाओ और फिर जादू देखो 🧙‍♂️🧙‍♂️🤯 😎");
  }


