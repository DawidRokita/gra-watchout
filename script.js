const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let posX = 0; 
let move = 0.5;
let velocity = 0;

const boy = new Image();
const background = new Image();
let itemone = new Image();

background.src = "tlo.png";
boy.src = "boy.png"; 
itemone.src = "itemone.png"; 
let counterFrame = 0;

const item = [
	{
		x: Math.floor(Math.random() * 1000),
		y: 0
	}
];

function draw() {
  ctx.drawImage(background, 0, 0);
  ctx.drawImage(boy, posX, 400);


  document.addEventListener("keydown", function() {
      if(event.keyCode === 39){
        posX = posX + move;
      }else if(event.keyCode === 37){
        posX = posX - move;
      }
  });

  counterFrame++;

  for (let i = 0; i < item.length; i++) {
      ctx.drawImage(itemone, item[i].x, item[i].y);
      item[i].y = item[i].y + 5;
      if (item[i].x <= -100) {
          item.shift();
      }
  }

  if (counterFrame  == 100) {
      console.log("object");
      item.push({ x: Math.floor(Math.random() * 1000), y: 0 });
      counterFrame = 1;
  }

	if (posX > background.height - boy.height || posX < 0) {
    
	}


	requestID = requestAnimationFrame(draw);
}



draw();