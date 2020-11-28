
var hamster1,hamster2,hamster3, hamster4,hamsterImg,hamster;
var cheese;
var player, playerImg1, playerImg2;
var player_Animation;

function preload()
{
    hamsterImg = loadImage("images/hamster3.png");
    playerImg1 = loadImage("images/Boy 1.png");
    playerImg2 = loadImage("images/Boy 2.png");
    player_Animation = loadAnimation("images/Boy 1.png", "images/Boy 2.png");
  
    cheeseImg=loadImage("images/cheese.png");
    //backgroundImg = loadImage("images/roadback.jpg");
    hammerSound = loadSound("sounds/Hammer1.mp3");
    startImg=loadImage("images/start.png");
    restartImg = loadImage("images/restart.png");

    backSound1 = loadSound("sounds/retro.mp3")
    backSound2 = loadSound("sounds/backSound2.mp3")
    checkSound = loadSound("sounds/checkPoint.mp3");
    gameoverSound = loadSound("sounds/game_over.mp3")
}

function setup()
{
   createCanvas(displayWidth-200,displayHeight-200);
       

   player = createSprite(displayWidth/2, displayHeight/2);
   player.addAnimation("player",player_Animation);
   player.scale = 0.4;
 
    player.x=300;
    player.y=300;

    hamster1 = createSprite(997,385)
    hamster1.addImage(hamsterImg);
    hamster1.scale = 0.2

   cheese=createSprite(displayWidth/2-100,displayHeight/2+100);
   cheese.addImage(cheeseImg);
   cheese.scale=0.5;
   //cheese.debug=true;
   cheese.setCollider("circle",0,20,200);
   
}


function draw()
{
  background("red");
    
  player.x = mouseX;
  player.y = mouseY;



  drawSprites();
 
}
