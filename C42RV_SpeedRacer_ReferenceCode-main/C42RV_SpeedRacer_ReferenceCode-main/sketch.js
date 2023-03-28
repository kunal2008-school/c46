var canvas;
var space , backgroundImage ,rocketpic ,asteroidpic,marspic;



function preload() {
  backgroundImage = loadImage("./assets/background2.jpeg");
 rocketpic = loadImage("./assets/rocket.jpg")
 asteroidpic = loadImage("./assets/asteroid-.png")
 marspic = loadImage("assets/mars.png")
}

function setup() {
  createCanvas (1000,800)
  space=createSprite(300,500,800,800);
 
  space.addImage(backgroundImage)
  spaceship=createSprite(300,100,20,20)
}

function draw() {
  background("black")
 space.velocityY = 5
drawSprites()
}