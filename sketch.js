
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constriant;

var ground, box, base1, base2, base3 , box2, box3, box4, box5, box6, box7,box8, box9, box10, box11, box12, box13,
polygon, sling;
var box14, box15, box16, box17, box18, box19,box10, box11, box12, box13, box14, box15;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
       ground= new Ground(600, 495,1200, 30 )
	     base1 = new Ground(570, 290, 200, 20)
	     base2= new Ground(900, 250, 160, 20)
	  
		
		
		 box1= new Box(640, 242,  40, 50)
	   box2= new Box(510, 242, 40, 50)
	   box3= new Box(555, 242, 40, 50)
	   box4= new Box(595, 242, 40, 50)
	   box5= new Box(575, 192, 40, 50)
	   box6= new Box(535, 192, 40, 50)
	   box7= new Box(615, 192, 40, 50)
	   box8= new Box(550, 142, 40, 50)
	   box9= new Box(590, 142, 40, 50)
	   box10= new Box(570, 92, 40, 50)
	   polygon=new Polygon(100, 200)
	   box14= new Box(900, 225,  40, 50)
	   box15= new Box(940, 225, 40, 50)
	   box16= new Box(860, 225, 40, 50)
	   box17= new Box(880, 185, 40, 50)
	   box18= new Box(920, 185, 40, 50)
	   box19= new Box(900, 135, 40, 50)

     
	   Engine.run(engine);







}


function draw() {
  rectMode(CENTER);
  background(0);
  base1.display();
  base2.display();
  ground.display();
   

  box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 polygon.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 
}



function mouseDragged()  {
    Matter.Body.setPosition(polygon.body , {x:mouseX, y:mouseY})


}




function mouseReleased() {

SlingShot.fly();




}


