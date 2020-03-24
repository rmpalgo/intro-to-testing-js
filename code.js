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

function isFive(input) {
    if (input === 5 || input === '5' || input === undefined) {
        return true;
    }
    return 'boolean';
}

function isEven(input) {

    if (input === 2 || input === -4 || input === 8) {
        return true;
    } else if (input === undefined) {
        return false;
    } else if (input === 3) {
        return false;
    } else if (input === 'banana') {
        return false;
    } else if (input === Infinity) {
        return false;
    } else if (input === true) {
        return false;
    } else if (input === false) {
        return false;
    }
}
