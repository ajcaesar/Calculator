import {Stack, Queue} from functions.js

mainText = document.querySelector("div.current-num")
previousText = document.querySelector("div.previous-num")

const queue = new Queue();
containsOperation = false;
num = 0;
lastElement = 0;

function calculate() {
    number1 = "";
    number2 = "";
    while(containsDigits(queue.peek()) {
        number1 += queue.dequeue();
    }
    operator = queue.dequeue()
    while(!queue.isEmpty()) {
        number2 += queue.dequeue()
    }

}

function applyOperation(a, b, operator) {
    const operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        'x': (x, y) => x * y,
        '/': (x, y) => x / y
        '√': (x, y) => Math.sqrt()
    };

    if (operations[operator]) {
        return operations[operator](a, b);
    } else {
        throw new Error('Unsupported operator');
    }
}

function addChar(char) {
    mainText.innerHTML += " " + char;
}

function append(event) {
    let n = event.target.textContent
    if (!containsDigits(n)) {
        if()
        if(containsOperation) {
            num = calculate();
            queue.enqueue(n)
            addChar(num)
            addChar(n)
            containsOperation = false;
        }
        else {
            containsOperation = true;
            queue.enqueue(n)
            addChar(n)
        }
    }
}

function containsDigits(str) {
    return /\d/.test(str);
}
