const setScreen = (value) => document.querySelector('.input-glass').value = value
const clearScreen = () => {
    document.querySelector('.input-glass').value = '';
    document.querySelector('.input-glass').placeholder = '';
}
const resetScreen = () => document.querySelector('.input-glass').placeholder = '.0';

const getEquation = () => document.querySelector('.input-glass').value;


let calculatorHandler = {
    isEvaluated: false,
    option: 'play',
    evaluates: function () {
        switch (calculatorHandler.option) {
          case '%': calculatePercentage()
                break;
            default: calculated();
            
        }
        calculatorHandler.isEvaluated = true;
    },
    onClick: function (valuekk) {
        if (localStorage.getItem('origValue')) {
            clearScreen()
            localStorage.removeItem('origValue')
        }
        if (calculatorHandler.isEvaluated === true) {
           //clearScreen();

            onButtonClick(valuekk)
            calculatorHandler.isEvaluated !=true;
        } else {
            onButtonClick(valuekk)
        }
    }

}

// per clicks
// var click=0; function click_handler(){if(click=1){  var nums = ['100', '400', '500']
// let numzz=0
// // var total =nums.reduce(function(a,b){return (+a)+(+b)})

// for(var i=0; i<4; i++){
//     numzz = numzz + Number(nums[2]);    //num+=+nums[i] + in front of nums converts strings to integer
//      console.log(numzz)
// }}


// if(click>1){click++; return
//     console.log(nums)}}
// console.log(calculatorHandler.onClick('1011'))


// function onadd() {
//     a = document.querySelector('.operand1').value
//     b = document.querySelector('.operator').value
//     c = document.querySelector('.operand2').value


//     if (b === '+') { document.querySelector('.answerss').value = parseInt(a) + parseInt(c) }
//     if (b === '-') { document.querySelector('.answerss').value = parseInt(a) - parseInt(c) }
//     if (b === '*') { document.querySelector('.answerss').value = parseInt(a) * parseInt(c) }
//     if (b === '/') { document.querySelector('.answerss').value = parseInt(a) / parseInt(c) }
//     if (document.querySelector('.answerss').value == NaN) { alert('oga check your number') }
// }


const onClear = () => {
    let screenText = document.querySelector('.input-glass').value;
    screenText = screenText.slice(0, -1);
    setScreen(screenText);
}


function onButtonClick(pp) {
    let text1 = document.querySelector('.input-glass').value;
    setScreen(text1.concat(pp)) // prevText+''+param.. concat means joining
}


const calculated = function () {
    const equation = document.querySelector('.input-glass').value;
    const result = eval(equation)
    setScreen(result)
}

function off() {

    setTimeout(() => {
        back = document.querySelector('.input-glass')
        back.style.background = 'black'
        clearScreen();
    }, 500)
}

function on() {
    resetScreen();
    setTimeout(() => {
        back = document.querySelector('.input-glass')
        back.style.background = 'burlywood'
    }, 300)
}

function memory() {
    let origValue = localStorage.getItem('origValue');
    let currentValue = document.querySelector('.input-glass').value;

    if (! origValue) 
        localStorage.setItem('origValue', currentValue);
    

    setScreen(eval(Number(currentValue) + Number(origValue)))
}


function root() {
    input = document.querySelector('.input-glass')
    var value = Math.sqrt(input.value);
    setScreen(value)
}

function percentage() {
    calculatorHandler.option = '%';
    calculatorHandler.onClick('%');
}

const calculatePercentage = () => {
    let equa = getEquation();
    if (equa.indexOf('%')) {
       console.log(equa.indexOf('%'));
      
     const splittedEqua = equa.split('%');
      console.log(splittedEqua); 
     const result = eval(splittedEqua[1] * splittedEqua[0] / 100);
        setScreen(result);
        calculatorHandler.option = 'default';
    }else{
        setScreen("invalid selection")
    }
}


// this one adds the preceeding result to the preceeding result 5+5=10 10+10=20 20+20+40
//    let pee=parseInt(result)
//    for(let i=0;i<4;i++){
//      pee+=+(pee)
//      console.log(pee)}


// document.querySelector('.input-glass').value

//           // num=num+Number(pee)
// for(let i=0;i<2;i++){
//            num=num+Number(pee)
//         console.log(num)}
// console.log(num)
// console.log(pee)
//             console.log(parseInt(num)+parseInt(pee))}


// const companies = [
//     { class: 'comapny one', category: 'finance', start: '1981', end: '2004' },
//     { class: 'comapny two', category: 'academic', start: '1989', end: '2009' },
//     { class: 'comapny three', category: 'business', start: '1991', end: '2007' },
//     { class: 'comapny four', category: 'finance', start: '1980', end: '2009' },
//     { class: 'comapny five', category: 'academic', start: '1970', end: '2000' },
// ]
// //companies.forEach(function (company){}

// const k = companies.map(friend => friend.start && friend.end)
// for (let i = 3; i < companies.length; i++) { console.log(k) }
