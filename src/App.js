import React, { useState } from "react";

const dictionary = {
  react: "A JavaScript library for building user interfaces.",
  component: "A reusable building block in React.",
  javascript: "A programming language commonly used for web development.",
};

const DictionaryApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const searchKey = searchTerm.trim().toLowerCase(); 
    const result = dictionary[searchKey] || "Word not found in the dictionary.";
    setDefinition(result); 
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); 
    setDefinition(""); 
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
