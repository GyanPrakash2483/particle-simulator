const canvas = document.getElementById('canvas');
const plane = canvas.getContext('2d');
const menu = document.getElementById('menu');


//Size the canvas with respect to screen size.
if(innerHeight > innerWidth) {
	menu.style.float = 'bottom';
	canvas.width = innerWidth;
	canvas.height = innerWidth;
} else if(innerWidth >= innerHeight) {
	menu.style.float = 'right';
	canvas.height = innerHeight;
	canvas.width = innerHeight;
}

plane.clearScreen(); //paint background black


//get Particle Spawn Config elements
const mass = document.getElementById('mass');
const charge = document.getElementById('charge');
const radius = document.getElementById('radius');
const size = document.getElementById('size');
const color = document.getElementById('color');
const isLocked = document.getElementById('isLocked');

//Set to default values
mass.value = 1;
charge.value = 0;
radius.value = 5;
size.value = 0;
color.value = '#FF0000';
isLocked.value = 'false';

isLocked.onclick = function() {
	if(isLocked.value === 'true') {
		isLocked.value = 'false';
	} else {
		isLocked.value = 'true';
	}
};

canvas.onclick = function(e) {
	//get touch coordinates
	let rect = canvas.getBoundingClientRect(); 
	let posX = e.clientX - rect.left;
	let posY = e.clientY - rect.top;

	//make Particle
	let dot = new particle(mass.value, charge.value, radius.value, size.value, color.value, posX, posY, isLocked.value);
	
	//draw Particle
	plane.drawParticle(dot);
};