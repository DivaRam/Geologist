
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer;
var plane;
var stone;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer (10,100);
plane=new Plane (20,150,300,60);
stone=new Stone (200,600,800,90)
rubber= new Rubber (300,80,200)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  drawSprites();
 
}



