// Code your solutions in this file

function writeCards(names, event) {
    const outputMessages = [];

    for (let i = 0 ; i < names.length ; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        outputMessages.push(message);
    }

    return outputMessages;
}

function countDown(n) {
    while (n>=0) {
        console.log(n);
        n--;
    }
}