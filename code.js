// helloWorld function
//BOTH statement and anonymouse expression runs because functions are first class in JS
var helloWorld = function()  {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined || input === true || input === false) {
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
}

