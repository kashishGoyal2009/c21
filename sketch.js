var bullet ,wall;
var thcikness,speed,weight;

function setup() {
 
  createCanvas(1600,400);
  thcikness=Math.round(random(22,83))
  speed=Math.round(random(223,321))
  weight=Math.round(random(30,52))

  bullet=createSprite(400, 200, 50, 20);
  bullet.velocityX=speed;
  bullet.shapeColor=color(80,80,80)

  wall=createSprite(1200,200,thcikness,height/2)
  wall.shapeColor="black"
  
 
  
  
}

function draw() {
  background(255);
  if((wall.x-bullet.x) <=(wall.width/2+bullet.width/2)){
    bullet.velocityX=0
  }
    var deformation=0.5*weight*speed*speed/wall.width*wall.width*wall.width
    if(deformation<10){
      bullet.shapeColor="green"
    }
   
    if(deformation>10){
      bullet.shapeColor="red"
    }
  drawSprites();
}