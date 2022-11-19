// alert('fsd')

// function myFunction(){
//     document.getElementById('myCheck').click()
// }

// function myfunc(){
//     text = document.getElementById('button-a')
//     textt = document.getElementById('gg')

//     tex = prompt('what is your name') // tex is a variable for prompt
//     alert(`hello ${tex} nice to meet you`)
//     textt.value = `welcome ${tex}`

//     text.addEventListener('click',myfunc) // YOU CAN ADD EVENT LISTENER WITHOUT GOING TO HTML
//variables are containers for strings, prompts, name , boolean etc
    //when using documents always start by using it without appending anything to it e.g. .value, .innerHTML
//}

//declaring a variable
//if variable = my name
//declare using let/const e.g. let my name , let text, const numbers
//every code should end with a semi colon

//initializing a variable
//after declaring, you can initialize using (=)
//e.g let text = '5544'

//difference between var and let
//if you write a multiline js code that initialize and declares a variable, you can declare a variable with var
//after you have initialized it. 
//this is called hoisting.. meaning initializing a code before declaration
//e.g. myname= 'chris'
myname='chris'
function hh(){
    console.log(myname)
}

hh();
//var myname; //this cannot work with let

//another difference is that you can declare the same variable as many times as you like with var than with let
//e.g
// var come = 5  cant work with   //let come = 5  instead //let come =5
//var come = 6                    //let come = 6          //come = 6

//difference bwtween const  and let....   you must initialize a const when you use it ...you cannot assign them a new value after initializing
//e.g let count = 5      cant work with  //const count = 5
//count = 6                              //count = 6
//object is a type of data type which contains more information about a particular variable
//e.g let dog ={name: 'bob', breed:wolf, age:44}


//javascript is dynamically typed, you dont need to specify the data type when you use them
//e.g if you initialize a variable with a quote, it is taken as a string e.g let dog = 'from' then typeof=string


//numbers


const lotsOfDecimal = 1.766584958675746364;

const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces)


let monday='77';
//monday +=3; //same as monday=monday+3
//console.log(monday)  //result = 773 not 80

monday=Number(monday) + 3
console.log(monday);


// let a= num1
// console.log(a++); 

let balm = 6 *4

balm;


let num2 = 6;
num2++;
console.log(num2)   // value is 7

let num3=8
++num3;
console.log(num3)   //answer is 9

let num4=8;
num4++;
console.log(num4)


const obj = {};

obj.x = 3;
console.log(obj.x); // Prints 3.
console.log(obj); // Prints { x: 3 }.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // Prints 5.
console.log(obj); // Prints { x: 3, y: 5 }.


// (function(){
//     function play(name){
//         alert('name')

//     }
//     play('girl')
// })()


// const bigmouth = 'I\'ve got no right to take my place…';
// console.log(bigmouth);


// const button = document.querySelector("button");

// function greet() {
//   const name = prompt("What is your name?");
//   alert(`Hello ${name}, nice to see you!`);
// }

// button.addEventListener("click", greet);

//.indexof()  .includes()   .startsWith()    .endsWith()  .length  .slice()  .toUpperCase() .toLowerCase()
//.replace()
const browserType = 'mozilla';
console.log(browserType.length);
console.log(browserType[0]);
console.log(browserType.indexOf('m'))
if(browserType.endsWith('m'))  //brings up the first character in the string = m
{
    console.log('blueberry')
}

const output = 'my name is brown name'
console.log(output[3]); //brings the second character = n
console.log(output[output.length-1]);//variable[variable.length-1] returns the last char in the string

const first = output.indexOf('name');
console.log(first);

const secondOcurrence = output.indexOf('name' , first + 1) ;  //index of the second name
console.log(secondOcurrence);

const uppercase = output.toUpperCase()  //uppercase
console.log(uppercase)

const lowercase = output.toLowerCase()  //lowercase
console.log(lowercase)

const replace = output.replace('name','broom') //replace only one name with broom
console.log(replace)

const replaceall = output.replaceAll('name', 'cast') //replace all name with broom
console.log(replaceall);



let extract = output.slice(0,1) // in  'my name is brown name'  extract = m
console.log(extract)

let blow = output[0]  // blow = m
console.log(blow)



const vas = 'MAN675847583748sjt567654;Manchester Piccadilly'
let vass = vas.slice(0,3)   // 0 is the starting point, 3 is the amount of items to delete
let woke = vas.slice()       // slice without index returns/ copies the strings again..S
console.log(vass)   //returns MAN
console.log(woke);

