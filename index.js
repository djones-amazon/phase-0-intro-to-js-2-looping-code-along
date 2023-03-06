function writeCards(names, eventName) {
    const cardMessages = [];
    for (let i = 0; i < names.length; i++) {
        cardMessages[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    }
    return cardMessages;
}

function countDown(numInput) {
    let output = numInput;

    while (output >= 0) {
        console.log(output);
        output--;
    }
}