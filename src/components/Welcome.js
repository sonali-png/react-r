import React from 'react';
const Welcome = ({name = "Guest"}) => {
    return (
        <div>
            <h2>Hello, {name}!</h2>
        </div>
    )
}
export default Welcome;