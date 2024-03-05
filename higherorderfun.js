// first-class function 
const oneWord = function(str = 'programmer'){
    return str.replace('programmer', 'developer');
};
const firstWord = function(str){
    const [abdilaziz, ...nasir] = str.split(' ');
    return [abdilaziz.upperCase, ...nasir].join();
};

// higher order function
const transformer = function(str,fn){
    console.log(`the orginal string is ${str}`);
    console.log(`the transformed string is ${fn(str)}`);
    console.log(`transformed by ${fn.name}`);
};
transformer('I have a dream to be developer', firstWord);
transformer('I have a dream to be full stack', oneWord,)

const higher = function(){
    console.log('high developer how are you ');
}
document.addEventListener('click',higher);

// function returning call 
const greet = function(greeting){
    return function(name){
        console.log(`${greeting}, ${name}`);
    }
}
const greeterHey = greet('hi');
greeterHey (" ABDILAZIZ NASIR");
greeterHey (" THE DEVELOPER ONE");

// CHALLENGING WITH ARROW FUNCTION FROM THE ABOVE ARGUMENTS
const greetArrow = greeting => name => console.log(`${greeting}, ${name}`);
greetArrow(`hello, DEVELOPER ABDILAZIZ,this part is arrow function of JS`);
greetArrow(`HI HOW ARE YOU`) (`PROGRAMMER ABDILAZIZ`);

