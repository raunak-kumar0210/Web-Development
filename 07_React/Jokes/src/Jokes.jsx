import { useState, useEffect } from "react";
import "./Jokes.css";

export default function Jokes() {
    let [joke, setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    };

    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
        }
        getFirstJoke();
    }, []);

    return (
        <div className="joke-container">
            <h3 className="joke-title">Jokes of the Day!</h3>
            <div className="joke-card">
                <h2 className="joke-setup">{joke.setup || "Loading setup..."}</h2>
                <h2 className="joke-punchline">{joke.punchline || "Loading punchline..."}</h2>
            </div>
            <button className="joke-button" onClick={getNewJoke}>
                New Joke
            </button>
        </div>
    );
}
