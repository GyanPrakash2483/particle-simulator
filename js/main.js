const canvas = document.getElementById('canvas');
const mass = document.getElementById('mass');
const charge = document.getElementById('charge');
const size = document.getElementById('size');
const color = document.getElementById('color');
const vX = document.getElementById('vX');
const vY = document.getElementById('vY');
const isLocked = document.getElementById('isLocked');
const ctx = canvas.getContext('2d');

var particles;


isLocked.value = 'true';

isLocked.onclick = function() {
	if(isLocked.value == 'true') isLocked.value = 'false';
	else isLocked.value = 'true';
}
canvas.onclick = function(e) {
	let rect = e.target.getBoundingClientRect();
    let posX = e.clientX - rect.left; //x position within the element.
    let posY = rect.bottom - e.clientY;  //y position within the element.
	
	let _particle = new particle(mass.value, charge.value, size.value, color.value, posX, posY, vX.value, vY.value, isLocked.value);
	console.log(_particle);
}
