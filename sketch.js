var mcanvas;
function setup() {
  noCanvas()
  mcanvas = select("#MMFCanvas");
  mcanvas.size(windowWidth, windowHeight);

}

function draw() {
	background(235);
}
function windowResized(){
	mcanvas.size(windowWidth, windowHeight);
	
}
	