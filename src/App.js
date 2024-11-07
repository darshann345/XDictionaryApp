import React, { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const handleSearch = () => {
    const word = searchTerm.trim().toLowerCase();
    console.log(word)
    if (word) {
      const foundWord = dictionary.find(
        (entry) => entry.word.toLowerCase() === word
      );
      if (foundWord) {
        setDefinition(foundWord.meaning);
        setErrorMessage("");
      } else {
        setDefinition("");
        setErrorMessage("Word not found in the dictionary.");
      }
    } else {
      setDefinition("");
      setErrorMessage("");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a word"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <p>
          <strong>Definition:</strong>
        </p>
        <p>{definition || errorMessage}</p>
      </div>
    </div>
  );
};

export default App;
