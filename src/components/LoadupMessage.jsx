import { useState, useEffect } from "react";

export default function LoadupMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let loadupMessage = "";
    const str = "Hello There!";
    let index = 0;

    const intervalId = setInterval(() => {
      loadupMessage += str[index];
      setMessage(loadupMessage);
      index++;
      if (index === str.length) {
        clearInterval(intervalId);
      }
    }, 130);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="loadupMessage">
      <h1>{message}</h1>
    </div>
  );
}
