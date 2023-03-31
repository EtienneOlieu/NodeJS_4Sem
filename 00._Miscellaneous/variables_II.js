"use strict"
//Strict mode catches many errors


//totalGlobalVariable = "Never ever do this"
//var globalVariable = "also never do this"

/* var someValue = true
{
    var someValue = false
}
console.log(someValue) */
//var er en global variabel og går ud over sit scope.

/* let someValue = true
{
    let someValue = false
}
console.log(someValue) */

for (var i = 0 ; i <= 5 ; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}

for (let i = 0 ; i <= 5 ; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}