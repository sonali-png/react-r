class Car {
    constructor(brand, price, color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }
    showDetails() {
        console.log("Car details");
        console.log(`${this.brand} ${this.price} ${this.color}`);
    }
}

const CarObj = new Car("BMW" , 50000000, "Black");
CarObj.showDetails();