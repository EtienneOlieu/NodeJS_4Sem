const { response } = require("express")

console.log('Thanks for visiting')

const changeSite = setTimeout(()=>{
window.location.assign("/visitors")
}, 3000)

/* fetch("https://www.google.com")
.then(response => response.text())
.then((result) => )*/