console.log(output.indexOf('v')) // returns -1 cos v is not found in the string
if(output.includes('name is')){

}
if(output.startsWith('my')){
    console.log('gold');

}
else{
  console.log('no gold');
}

const quote = 'I dO nOT lIke gREen eGgS anD HAM';

let babe = quote.slice(1)
brain = babe.toLowerCase()
console.log(brain);

const random = ['tree', 795, [0, 1, 2]];
const ben = random[2][2];  //returns 2.. 
console.log(ben)

//.unshift() add to the first array
//.push() add to the last array

//.shift() removes from the first
//.pop() removes from the last


//splice()


const birds = ['Parrot' , 'Falcon', 'Owl']; //array liiteral notation 
const birds2 = new Array('parrot','falcon') // array constructor 
//birds[birds.length- 1]  returns 'owl' which is the last element in the array
for (const bird of birds) {    //singular of plural
  console.log(bird);     //// to bring every element in  the arrray individually use the FOR OF
}
for (const birdd of birds2){
    console.log(birdd)
}
console.log(birds);

 //unshift  array.prototype.unshift()
 const unshift = birds.unshift('eagle') //after using any of the methods, you would need to console.log the major array. 
 console.log(unshift)                   //... to see the changes made by the array

 for(const birddd of birds){
    console.log(birddd)
 }
 const string = birds.toString()
 console.log(string)
 //split =string.prototype.split             when using the split, it is string.split('by what they are separated with') usually comma
 const split = string.split(',')
 console.log(birds);
 console.log(split);


 //join
 const join = birds.join('+') // join each string with what?
 console.log(join);
console.log(birds)

const splice = birds.splice(0,2) //removes the last two items
//birds.splice(0,2)  removes the first two i.e. starts from 0 being the first array  where 0 = start and 2 = how many items to delete
console.log(splice);
console.log(birds)         //shows the remaining items..

const lice = birds.slice()
console.log(lice);

const hhh = birds.pop()
console.log(hhh);
console.log(birds);

const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');

const nnn = cities.splice(index, 2);

console.log(nnn); 
console.log(cities)    // [ "Manchester", "Carlisle" ]

function double(number) {
    return number + 2;
  }
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);
  console.log(doubled);  // [ 10, 4, 14, 12 ]
  

  const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
  const citiess = data.split(',')    // brings your string to an array, also important to locate the index of items []
  console.log(citiess)
  let awa = citiess[2]
  console.log(awa);
  console.log(data)
  function play(sing){             //map and filter
return sing.endsWith('r')
  }
let ggg = citiess.filter(play)  //map
bbb = citiess.map(play)         //filter
console.log(ggg);
console.log(bbb);

const jjj = citiess.join(',')
console.log(jjj);

  


       let cast = 
['Underpants:6.99',
'Socks:5.99',
'T-shirt:14.99',
'Trousers:31.99',
'Shoes:23.99']
// console.log(cast)
// products =  cast.split(',') 
// console.log(products);
// number 2
let total = 0
for(const rain of cast){
    const pp = rain.split(':')
 //  console.log(pp)
van = new Array (pp[0])   //if you use let to a variable e.g. let van, you cant log it outside the for loop 
//console.log(van);

let ww = Number(new Array(pp[1]))
//console.log(ww);


total+=ww  // total=total+ww repeats through out the loop
;
itemText = `${van} - ${ww}`
console.log(itemText);
}
console.log(total)
console.log(total.toFixed(2))   
console.log(van);

//    //   this one adds the preceeding result to the initial result 5+5=10 10+5=15    
//            let pee=parseInt(result)
//            for(let i=0; i<1;i++){
//            num=parseInt(num) + parseInt(pee)
//          //  document.querySelector('.input-glass').value = parseInt(num)
//         if(let (i==1)){ alert('bb')
//             document.querySelector('.input-glass').value == result + num
        
//         }
        

//this one adds the preceeding result to the preceeding result 5+5=10 10+10=20 20+20+40
        //    let pee=parseInt(result)
        //    for(let i=0;i<4;i++){
        //      pee+=+(pee)
        //      console.log(pee)}

// function harvest(){
//     listItems = document.querySelector('.nn')
//     search = document.querySelector('.searches')
//     button = document.querySelector('.search-button')
//     search.value = ''
    
// }

