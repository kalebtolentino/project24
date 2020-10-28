
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, box01, box02, box03, box1, box2, box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	box01=createSprite(width/2,600,width/4,10);
	box01.shapeColor=color(255,0,0);
	box02=createSprite(width/2-100,560,10,height/8);
	box02.shapeColor=color(255,0,0);
	box02=createSprite(width/2+100,560,10,height/8);
	box02.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,100);
	box1 = Bodies.rectangle(width/2, 600,width,10,{isStatic:true});
	World.add(world, box1);
	box2 = Bodies.rectangle(width/2-100,560,10,height/8,{isStatic:true});
	World.add(world, box2);
	box3 = Bodies.rectangle(width/2+100,560,10,height/8,{isStatic:true});
	World.add(world, box3);


	Engine.run(engine);
  
}


function draw() {
	engine.update(engine);
	rectMode(CENTER);
	background(0);

	paper.display();
	box1.display();
	box2.display();
	box3.display();
    ground.display();
	drawSprites();
 
}



