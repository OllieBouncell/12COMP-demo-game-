console.log("%c t01_create_sprite", "color: blue;");

/*******************************************************/
// variables()
/*******************************************************/

const SCREEN_WIDTH = 400;
const SCREEN_HEIGHT = 200;;
const OBSTACLE_HEIGHT = 25;
const OBSTACLE_WIDTH = 25;


var spawnDist = 0;
var nextSpawn = 0;

var lives = 3;
/*******************************************************/
// setup()
/*******************************************************/

function preload() {
imgPlayer = loadImage('/images/player.png');

}





function setup() {
    console.log("setup: ");
    
    cnv= new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    fill('red');
     obstacles = new Group();

    wallLH  = new Sprite(0, SCREEN_HEIGHT/2, 8, SCREEN_HEIGHT , 's');
    wallLH.color = 'lightblue';
    WallLH = noStroke()
 
    
    wallTop = new Sprite(SCREEN_WIDTH/2, 0,SCREEN_WIDTH, 8, 's');
    wallTop.color = 'lightblue';
    WallTop = noStroke()
  
    
    wallBot = new Sprite(SCREEN_WIDTH/2,  SCREEN_HEIGHT , SCREEN_WIDTH, 8, 's ');
    wallBot.color = 'lightblue';
    WallBot = noStroke()
   
 
 
 
 
 
 //P5.play website//
    player = new Sprite(100, 100, 20, 'd');
    player.color = 'green';
 
     player.addImage(imgPlayer);
    imgPlayer.resize(100, 100);
 


 
 
 
 // Keyboard Movement-Up and Down //
document.addEventListener("keydown", function(event) {

  if (event.code === 'ArrowLeft') {
player.vel.x = -3;
    // Set sprite's velocity to the left

  }

 else if 
(event.code === 'ArrowRight')  player.vel.x = 3;
else if 
(event.code === 'ArrowUp') player.vel.y = -3;
else if 
(event.code === 'ArrowDown')  player.vel.y = 3; 


});



document.addEventListener("keyup", function(event) {

  if (event.code === 'ArrowLeft') {
player.vel.x = 0;
    // Set sprite's velocity to 0

  }

 else if 
(event.code === 'ArrowRight')  player.vel.x = 0;
else if 
(event.code === 'ArrowUp')  player.vel.y = 0;
else if 
(event.code === 'ArrowDown')  player.vel.y = 0;

obstacles.collides(player, playerHitAlien);

});



}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
 background("lightblue");
 player.rotation = 0;
 player.bounciness = 0;
 allSprites.visible = true;
     for (i = 0; i <lives; i++){
    rect(40 * i, 10, 35, 35);
  }


   if(frameCount> nextSpawn){
        newObstacle();
        nextSpawn = frameCount + random(10,200);
    }
}


 
  



function newObstacle(){
    // Code from Geodash
    var screenY = random(15,200)
    obstacle = new Sprite(SCREEN_WIDTH, screenY, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k');
    obstacle.color = color("green");
    obstacle.vel.x = -1;
    
    obstacles.add(obstacle);
}



function playerHitAlien (_player,alien) {

    lives --;
    console.log("Lives");
 
 
 
 
}





