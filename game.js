/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 400;
const SCREEN_HEIGHT = 200;
const PLAYER_WIDTH = 25;
const PLAYER_HEIGHT = 25;


/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  world.gravity.y = 80;
 cnv = new Canvas(SCREEN_WIDTH ,SCREEN_HEIGHT );
 player = new Sprite(PLAYER _HEIGHT, SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd'); 
 player .color = 'pink';
 
 wall = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT,  SCREEN_WIDTH, 5, 'k'); 
  wall .color = 'pink';
  

document.addEventListener("keydown", 
        function(event) {
                        console.log("Key pressed!"+player.y);

            if(player.y > 184 ){
            console.log("Key pressed!");
            player.vel.y = -20;
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
