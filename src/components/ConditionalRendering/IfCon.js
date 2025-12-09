import React, {useState} from  'react';
function IfCon() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if(isLoggedIn) {
        return (
            <div>
                <h3>Hello user </h3>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Hello Guest</h3>
            </div>
        )
    }
}
export default IfCon;