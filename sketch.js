var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ninja , ninja_running , ninja_collided;
var bg , in_ground

var ob1 , ob2 

var gameover


function preload(){
ninja_running = loadAnimation ("R-1.png","R-2.png" , "R-3.png" , )
ninja_collided = loadAnimation ("R-4.png");

bg = loadImage ("BG-1");

ob1 = loadImage ("plate2.png")
ob2 = loadImage ("plate3.png")

gameover = loadImage ("plate.png")
restart = loadImage  ("restart.png")

}

function setup() {
 createCanvas (1280,640);

 ninja = createSprite(50,160,20,50);
 ninja.addAnimation("running",ninja_running);
 ninja.addAnimation("collided",ninja_collided);

 ninja.scale = 0.68;

 bg = createSprite(200,180,400,20);
  bg.addImage("bg",bgImage);
  bg.x = bg.width /2;
  
  gameover = createSprite(300,100);
  gameover.addImage(plateImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 
  gameover.scale = 0.8;
  restart.scale = 0.67;
  
  invisibleGround = createSprite(200,190,400,10);
  in_ground.visible = false;

  obGroup = createGroup();
  
}

function draw() 
    
    
    //text("Score: "+ score, 500,50);
    
    
   // if(gameState === PLAY){
  
    //  gameOver.visible = false;
     // restart.visible = false;
      
     //bg.velocityX = -(4 + 3* score/100)
      
     // score = score + Math.round(getFrameRate()/60);
      
     // if(score>0 && score%100 === 0){
     //    checkPointSound.play() 
     // }
      
      //if (bg.x < 0){
     //   bg.x = n=bg.width/2;
      //}
      
      
      //if(keyDown("space")&& ninja.y >= 100) {
       //   ninja.velocityY = -12;
          
      //}
      
    
    //  ninja.velocityY = ninja.velocityY + 0.8
//}
//spawnObsgroup();
//if(obGroup.isTouching(ninja)){
    
    
   // gameState = END;
    
//}
//else if (gameState === END) {
  //  gameOver.visible = true;
  //  restart.visible = true;
   
  
    //ninja.changeAnimation("collided", ninja_collided);
  
   
   
  //  bg.velocityX = 0;
  ///  ninja.velocityY = 0
//
   // obGroup.setLifetimeEach(-1);
    
   //  obGroup.setVelocityXEach(0);
       
    // ninja.collide(invisibleGround);
  
    // if(mousePressedOver(restart)) {
         reset();
      // }
   
   
     drawSprites();
  // }
   function reset(){
    gameState= PLAY;
  gameOver.visible = false
  restart.visible= false
  obGroup.destroyEach()
  
  score = 0
  ninja.changeAnimation("running", ninja_running);
  }
  function spawnObstacles(){
    if (frameCount % 60 === 0){
      var ob = createSprite(1280,165,10,40);
      ob.velocityX = -(6 + score/100);
      
       //generate random obstacles
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: ob.addImage(ob1);
                 break;
         case 2: ob.addImage(ob2);

       }
    }
}
ob.scale = 0.7;
obstacle.lifetime = 540;

obsGroup.add(ob);

