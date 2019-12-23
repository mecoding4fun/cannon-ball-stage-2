const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, cannon;
var angle = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width-585, height-20, 1400, 50); 
  cannon = new Cannon(width-1180,height-125,60,30);
  
}

function draw() {
  background(255);
  console.log(angle);
  Engine.update(engine);

  //Display
  ground.display();
  cannon.display();
}
