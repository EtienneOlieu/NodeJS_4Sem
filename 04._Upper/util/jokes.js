import Sentiment from "sentiment";
const sentiment = new Sentiment();
//import jokes from "./jokes.json" assert {type: "json"};
// Ny måde at gøre det på. Man bliver nødt til at fortælle systemet at det er JSON den skal fortolke det som.

async function getJoke(){
    const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
    const response = await fetch(URL);
    const result = await response.json();
    //const score = sentiment.analyze(result.joke);

    const jokeToAnalyze = result.joke || `${result.setup} ${result.delivery}`
    const { score } = sentiment.analyze(jokeToAnalyze);

    if (score < 5){
        return await getJoke();
    }
    return result;
}

//getJoke();
export default {
    getJoke
};