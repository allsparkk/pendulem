
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new roof (600,100,1200,20)
	b1 = new bob (100,500,40)
	b2 = new bob (180,500,40)
	b3 = new bob (250,500,40)
	b4 = new bob (330,500,40)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display()
 b1.display()
 b2.display()
 b3.display()
 b4.display()
}



