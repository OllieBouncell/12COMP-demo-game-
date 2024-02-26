/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 500;
const SCREEN_HEIGHT = 250;
const PLAYER_WIDTH = 25;
const PLAYER_HEIGHT = 25;


/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  world.gravity.y = 10;
 cnv = new Canvas(SCREEN_WIDTH ,SCREEN_HEIGHT );
 player = new Sprite(PLAYER_HEIGHT, SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd'); 
 player .color = 'pink';
    wall = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT,  SCREEN_WIDTH, 5, 'k'); 
  wall .color = 'pink';
  
  
document.addEventListener("keydown", function(event) {

  if (event.code === 'ArrowUp') {
player.vel.y = 50;
    // Set sprite's velocity to the left

  }
  });
 
document.addEventListener("keyup", function(event) {

  if (event.code === 'ArrowUp') {
player.vel.y = 0;
    // Set sprite's velocity to 0

  }
 
});  
  
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background('black');
}

/*******************************************************/
//  END OF APP
/*******************************************************/
