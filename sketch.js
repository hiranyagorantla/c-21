  var fixedrect;
  var movingrect;
  
  
  
  
  
  
  
  
  
  
  
  function setup() {
  createCanvas(800,400);
  fixedrect =createSprite(500, 200, 50, 50);
  fixedrect.shapeColor="green";

  movingrect =createSprite(500, 200, 50, 50);
  movingrect.shapeColor="green";




}

function draw() {
  background(255,255,255); 
  
  movingrect.x=mouseX
  movingrect.y=mouseY
 if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
  movingrect.y-fixedrect.y<movingrect.width/2+fixedrect.width/2&&
  fixedrect.y-movingrect.y<movingrect.width/2+fixedrect.width/2 ){
 fixedrect.shapeColor="blue";
 movingrect.shapeColor="blue";

  }
else{
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
}



  drawSprites();










  
}