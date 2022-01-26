var Jet, JetImg;
var backgroundImg;
var asteroid1, asteroid1Img;
var asteroid2, asteroid2Img;
var asteroid3, asteroid3Img;
var stars, starImg;
var satellite, satelliteImg;
function preload(){
  JetImg = loadImage("Fightjet .png");
  backgroundImg = loadImage("Spacebackground.jpg");
  asteroid1Img = loadImage("asteroid1.png");
  asteroid2Img = loadImage("asteroid2.png");
  asteroid3Img = loadImage("asteroid3.png");
  starImg = loadImage("Goldstar.png");
  satelliteImg = loadImage("spaceSatellite.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  Jet = createSprite(550, 750);
  Jet.addImage(JetImg);
  Jet.scale = 0.8;
  

}

function draw() { 
  background(189);
  image(backgroundImg, 0, 0, width, height);
  spawnAsteroids();
  spawnStars();
  spawnSatellites();

  if(keyDown(UP_ARROW)){
    Jet.y -= 10
  }

  if(keyDown(LEFT_ARROW)){
    Jet.x -=5;
  }

  if(keyDown(RIGHT_ARROW)){
    Jet.x +=5;
  }

  if(keyDown(DOWN_ARROW)){
    Jet.y += 10
  }

  drawSprites();
}

function spawnAsteroids(){
  if(frameCount % 150 == 0){
    var r = Math.round(random(50,width-50))
    asteroid1 = createSprite(r, 0);
    asteroid1.addImage(asteroid1Img);
    asteroid1.scale = 0.3;
    asteroid1.velocityY = 2;
  }
  
}

function spawnStars(){
  if(frameCount % 130 == 0){
    var s = Math.round(random(50,width-50))
    stars = createSprite(s, 0);
    stars.addImage(starImg);
    stars.scale = 0.3;
    stars.velocityY = 2;
  }
}

function spawnSatellites(){
  if(frameCount % 150 == 0){
    var e = Math.round(random(50,width-50))
    satellite = createSprite(e,0);
    satellite.addImage(satelliteImg);
    satellite.scale = 0.3;
    satellite.velocityY = 2;
  }
}