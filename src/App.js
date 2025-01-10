import React,{useState,useEffect} from "react";

const App = () =>{
    const [searchWord,setSearchWord] = useState("")
    const [result,setResult] = useState("")
    const [dictionary] =useState(
        [
            { word: "React", meaning: "A JavaScript library for building user interfaces." },
            { word: "Component", meaning: "A reusable building block in React." },
            { word: "State", meaning: "An object that stores data for a component." }
        ]
    )

    const handleSearch = () =>{
        if(searchWord.trim() === ""){
            setResult('')
            return
        }
        const foundWord = dictionary.find((item)=>item.word.toLowerCase() === searchWord.toLowerCase())
       if(foundWord){
           setResult(`${foundWord.meaning}`)
       }else{
           setResult(`Word not found in dictionary`)
       }
    }
    return(
        <>
            <div>
                <h1>Dictionary  App</h1>
                <input
                    value = {searchWord}
                    placeholder="Search for a word"
                    onChange = {(e)=>setSearchWord(e.target.value)}
                    />
                <button onClick={handleSearch}>Search</button>
                <h5>Defination :</h5>
                {
                    result && (
                        <>
                            <p>{result}</p>
                        </>
                    )
                }
            </div>
        </>
    )
}
export default App;
