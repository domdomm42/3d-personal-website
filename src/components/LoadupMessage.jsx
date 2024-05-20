import { useState, useEffect } from "react";

export default function LoadupMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let loadupMessage = "";
    const str = "Welcome to my website!";
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

  return <h1>{message}</h1>;
}
