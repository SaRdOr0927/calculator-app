let position = 0;
function moveToggle() {
    position = (position + 1) % 3;
    const ball = document.getElementById("toggleBall");
    const body = document.body;
    const step = 22; // Harakat masofasi
    ball.style.transform = `translateX(${position * step}px)`;
    

    //
    const calcWrapper = document.querySelector('.calc-wrapper') 
    const toggleContainer = document.querySelector('.toggle-container')
    const wrapperHeadrH4 = document.querySelector('.wrapper-headr_h4')
    const buttonFlexP = document.querySelector('.button-flex_p')
    const Span = document.querySelector('.numbers-w')
    const Span2 = document.querySelector('.numbers-t')
    const Span3 = document.querySelector('.numbers-s')
    const wrapperInputTh = document.querySelector('.wrapper-input__th')
    const Calculator = document.querySelector('.calculator')
    // 



    // number
    const number0 = document.querySelector('#number0')
    const number1 = document.querySelector('#number1')
    const number2 = document.querySelector('#number2')
    const number3 = document.querySelector('#number3')
    const number4 = document.querySelector('#number4')
    const number5 = document.querySelector('#number5')
    const number6 = document.querySelector('#number6')
    const number7 = document.querySelector('#number7')
    const number8 = document.querySelector('#number8')
    const number9 = document.querySelector('#number9')
    const number00 = document.querySelector('#number0')
    const numberPlus = document.querySelector('#numberPlus')
    const numberMinus = document.querySelector('#numberMinus')
    const numberBolish = document.querySelector('#numberBolish')
    const numberKopaytirish = document.querySelector('#numberKopaytirish')

    // number



    if(wrapperInputTh === "") {

    }

    dot.addEventListener('click', function() {
        if (wrapperInputTh.innerHTML === "") {
            return this.setDisplay('0.')
        }
        
    })

    


    if (position === 0) {
        body.style.backgroundColor = " #3A4663";
        calcWrapper.style.backgroundColor = "#3A4663";
        ball.style.backgroundColor = "#D03F2F";
        toggleContainer.style.backgroundColor = "#242D44";
        wrapperHeadrH4.style.color = "#fff";
        buttonFlexP.style.color = "#fff";
        Span.style.color = "#fff";
        Span2.style.color = "#fff";
        Span3.style.color = "#fff";
        wrapperInputTh.style.backgroundColor = "#181F33";
        wrapperInputTh.style.color = "#fff";
        Calculator.style.backgroundColor = "#242D44";
        clear.style.backgroundColor = "#647198"
        remove.style.backgroundColor = "#647198"
        equal.style.backgroundColor = "#D03F2F"
        clear.style.boxShadow = "0px -4px 0px 0px #414E73 inset"
        equal.style.boxShadow = "0px -4px 0px 0px #93261A inset"
        remove.style.boxShadow = " 0px -4px 0px 0px #414E73 inset"

    } else if (position === 1) {
        

        body.style.backgroundColor = "#E6E6E6";
        calcWrapper.style.backgroundColor = "#E6E6E6";
        ball.style.backgroundColor = "#C85402";
        toggleContainer.style.backgroundColor = "#D2CDCD";
        wrapperHeadrH4.style.color = "#36362C";
        buttonFlexP.style.color = "#36362C";
        Span.style.color = "#36362C";
        Span2.style.color = "#36362C";
        Span3.style.color = "#36362C";
        wrapperInputTh.style.backgroundColor = "#fff";
        wrapperInputTh.style.color = "#36362C";
        Calculator.style.backgroundColor = "#D2CDCD";
        clear.style.backgroundColor = "#378187"
        remove.style.backgroundColor = "#378187"
        equal.style.backgroundColor = "#C85402"
        clear.style.boxShadow = "0px -4px 0px 0px #1B6066 inset"
        remove.style.boxShadow = "0px -4px 0px 0px #1B6066 inset"
        equal.style.boxShadow = "0px -4px 0px 0px #873901 inset"


        

    } else {
        body.style.backgroundColor = "#17062A";
        calcWrapper.style.backgroundColor = "#17062A";
        ball.style.backgroundColor = "#00DED0";
        toggleContainer.style.backgroundColor = "#1E0936";
        wrapperHeadrH4.style.color = "#FFE53D";
        buttonFlexP.style.color = "#FFE53D";
        Span.style.color = "#FFE53D";
        Span2.style.color = "#FFE53D";
        Span3.style.color = "#FFE53D";
        wrapperInputTh.style.backgroundColor = "#1E0936";
        wrapperInputTh.style.color = "#FFE53D";
        Calculator.style.backgroundColor = "#1E0936";
        clear.style.backgroundColor = "#56077C"
        remove.style.backgroundColor = "#56077C"
        equal.style.backgroundColor = "#00DED0"
        clear.style.boxShadow = "0px -4px 0px 0px #BE15F4 inset"
        equal.style.boxShadow = "0px -4px 0px 0px #6CF9F1 inset"
        equal.style.boxShadow = "0px -4px 0px 0px #6CF9F1 inset"
        remove.style.boxShadow = " 0px -4px 0px 0px #BE15F4 inset"
        
    }
}

const numbers = [...document.querySelectorAll('.number-button')]
// const display = document.querySelector('.wrapper-input__th')
const signs = [...document.querySelectorAll('#sign')]
const dot = document.querySelector('.dot')
const clear = document.querySelector('.c')
const remove = document.querySelector('.r')
const equal = document.querySelector('.equal')

// class Calculator {

//     setDisplay(value) {
//         display.value = display.value + value
//     }

//     numbers(event) {
//     console.log(event.target.textContent)

//         let num = event.target.textContent
//         this.setDisplay(num)
//     }

//     signs(event) {
//         const signView = event.target.textContent
//         this.setDisplay(signView)
//     }

//     dot() {
//         return this.setDisplay('.')
//     }

//     clear() {
//         display.value = null
//     }
//     remove() {
//         let deleted = display.value.split("");
//         let newValue = deleted.slice(0,-1).join("");
//         display.value = newValue;
//     }

//     equal() {

//     }


// }

// const calc = new Calculator()

// for (const number of numbers) {
//     number.addEventListener('click', (event) =>{
//         calc.numbers(event)
//     })
// }

// for (const sign of signs) {
//     sign.addEventListener('click', (event) => {
//         calc.signs(event)
//     })
// }

// dot.addEventListener('click', () => {
//     calc.dot()
// })

// clear.addEventListener('click', () => {
//     calc.clear()
// })

// remove.addEventListener('click', () => {
//     calc.remove()
// })






const display = document.querySelector(".wrapper-input__th");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "RESET") {
            display.value = "";
        } else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            try {
                // Belgilarni JavaScript tushunadigan formatga o‘zgartirish
                let expression = display.value
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/–/g, "-"); // uzun minusni oddiy minusga o‘zgartirish

                display.value = eval(expression);
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += value;
        }
    });
});


