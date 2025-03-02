import React, { useState } from "react";
import './style.css';
import News from "./news.tsx";

function Api() {
    const [keyWord, setKeyWord] = useState("bitcoin");
    const [key, setKey] = useState(localStorage.getItem("keyItem") || " ");
    const [newsData, setNewsData] = useState([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setKey(newValue);
        localStorage.setItem("keyItem", newValue);
    };

    const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyWord(event.target.id);
    };

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyWord(event.target.value);
    };

    const fetchData = () => {
        fetch(`https://newsapi.org/v2/everything?q=${keyWord}&apiKey=${key}`)
            .then((response) => response.json())
            .then((data) => {
                setNewsData(data.articles);
            });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        fetchData();
    };

    return (
        <>
            <header className="title">
                <h1>Fetch API</h1>
            </header>
            <div id="apiDiv">
                <h2>API Key</h2>
                <input id="apikey" value={key} onChange={handleInputChange} />
                <a href={"https://newsapi.org/"}>Get your API Key here</a>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Please select your preferred keyword:</legend>
                        <div>
                            <input type="radio" id="bitcoin" name="keyword" onChange={handleKeywordChange} defaultChecked={true} />
                            <label htmlFor="bitcoin">Bitcoin</label>

                            <input type="radio" id="crypto" name="keyword" onChange={handleKeywordChange} />
                            <label htmlFor="crypto">Crypto</label>

                            <input type="radio" id="loss" name="keyword" onChange={handleKeywordChange} />
                            <label htmlFor="loss">Loss</label>
                            <div>
                                <input type="text" id="text-input" name="keyword" onChange={inputHandler} />
                                <label htmlFor="text-input">Custom</label>
                            </div>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <News data={newsData} />
        </>
    );
}

export default Api;