
class Circle {
	constructor(radius, color = "red") {
		this.radius = radius;
		this.color = color;
	}
	getRadius() {
		return this.radius.toFixed(2);
	}
	setRadius(newRadius) {
		this.radius = newRadius;
	}
	getColor() {
		return this.color;
	}
	setColor(newColor) {
		this.color = newColor;
	}
	getArea() {
		return (Math.PI * this.radius * this.radius).toFixed(2);
	}
	getCircumference() {
		return (2 * Math.PI * this.radius).toFixed(2);
	}
	toString() {
		return [this.radius, this.color];
	}
}

let obj = new Circle(7,"red");
obj.setRadius(8);
console.log(obj.getRadius());
obj.setColor("green");
console.log(obj.getColor());
console.log(obj.getArea());
console.log(obj.getCircumference());
console.log(obj.toString());

//Output
//PS C:\Users\kavya\OneDrive\Desktop\B32 WE TAMIL\jslearning> node script.js
//8.00
//green
//201.06
//50.27
//[ 8, 'green' ]

