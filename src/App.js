import React, { useState } from "react";

// Sample dictionary for testing purposes
const dictionary = {
  React: "A JavaScript library for building user interfaces.",
  Component: "A reusable building block in React.",
  JavaScript: "A programming language commonly used for web development.",
};

const DictionaryApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    // Check if the word exists in the dictionary, ignoring case
    const result = dictionary[searchTerm.trim()] 
      || dictionary[searchTerm.trim().toLowerCase()];

    if (result) {
      setDefinition(result);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setDefinition(""); // Clear the definition on new input
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h3>Definition:</h3>
        <p>{definition}</p>
      </div>
    </div>
  );
};

export default DictionaryApp;
