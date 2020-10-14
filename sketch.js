
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var d1,d2,g1,p1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	g1= new Ground(600,height,1200,20);
	d1= new Dustbin(490,640,20,100);
	d2= new Dustbin(710,640,20,100);
	d3= new Dustbin(600,680,200,20)
	p1= new Paper(70,610)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  g1.display();
  d1.display();
  d2.display();
  d3.display();
  p1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(p1.body,p1.body.position,{x:60,y:-60});
	}
}

