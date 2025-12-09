import React, { useState } from "react";

const TernaryOnlineOffline = () => {
  const [isOnline, setIsOnline] = useState(true);
  return (
    <div>
          <h2>{isOnline ? "User is Online" : "User is offline"}</h2>
          <button onClick={ () => setIsOnline((prev) => !prev) }>
            {isOnline ? "Go Offline" : "Go Online"}
          </button>
    </div>
  );
};

export default TernaryOnlineOffline;