CanvasRenderingContext2D.prototype.clearScreen = function() {
	//paint the inside area black
	this.beginPath();
	this.rect(0, 0, canvas.width, canvas.height);
	this.fillStyle = '#000000';
	this.fill();
};

CanvasRenderingContext2D.prototype.drawParticle = function(particle) {
	this.beginPath();
	this.arc(particle.posX, particle.posY, particle.radius, 0, 2 * Math.PI, false);
	this.fillStyle = particle.color;
	this.fill();
};