import React, {Component} from 'react';
class User extends Component {
    render() {
        return (
            <div>
                <h2>User</h2>
                <p>Name : {this.props.name}</p>
                <p>Age : {this.props.age}</p>
            </div>
        );
    }
}
User.defaultProps = {
    name: "Guest"
}
export default User;