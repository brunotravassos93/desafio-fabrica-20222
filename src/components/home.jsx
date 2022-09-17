import React, { useEffect, useState } from "react";

function ChuckNorris() {

  const [facts, setFacts] = useState("facts here");

  useEffect(() => {
    getFacts();
  }, []);

  const getFacts = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    setFacts(data.value);
}

  return (
    <div className="container">
      <h1>Chuck Norris Facts</h1>
      <p className="facts joke">{facts}</p>
      <button type="button" className="btn"
      onClick={getFacts}>
        Get Another Fact
      </button>
    </div>
  );
};

export default ChuckNorris;