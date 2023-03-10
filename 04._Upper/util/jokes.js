import jokes from "./jokes.json" assert {type: "json"};
// Ny måde at gøre det på. Man bliver nødt til at fortælle systemet at det er JSON den skal fortolke det som.

export default jokes;

console.log(jokes)