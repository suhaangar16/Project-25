
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground,bin1,bin2,bin3; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,500,19);

   	bin1 = new Bin(600,663,200,15);
	bin2 = new Bin(515,610,15,100);
	bin3 = new Bin(685,610,15,100);

	ground = new Ground(1,680,1600,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 paper.display();

 ground.display();

  bin1.display();
  bin2.display();
  bin3.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-50});
	}
}

