import React, { useEffect, useState } from "react";
import "./page.css";

function AutoComplete() {
  const [results, setResults] = useState([]);
  const [input, setInputs] = useState("");
  const [showResults, setShowResults] = useState(false);
  //cache
  const [cache, setCache] = useState({})

  const fetchData = async () => {

    if(cache[input]) {
        console.log("cache returned", input)
        setResults(cache[input]);
        return;
    }

    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const response = await data.json();
    setResults(response.recipes);
    console.log(input);
    setCache(prev => ({...prev, [input]: response.recipes}))
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    // this only calls when component is unmounting
    return () => {
        clearTimeout(timer);
    };
  }, [input]);

  return (
    <div>
      <h1>AutoComplete</h1>
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => setInputs(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
        {showResults && (
          <div className="result-conatiner">
            {results.map((x) => (
              <span className="result" key={x.id}>
                {x.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AutoComplete;

// https://dummyjson.com/recipes/search?q=Margherita
