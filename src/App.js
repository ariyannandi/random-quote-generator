import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState({ advice: "" });

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch(`https://api.adviceslip.com/advice`, { cache: "no-cache" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.slip.advice);
        let advice = data.slip.advice;
        setState({ advice });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const { advice } = state;
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
