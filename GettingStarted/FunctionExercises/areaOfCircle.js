/*const circle = {
    radius: 1,
    set radius(radius) {
        if (typeof radius === 'number') {
            throw new Error('radius must be number');
        }
        this.radius = radius;
    },
    get radius() {
        return this.radius;
    },

    get area() {
        return this.area;
    }

}

circle.radius(20);
console.log(circle.radius);

 */
const circle = {
    radius: 2,
    get area() {
        return Math.PI * (this.radius * this.radius);
    }
}

console.log(circle.area);