class particle {
	constructor(mass, charge, radius, size, color, posX, posY, isLocked) {
		this.mass = mass;
		this.charge = charge;
		this.radius = radius;
		this.size = size;
		this.color = color;
		this.posX = posX;
		this.posY = posY;
		
		if(isLocked === 'false') {
			this.isLocked = false;
		} else {
			this.isLocked = true;
		}
		
	}
	
	
}