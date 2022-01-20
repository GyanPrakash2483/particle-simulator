class vector {
	constructor(i, j, k) {
		this.i = i;
		this.j = j;
		this.k = k;
	}
	
}

function vectorSum(v1, v2) {
	let sum = new vector(0, 0, 0);
	sum.i = v1.i + v2.i;
	sum.j = v1.j + v2.j;
	sum.k = v1.k + v2.k;
	return sum;
}

function dotProduct(v1, v2) {
	let dotproduct = v1.i*v2.i + v1.j*v2.j + v1.k*v2.k;
	return dotproduct;
}

function scalarProduct(v1, v2) {
	return dotProduct(v1, v2);
}

function crossProduct(v1, v2) {
		let crossproduct = new vector(0, 0, 0);
		crossproduct.i = v1.j * v2.k - v1.k * v2.j;
		crossproduct.j = v1.k * v2.i - v1.i * v2.k;
		crossproduct.k = v1.i * v2.j - v1.j * v2.i;
		return crossproduct;
}

function vectorProduct(v1, v2) {
	return crossProduct(v1, v2);
}
