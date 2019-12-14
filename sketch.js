var mcanvas;
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));
}

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

	