const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3;
var ground;
function setup(){
    var canvas = createCanvas(windowWidth/1.5,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(550,250,50,50);   
    box2=new Box(530,150,70,140);  
    box3=new Box(500,10,70,75);
    ground=new Ground(windowWidth/3,662.66666666,windowWidth/1.5,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
}

