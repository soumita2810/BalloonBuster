var bow , arrow,  back_ground, red_balloon, pink_balloon, green_balloon      ,blue_balloon;
var bowImage, arrowImage, green_balloonImage, red_balloonImage,              pink_balloonImage, blue_balloonImage, back_groundImage;
var arrowGroup, red_balloonGroup, pink_balloonGroup, blue_balloonGroup,  green_balloonGroup; 


var score = 0;

function preload(){
  
  back_groundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  back_ground = createSprite(0,0,600,600);
  back_ground.addImage(back_groundImage);
  back_ground.scale = 3;
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  //crate arrow and balloons groups
  red_balloonGroup = createGroup();
  blue_balloonGroup = createGroup();
  pink_balloonGroup = createGroup();
  green_balloonGroup = createGroup();
  arrowGroup = createGroup();
   
}

function draw() {
    
  // moving ground
  back_ground.velocityX = -3 ;
  
  if (back_ground.x < 0)
  {
     back_ground.x = back_ground.width/2;
  }
  
  //moving bow
  bow.y = World.mouseY;
  
  // release arrow when space key is pressed
  if (keyDown("space")) 
  {
     createArrow(); 
  }
  
  if (frameCount % 100 == 0)
  { 
     //creating continous enemies
     var select_balloon = Math.round(random(1,4));

     switch(select_balloon)
     {
         case 1 : select_balloon = redBalloon();
                  break;
         
         case 2 : select_balloon = blueBalloon();
                  break;
         
         case 3 : select_balloon = pinkBalloon();
                  break;
        
         case 4 : select_balloon = greenBalloon();
                  break;  
         default: break;          
     }
  }

  if(red_balloonGroup.isTouching(arrowGroup))
  {
     red_balloonGroup.destroyEach();
     arrowGroup.destroyEach();
     score = score+1;
  }
  if(pink_balloonGroup.isTouching(arrowGroup))
  {
     pink_balloonGroup.destroyEach();
     arrowGroup.destroyEach();
     score = score+1;
  }

  if(blue_balloonGroup.isTouching(arrowGroup))
  {
     blue_balloonGroup.destroyEach();
     arrowGroup.destroyEach();
     score = score+1;
  }
  if(green_balloonGroup.isTouching(arrowGroup))
  {
     green_balloonGroup.destroyEach();
     arrowGroup.destroyEach();
     score = score+1;
  }
    
  drawSprites();
  
  fill("black");
  textSize(20);
  text("Score: "+ score, 500,50);

}


function redBalloon() 
{

  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 200;
  red.scale = 0.1;
  red_balloonGroup.add(red);
  
}

function blueBalloon() 
{
  
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 200;
  blue.scale = 0.1;
  blue_balloonGroup.add(blue);
  
}

function greenBalloon() 

{
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 200;
  green.scale = 0.1;
  green_balloonGroup.add(green);
  
}

function pinkBalloon() 
{
  
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 200;
  pink.scale = 1;
  pink_balloonGroup.add(pink);
  
}


// Creating  arrows for bow
function createArrow() 
{
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.scale = 0.3;
  
  arrow.x = 360;
  arrow.y=bow.y;
  
  arrow.velocityX = -10;
  arrow.lifetime = 60;
  
  arrowGroup.add(arrow); 
}