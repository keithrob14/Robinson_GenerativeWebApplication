var gui;
 
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(10);
  background('lightblue')
  let d = select('.div-block-3');
  d.position(0,0);
  f = select('#my-gui-container');

  gui = new Gui();
  let gui_setup = new dat.GUI();

//Size of Sphere
  gui_setup.add(gui,'size',50,200).step(1);  

//Leaving Red as a constant 
  gui_setup.add(gui,'green',0,255).step(1);
  gui_setup.add(gui,'blue',0,255).step(1);
  
//Stroke Weight
  gui_setup.add(gui,'strokeWeight',1,15).step(.5);

//Manual Rotation
  gui_setup.add(gui,'rotatex',1,100).step(.25);
  gui_setup.add(gui,'rotatey',1,100).step(.25);
  gui_setup.add(gui,'rotatez',1,100).step(.25);
  
//Stroke Color
  gui_setup.add(gui,'strokeShade',0,255).step(1);
  
  
//Stroke Color
  gui_setup.add(gui,'moveLR',-400,400).step(1);
  gui_setup.add(gui,'moveUD',-400,400).step(1);
    
  //gui_setup.add(gui,'ShowDescription').onChange(description);
} 


function draw() {
  translate(gui.moveLR,gui.moveUD);
  
  sphere();
  
  rotateX(gui.rotatex);
  rotateY(gui.rotatey);
  rotateZ(gui.rotatez);
  sphere(gui.size);
  fill(100, gui.green, gui.blue);
  stroke(gui.strokeShade);
  
  strokeWeight(gui.strokeWeight); 
}


function update() {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    redraw();
}

function Gui(){
  this.size = 50;
  this.green = 0;
  this.blue = 0;
  this.strokeWeight = 1;
  this.rotatex=1;
  this.rotatey=1;
  this.rotatez=1;
  this.strokeShade=255;
  this.moveLR=0;
  this.moveUD=0;
  //this.ShowDescription= true;
}


function mouseDragged(){
  redraw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    background('lightblue')
}
