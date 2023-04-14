/*
Why: Because JS is single-threaded adn we don't want to block the server.

Examples:
Fetching over a network
Many / Heavy calculations
Cryptographic functions
Reading/writing to files
Databases

*/

/* Solution 1: Callbacks
Con: Callback hell, Pyramid of DOOM
*/

/* Solution 2: Promises
Con: Promises still use callbacks
Two states:
-pending
-fulfilled (has two substates)
    -rejected
    -resolved

*/

/*Solution 3: Async/Await
*/


new Promise((resolve, reject) => {
    setTimeout(() => {
    try{
        resolve("Yay!")
    } catch {
        reject("Nooo!")
    }

    }, 3000); //timer for at repræsentere responstid.
})
.then(successMessage => console.log("Success message:", successMessage))
.catch(errorMessage => console.log("Error message:", errorMessage));

function celebrate(name){ //function "celebrate" is wrapped in a promise
    return new Promise((resolve, reject) => {
        if(name) {
            resolve(`Yay ${name} you are cool`)

        } else {
            reject("No name specified")
        }
    });

}

celebrate()
.then(celebrationMessage => console.log(celebrationMessage));

function somethingGoodSomethingBad(){
        return new Promise((resolve, reject) => {
        setTimeout(()=>{
            try{
                throw error
                resolve("GOOD")
            } catch{
                reject("BAD")
            }
        }, 2000);
    });
};

somethingGoodSomethingBad()
.then(console.log)
.catch(console.log)


//IIFE eller Immediatly Invoked Function Expression
(async function getGoodOrBadMessage(){
    const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
    console.log(somethingGoodSomethingBadMessage, celebrationMessage);
})();

function parallel(){ //afventer flere promises på én gang.
    Promise.all([somethingGoodSomethingBad(), celebrate("All of us")])
}