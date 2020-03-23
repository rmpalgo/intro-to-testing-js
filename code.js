// helloWorld function
//BOTH statement and anonymouse expression runs because functions are first class in JS
var helloWorld = function()  {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input === 'boolean' || input === undefined || input === null || input === ""
        || input === "5" || typeof input === "object" || input === 2.3) {
        return "Hello, World!";
    }
        return "Hello, " + input + "!";
}

function isFive() {
    return 'boolean';
}
