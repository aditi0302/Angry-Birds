const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig, log;

function setup(){
    var canvas = createCanvas(800,630);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,height,1200,20)
    box1 = new Box(200,300,80,80);
    box2 = new Box(500,100,80,80);
    pig = new Pig(350,200);
    log= new Log(370,90,390,PI/2)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    
    //ground.display();
    pig.display();
    log.display();
}