function adjustFontSize() {
    console.log("resize");
    const numberDisplay = document.querySelector('.number-display');
    const width = numberDisplay.offsetWidth; // get the width of .number-display
    const fontSize = width * 0.1; // example: set font size to be 10% of parent width
    const previousNum = document.querySelector('.previous-num');
    const currNum = document.querySelector(".current-num")
    previousNum.style.fontSize = `${fontSize}px`; // apply the calculated font size
    currNum.style.fontSize = `${1.75*fontSize}px`;
}

window.addEventListener('resize', adjustFontSize); // adjust font size on window resize
window.onload = adjustFontSize(); 

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
const decimal = document.getElementById("dot");
const clear = document.querySelector(".clear.num");
const del = document.querySelector(".delete.num");

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
        let num1 = parseFloat(this.previousNum);
        let num2 = parseFloat(this.currNum);
        let result = this.#applyOperation(num1, this.currOperation, num2);
        this.previousNum = result;
        this.currNum = "0";
        this.currOperation = "";
        if (!/\d/.test(result)) {
            this.previousNum = "0";
        }
        return result;
    }

    negate() {
        this.currNum = (parseFloat(this.currNum) * -1) + "";
    }

    operator(op) {
        if (this.currOperation == "") {
            this.currOperation = op;
            this.previousNum = this.currNum;
            this.currNum = "0";
        }
        else {
            this.calculate();
            this.currOperation = op;
        }
    }

    addNum(num) {
        if((this.currNum) == "0") {
            this.currNum = num;
        }
        else {
        this.currNum += num;
    }
        return this.currNum;
    }

    addDecimal(event) {
        this.currNum += ".";
        return this.currNum;
    }

    clear() {
        this.currNum = "0";
        this.previousNum = "";
        this.currOperation = "";
    }

    delete() {
        if(this.currNum == "0") {
            return;
        }
        else if (this.currNum.length == 1) {
            this.currNum = "0";
            return;
        }
        this.currNum = this.currNum.substring(0, this.currNum.length - 1);
        return;
    }

    equal() {
        if(this.currOperation.length > 0) {
            this.calculate();
            this.currNum = this.previousNum;
            this.previousNum = "";
            return true;
        }
        return false;
    }

    sqrt() {
        if(this.currOperation != "") {
            this.calculate();
            if (this.previousNum < 0) {
                this.currNum = "0";
            }
            this.currNum = Math.sqrt(this.previousNum);
        }
        else {
            this.previousNum = this.currNum;
            if (this.previousNum < 0) {
                this.currNum = "0";
            }
            else{
            this.currNum = Math.sqrt(this.previousNum);
        }
    }
    }
}

calc = new Calculator();

function addNum(event) {
    let num = calc.addNum(event.target.textContent);
    reorder();
}

function addDecimal() {
    console.log("hello");
    let num = calc.addDecimal();
    reorder();
}

function operate(event) {
    recolorNums();
    event.target.style.backgroundColor = "#3D92F4";
    calc.operator(event.target.textContent);
    reorder(); 
}

function formatNumber(number) {
    console.log('formatted');
    // Convert number to string to check its length easily
    let numStr = String(number);
    let num = parseFloat(number);

    // If the number is already within the limit, return it directly
    if (numStr.length <= 10) return numStr;

    // Check if the number is large or small and needs scientific notation
    if (Math.abs(num) >= 1e+5 || Math.abs(num) <= 1e-4) {
        // Convert to scientific notation with precision adjustment
        i = 0 
        while((""+ num.toExponential(i)).length < 10) {
            i++;
        }
        return num.toExponential(i);  // Adjust '2' for desired precision
    } else {
        // For numbers that are within a "normal" range but too long
        // Precision here is calculated to limit the string length to 10
        let precision = 10 - Math.floor(Math.log10(Math.abs(num))) - 2;
        return num.toFixed(Math.max(0, precision));
    }
}

function reorder() {
    mainText.textContent = "" + formatNumber(calc.currNum);
    previousText.textContent = "" + formatNumber(calc.previousNum);
}

function recolorNums() {
    for (let item of operators){
        console.log(item);
        item.style.backgroundColor = "#EFEFEF";
    }
}

function clearIt() {
    calc.clear();
    recolorNums();
    reorder();
}

function delIt() {
    calc.delete();
    reorder();
}

function negate() {
    calc.negate();
    reorder();
}

function equal() {
    let x = calc.equal();
    if(x) {
        recolorNums();
        reorder();
    }
    else {
        return;
    }
}

function squareRoot() {
    calc.sqrt();
    reorder();
    recolorNums();
}

sqrt.addEventListener("click", squareRoot);
equals.addEventListener("click", equal);
negative.addEventListener("click", negate);
clear.addEventListener("click", clearIt);
del.addEventListener("click", delIt);
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

add.addEventListener("click", operate);
multiply.addEventListener("click", operate);
divide.addEventListener("click", operate);
subtract.addEventListener("click", operate);
modulus.addEventListener("click", operate);
decimal.addEventListener("click", addDecimal);


