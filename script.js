const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let posX = 0; 

const boy = new Image();
const background = new Image();

background.src = "tlo.png";
boy.src = "boy.png"; 

function draw() {
  ctx.drawImage(background, 0, 0);
  ctx.drawImage(boy, posX, 400); 
  if(posX < 860)
  {
    posX = posX + 1;
  }
  
  requestAnimationFrame(draw);
}

draw();
