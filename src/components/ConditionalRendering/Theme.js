/*write a program to demonstrate toggle theme button and change 
the ui from dark to light theme and vise versa as per toggle state.*/
import React, { useState } from "react";
const Theme = () => {
    const [isDark, setTheme] = useState(true);

    document.body.style.backgroundColor = isDark ? "#121212" : "#ffffff";
    document.body.style.color = isDark ? "#ffffff" : "#000000";
    document.body.style.transition = "all 0.3s ease";
    const toggleTheme = () => {
        setTheme((prevTheme) => !prevTheme);
        document.body.style.backgroundColor = isDark ? "#121212" : "#ffffff";
        document.body.style.color = isDark ? "#ffffff" : "#000000";
        document.body.style.transition = "all 0.3s ease";
    };
    const Style = {
        backgroundColor: isDark ? "#121212" : "#fff",
        color: isDark ? "#fff" : "#000",
        height: "100px",
        padding: "20px",
    };

  return (
    <div className={isDark ? "dark" : "light"} style={Style}>
      <button onClick={toggleTheme}>
        Change to {isDark ? "Light" : "Dark"} Theme
      </button>
      <h1>{isDark ? "Dark" : "Light"}</h1>
    </div>
  );
};


export default Theme;