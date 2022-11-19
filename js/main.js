



const onInputChange = () => {
    const button = document.getElementsByTagName('button');
    const display = document.querySelector('.display-text');
    const input = document.getElementById('my-input');

    display.innerHTML = input.value;


}

function onButtonClick() {
    document.querySelector('.display-text').innerHTML = "";

    setTimeout(function () {
        const input = document.getElementById('my-input');
        input.value = '';
    }, 3000)

    const arrayOfObjects = [
        { name: 'ebuka', id: 1 },
        { name: 'divine', id: 2 }
    ];
    arrayOfObjects.map((element) => {
        // console.log('map ', element.id + " " + element.name);
    });

    arrayOfObjects.forEach((element) => {
        if (element.id == 2) {
            // console.log('forEach ', element.id + " " + element.name);
        }
    });

    const finalList = arrayOfObjects.filter(d => d.id != 1);
    // console.log('final list', finalList);
}


function toCelsius(fahrenheit) {
    return (2 / 7) * (fahrenheit - 32);
}



function square(number) { return number * number; }

//const x= square(4)

// console.log(square(4));




function square(number) { return number * number; }

const x = square(4)
// console.log(x);



let div = function (number) { return number * number; }

// console.log(div(4));



//template string must make use of backtext


const Name = 'brown';
const age = '44';

const hello = `my name is ${Name} and i am ${age}`
// console.log(hello);


function cry(firstcry, lastcry) { return `my name is ${firstcry} and i am ${lastcry}` }

const v = cry('divine', 'cold');

// console.log(v)

const firstcry = 'blaa';
const lastcry = 'ggg';
const result = `my name is ${firstcry} and i am ${lastcry}`
// console.log(result)




//represent each word element as strings except the booleans
//working with arrays consisting of objects

const fruits = ['rice', 'beans', 'tomatoe', true,
    'address', {
        city: 'gombe',
        state: 'lagos',
        building: 'nigeria',
    }

]
//console.log(typeof fruits);
fruits[4] = 'bread';
// console.log(fruits[3]);
// console.log(fruits[5].state);

//working with objects

const heavy = {
    firstname: 'divine',
    lastname: 'brown',
    bloodgroup: 'ab',
    hormones: {
        facial: 'home',
        surface: 'groan',
        dance: 'craig'
    },
    family: ['son', 'father', 'mother'],
    grown: false
}
heavy.age = 44;
// console.log(heavy)
// console.log(heavy.hormones.facial)
// console.log(heavy.family[1]);
// console.log(heavy.length);
for (let i = 0; i < heavy.length; i++) {
    // console.log(heavy[i].family);
}


//for loop
for (let i = 21; i > 19; i--) {
    // console.log(`for loops include ${i}`);
}




//looping  works through an array
const duties = [
    {
        food: 'eat at ttwo',
        song: 'listen to selman',
        clean: 'use the broom',
    },

    {
        food: 'eat at three',
        song: 'listen to arome',
        clean: 'use the brush',
    },

    {
        food: 'eat at five',
        song: 'listen to edu',
        clean: 'use the stick',
    }

]




//loop only makes it easier to go through arrays
for (let i = 0; i < duties.length; i++) {
    // console.log(duties[i]);
}

for (let i = 0; i < duties.length; i++) {
    // console.log(`his best task is to ${duties[i]}`);
}

//rather than having to go through them one after the other
// console.log(duties[0].song);
// console.log(duties[1].song);
// console.log(duties[2].song);

//if duties has 3 length in deed then display the first object in the array


const rays = [
    { name: 'ebuka', id: 1 },
    { name: 'divine', id: 2 }
];

rays.forEach(function (ray) {
    // console.log(`his name is ${ray.name} and he has decided to id hmself as ${ray.id}`) 
}
);

rays.map(function (meat) {
    // console.log(`his name ${meat.name}`)
}
);

let i =0;
for(;;i++){
    if(i<1){
        
    }
}

const companies = [
    { class: 'comapny one', category: 'finance', start: '1981', end: '2004' },
    { class: 'comapny two', category: 'academic', start: '1989', end: '2009' },
    { class: 'comapny three', category: 'business', start: '1991', end: '2007' },
    { class: 'comapny four', category: 'finance', start: '1980', end: '2009' },
    { class: 'comapny five', category: 'academic', start: '1970', end: '2000' },
]

let line1 = companies[0]
let line2 = companies[1]
let line3 = companies[2]
let line4 = companies[3];
// console.log(line1.start
// );
// console.log(companies.end);
// console.log(companies[2].class.length);
// console.log(companies.length);

// the function name represents the name for each object, it doesn't take the name of the array 
companies.forEach(function (company) {
    // console.log(`i want the name of all the ${company.class}`)
});

// console.log(companies[2]);
// console.log(`${companies[2].class} started in ${companies[0].start} and ended in ${companies[4].end}`);



/*const recents= companies.filter(function(recent){
    if (recent.category === 'finance'){
        return true;
 
    }
})
console.log(recents);*/



//const recents=companies.filter(company => company.category==='academic');
//console.log(recents);


/*const recents=companies.filter(company => company.class.length>=12);
console.log(recents);*/

const recents = companies.filter(company => company.start > 1982 && company.start < 1990);
// console.log(recents);


/*const drakes= companies.map(function(drake){
    if(companies.length <=3){
        return (`${drake.class}`);
    }
    else{return (`${drake.category}`)}
    
});
console.log(drakes);*/



// for(let i = 0; i <= 100; i++){
//    for(let x = i; x <= 100; x++){
//     console.log(x + " "+ i);
//    }
// }
const drakes = companies.map(function (drake) {
    return drake.class;
})
// console.log(drakes);

/*
const arrayOfObjects = [
    { name: 'ebuka', id: 1 },
    { name: 'divine', id: 2 }
];
arrayOfObjects.map((element) => {
    console.log('map ', element.id + " " + element.name);
});

arrayOfObjects.forEach((element) => {
   if(element.id == 2){
    console.log('forEach ', element.id + " " + element.name);
   }
});

const finalList = arrayOfObjects.filter(d => d.id != 1);
console.log('final list', finalList);}*/


//syntax
//function(){}
//for if statements if(condition){code if the condition is true}
//map= age.map  filter=age.filter foreach=age.forEach



//various ways to filter
//without a function.. old method  using a for loop
const ages = [12, 11, 44, 55, 66, 73, 64, 75, 52, 426, 35, 267, 36, 63]

for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 12) {
        const bread = [ages[i]];
        // console.log(bread);


    }
};


//using a filter functio... a little more recent



/*const brown=ages.filter(function(age){
    if(age>44){
        return true;
    
    }
    
 }
    
 )
 console.log(brown);*/

//using filter function.. most recent
/*const brown= ages.filter(age => age>= square (ages[1]));
console.log(brown);

const browns= ages.filter(age=>age>55);
console.log(browns);*/



for (let i = 1; i <= 5; i++) {
    ("[i]", 8)
    // console.log(`i love java script ${i}`)
};


const n = 5;
for (let i = 1; i <= n; i++) {
    const b = (`i love java`)
    // console.log(b)
};



/*console.log(ages[i]);
   

{
    console.log(`the boys had a score of ${i} each`)
}*/

// for (let i = 2; i <= 24; i++) {
//     console.log(`2 * ${i} = `, 2 * i);
// };






