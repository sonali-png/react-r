import { Component } from "react";
class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: props.brand,
            price: props.price,
            color: props.color
        }
    }
    render() {
        return (
            <div>
                <h3>Car Details</h3>
                <ul>
                    <li>Brand Name: {this.state.brand}</li>
                    <li>Price: {this.state.price}</li>
                    <li>Color: {this.state.color}</li>
                </ul>
            </div>
        )
    }
}
export default Car;