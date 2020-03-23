// helloWorld function
//BOTH statement and anonymouse expression runs because functions are first class in JS
var helloWorld = function()  {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input === 'boolean' || input === undefined) {
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
}