// function harvest(){
//    listItems = document.querySelector('.ULO')
   
//     search = document.querySelector('.searches')

//     bake = document.querySelector('.bake')
//     bake.innerHTML = search.value
//     const bb = 5
//     let bread  = []
//     let boil = bread.unshift(search.value)
//     console.log(bread);
//  let bash = bread.map(birds =>{
//     let li = document.createElement('li')
//     li.textContent = birds;
//     return li;
//  });
//  listItems.append(...bash)}

                       // function harvest(){
// let search = document.querySelector('.searches')
// blows = []
// craft = blows.push (search.value)
// //console.log(blows);
// //craft = blows.unshift(search.value)
// for(let boom of blows){
  
//      for( i=0; i<2; i++ ){
    
//        boom+=search.value
//      console.log(boom)
//      if(i<5){
       
//      }}
    


//   // console.log(boom) 
                        // }}


//     for(let i=0; i<1; i++){
//     blood=blood+search.value
// console.log(blood);}}


// function harvest(){
//     for(let blood of blows){
//         blood = 0
//            for(let i=0; i<1; i++){
//            blood=blood+search.value
//     if(i<1){
//      //onButtonClick(harvest())
//         grow = []
//       cast = grow.push(blood)
//       console.log(grow)
//     }
//     //broom   = grow.unshift(search.value)
//    console.log(blood)}
//  }}


   // bird = search.value
//     listItems.innerHTML = search.value

// if(search.value !==''){
//     boil = bird.unshift(search.value)
// }
//     if(boil.length > bb){
//        search.value = ''   
    
    // for(const vibe of bird){
    //     console.log(vibe)
    // }
    
    

    function harvest(){
       
    

 function honor(d){
 came = [d]
 for(let i=0; i<5; i++){
    come = [came[came.length- 1] ]
    run = come.unshift(d)
    console.log(come)
}
 //come = came.push(+a)
 //run = came.join('+')
 if(typeof came===string){
    alert('g')
 }

 //console.log(come);
 return come
 
}
   
        
        search = document.querySelector('.searches')

let bank = [search.value]
let glow = bank.map(honor)
console.log(glow);
search.value = glow}
    













function ball(){
maxhistory = 5
let van = document.querySelector('.pressing')
let list = document.querySelector('.ULO')
let arrays = []

console.log(arrays.length)

if(van.value!==''){
  chrome = arrays.unshift(van.value)
}
//list.innerHTML=''
for(let newest of arrays ){            //list or map would work

 console.log(newest[1]);
 listsss = document.createElement('li')
 console.log(listsss.children)

 listsss.textContent = newest
   console.log(listsss.textContent);


totals = list.appendChild(listsss)
total = list.childElementCount




if(total== 4){
  van.value=''
 // list.textContent = ''
  //list.textContent = ''
 
 // totals == 0
  
 
 }

}



var objs = {0: 8, 1: 9, 2: 10};
//alert(Object.keys(objs).length)

function double(number){
  return number*2
}

let vibe = [1,2,3,4]
vibes = vibe.toString()
let result = double(vibes)
console.log(result);

var result_string = 'a,b,c,d|1,2,3,4';
result = result_string.split("|");
alpha = result[0];
count = result[1];
// console.log(alpha);
// console.log(count);
count_array = count.split(",");

const values = [];
for (let x = 0; x < 10; x++) {
  values.push([
    2 ** x,
    2 * x ** 2,
  ]);
}
console.log(values);
}

// land = document.querySelectorAll('.topnav')

// let collection = document.land.childNodes
// console.log(collection);
// console.log(land.childNodes);
// console.log(document.body.children);


//high order array methods
const arrs = [477,8914,40461,599148]
const effect = arrs.map(function (n){return n*2}) //n => n*2)
console.log(effect);
console.log(effect[1]);

const names = ['pen', 'book', 'code']
const plural = names.map(m => m + 's')
console.log(plural);

const price = [300,190,311.85,67,19048,5000,670]
const news = price.filter(number=> number <= 350)
console.log(news);

const popus = [
  {'name': 'de' , "population": 234343323},
  {'name': 'decs' , "population": 23434323},                
  {'name': 'desdc' , "population": 2343432343},
  {'name': 'devsv' , "population": 23434342},
  {'name': 'desd' , "population": 2343434},
  {'name': 'devcd' , "population": 23434335,}
]

const newss = popus.map(n => n.population).filter( n => n>20000000)
console.log(newss);

