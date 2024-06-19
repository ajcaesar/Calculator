import {Stack, Queue} from functions.js

const mainText = document.querySelector("div.current-num");
const previousText = document.querySelector("div.previous-num");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const negative = document.getElementById("negative");
const modulus = document.getElementById('modulus');
const multiply = document.getElementById("multiplication");
const add = document.getElementById("addition");
const sqrt = document.getElementById("sqrt");
const divide = document.getElementById("division");
const subtract = document.getElementById("subtraction");
const equals = document.getElementById("equals");

const operators = [modulus, multiply, add, divide, subtract];
one.style.backgroundColor = "red";
mainText.textContent = "ehello world";

class Calculator {
    constructor() {
        previousNum = "";
        let currNum = "0";
        let currOperation = "";
    }

    #applyOperation(a, operator, b=0) {
        const operations = {
            '+': (x, y) => x + y,
            '-': (x, y) => x - y,
            'x': (x, y) => x * y,
            '÷': (x, y) => x / y,
            '%': (x, y) => x % y,
            '√': x => Math.sqrt(x)
        };

        if (operations[operator]) {
            return operations[operator](a, b);
        } else {
            throw new Error('Unsupported operator');
        }
    }

    calculate() {
        num1 = parseFloat(previousNum);
        num2 = parseFloat(currNum);
        result = applyOperation(num1, currOperation, num2);
        previousNum = result;
        currOperation = "";
        return result;
    }


    operator(op) {
        if (currOperation == "") {
            currOperation = op;
            previousText.textContent = currNum;
            previousNum = currNum;
            currNum = "0";
            mainText.textContent = currNum;
        }
        else {
            calculate();
            currOperation = op;
        }
    }

    addNum(num) {
        currNum += num;
        return currNum;
    }

    addDecimal(event) {
        currNum += ".";
        return currNum;
    }

}

calc = new Calculator();

function addNum(event) {
    num = calc.addNum(event.target.textContent);
    mainText.textContent = num;
}

function addDecimal() {
    num = calc.addDecimal();
    mainText.textContent = num;
}

function operate(event) {
    recolorNums();
    event.target.style.backgroundColor = "#3D92F4";
    calc.operator(event.target.textContent);
    reorder(); 
}


function reorder() {
    mainText = calc.currNum;
    previousText = calc.previousNum;
}

function recolorNums() {
    for (item in operators){
        item.style.backgroundColor = "#EFEFEF";
    }
}

zero.addEventListener("click", addNum);
one.addEventListener("click", addNum);
two.addEventListener("click", addNum);
three.addEventListener("click", addNum);
four.addEventListener("click", addNum);
five.addEventListener("click", addNum);
six.addEventListener("click", addNum);
seven.addEventListener("click", addNum);
eight.addEventListener("click", addNum);
nine.addEventListener("click", addNum);

// multiply.addEventListener("click", )



