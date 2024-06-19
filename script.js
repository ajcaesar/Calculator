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
mainText.textContent = "0";

class Calculator {
    constructor() {
        this.previousNum = "";
        this.currNum = "0";
        this.currOperation = "";
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
        let num1 = parseFloat(previousNum);
        let num2 = parseFloat(currNum);
        let result = applyOperation(num1, currOperation, num2);
        this.previousNum = result;
        this.currOperation = "";
        return result;
    }


    operator(op) {
        if (this.currOperation == "") {
            this.currOperation = op;
            this.previousNum = this.currNum;
            this.currNum = "0";
        }
        else {
            calculate();
            this.currOperation = op;
        }
    }

    addNum(num) {
        this.currNum += num;
        return this.currNum;
    }

    addDecimal(event) {
        this.currNum += ".";
        return this.currNum;
    }
}

calc = new Calculator();

function addNum(event) {
    let num = calc.addNum(event.target.textContent);
    reorder();
    console.log("cliicked");
}

function addDecimal() {
    let num = calc.addDecimal();
    mainText.textContent = num;
}

function operate(event) {
    recolorNums();
    event.target.style.backgroundColor = "#3D92F4";
    calc.operator(event.target.textContent);
    reorder(); 
}

function reorder() {
    mainText.textContent = "" + calc.currNum.includes(".") ? parseFloat(calc.currNum): parseInt(calc.currNum, 10);
    previousText.textContent = "" + isNaN(calc.previousNum) ? "" : calc.previousNum.includes(".") ? parseFloat(calc.previousNum): parseInt(calc.previousNum, 10);
}

function recolorNums() {
    for (let item of operators){
        console.log(item);
        item.style.backgroundColor = "#EFEFEF";
    }
}

zero.addEventListener('click', addNum);
one.addEventListener("click", addNum);
two.addEventListener("click", addNum);
three.addEventListener("click", addNum);
four.addEventListener("click", addNum);
five.addEventListener("click", addNum);
six.addEventListener("click", addNum);
seven.addEventListener("click", addNum);
eight.addEventListener("click", addNum);
nine.addEventListener("click", addNum);

multiply.addEventListener("click", operate);
divide.addEventListener("click", operate);
subtract.addEventListener("click", operate);
modulus.addEventListener("click", operate);





