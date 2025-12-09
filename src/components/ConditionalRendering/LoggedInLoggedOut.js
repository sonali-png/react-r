import React, {useState} from  'react';
function LoggedInLoggedOut() {
    const [userName, setUserName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        if(userName.trim === '' || userName.length === 0) {
            setIsLoggedIn(false);
            alert("Missing User name !");
        } else {
            setIsLoggedIn(true);
        }
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserName("");
    }
    if(isLoggedIn) {
        return (
            <div>
                <h2>Welcome, {userName} </h2>
                <button onClick={handleLogout}> Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Please login</h2>
                <input type="text" placeholder='username e.g. JohnDoe' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
        )
    }
}
export default LoggedInLoggedOut;