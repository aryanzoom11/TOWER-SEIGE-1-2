const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint= Matter.Constraint
var engine, world;


function setup(){  
    var canvas = createCanvas(800,600);
    engine = Engine.create();  
    world = engine.world;
    ground1=new Ground(350,400,300,20)

    box1= new Box(250,340,50,50)
    box2= new Box(300,340,50,50)
    box3= new Box(350,340,50,50)
    box4= new Box(400,340,50,50)
    box5= new Box(450,280,50,50)
    box6= new Box(500,280,50,50)
    box7= new Box(550,280,50,50)
    ball=Bodies.circle(50,200,20)
    //box1= new Box(100,100,50,50)
    //box1= new Box(100,100,50,50)
    sling1= new SlingShot(ball.body,{x:200,y:200})
}

function draw(){
    
    background(0)
    Engine.update(engine);
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   sling1.display();
   ground1.display();
   ellipseMode(CENTER)
    ellipse(ball.position.x,ball.position.y,20,20)
}


