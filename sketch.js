var randomnumber=0;
var ninja;
function preload(){
  ninja = loadImage("player1.png");
}
function setup() {
  createCanvas(400, 400);
  generateRandomNumber(50,200);
  playerRunning = createSprite(randomnumber,300,10,10)
  playerRunning.addImage("playerRunning",ninja)
  playerRunning.scale=0.5;
}

function generateRandomNumber(min, max) { 
  num  = Math.random() * (max - min) + min;
  console.log(num)
  randomnumber = Math.floor(num);
} 

function draw() {
  background(220);
  drawSprites();
}