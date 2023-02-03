console.log('Hello world');
//const me; wont work
//const must be assigned 
const me = {};
me.name = 'Etienne';
//creates key-value pair
//me = {} wont work
//cannot reassign a const
const hobbies = ["Painting","Reading"];
hobbies.push("Fighting");
me.hobbies = hobbies;
console.log(me);

const hobbyOne = 'Painting skill level "6"'
const hobbyTwo = "Reading skill level '4'"
const hobbyThree = `Fighting "skill" 'level': ${2 + 2}`