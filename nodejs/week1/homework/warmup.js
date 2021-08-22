console.log("inside warmup file");

// Task1 - Circle calculator
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        return this.radius * 2;
    }

    getCircumference() {
        return (Math.PI * this.getDiameter() * 2).toFixed(2);
    }

    getArea() {
        return (Math.PI * this.radius ** 2).toFixed(2);
    }
}

const circle1 = new Circle(6);
const circle2 = new Circle(8);
const circle3 = new Circle(13);
const circle4 = new Circle(17);

console.log("----------- " + "Circle 1:" + " ---------------------------")
console.log("Diameter: " + circle1.getDiameter() + " Circumference: "
    + circle1.getCircumference() + " Area: " + circle1.getArea())

console.log("----------- " + "Circle 2:" + " ---------------------------")
console.log("Diameter: " + circle2.getDiameter() + " Circumference: "
    + circle2.getCircumference() + " Area: " + circle2.getArea())

console.log("----------- " + "Circle 3:" + " ---------------------------")
console.log("Diameter: " + circle3.getDiameter() + " Circumference: "
    + circle3.getCircumference() + " Area: " + circle3.getArea())

console.log("----------- " + "Circle 4:" + " ---------------------------")
console.log("Diameter: " + circle4.getDiameter() + " Circumference: "
    + circle4.getCircumference() + " Area: " + circle4.getArea())

