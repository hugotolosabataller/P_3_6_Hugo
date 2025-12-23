let myFont;
let cp=document.getElementById("colorpicker");
let cp2=document.getElementById("colorpicker2");

function preload(){
  myFont=loadFont("../fonts/Gulax-Regular.otf")
  gulax
}
function setup() {
  var c=createCanvas(400, 400);
  c.parent("canvasWrapper")
}

function draw() {
  background(cp.value);
  textAlign(CENTER);
  textSize(40);
  textFont(myFont);
  fill(cp2.value);
  text("hola bon dia", width/2, height/2);
}
