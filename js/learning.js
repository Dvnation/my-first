// function onadd(){
//     a = document.querySelector('.class1').value;
//     b = document.querySelector('.class1').value;

//     r = a,b
//     k=r.split('+')
//     console.log(k);
// console.log(parseInt(k[0]) + parseInt(k[1]))
//     document.querySelector('.displayy').textContent = parseInt(k[0]) + parseInt(k[1]);
// }
//  function onclear(){

//     document.querySelector('.displayy').textContent="";
//     document.querySelector('.class1').value="";
//  }
const w= document.querySelector(".wrapper").innerText
console.log(w)
//there might be a for each somewhere else
 
 function intype(){
   allo = document.querySelector('.claim').value;
   const w= document.querySelector('.wrapper').innerText
  if(allo !== w){
    document.querySelector('.comrade').textcontent  = allo    
  }



  // allo = 
   //document.querySelector('.comrade').innerHTML = allo; 
 }

const x=10;
//short form for if x>10 then color is red else it is blue with ternary opearators
const color = x > 10 ? 'red' :  'blue';
console.log(color)
//long form with simple if and else statements
const colors= ['red','blue']
if(x>=10 ) {console.log(colors[0])
}
else {console.log(colors[1])}


//functions

const  add = (x,y) => x+y

console.log(add(5,6));

//or

function sum(x,y){
    return x+y
}
console.log(sum(66,77))

// function onMultiply() {
//     var input = document.getElementById('my-input');
//     const i= input.value
    
//     for (let i = 1; i <= 24; i++){
        
//     }
//      console.log(`${input.value} * ${i} = `, input.value * i);
//     }


//when i click the  button the value becomes multiply
//.inner html means you are referring to the html mark up of that particular element
//.sectionconatainer3.innerHTML would mean all you referring to the html content of that element(.sectioncontainer)

// function write(input){
//     const input= document.getElementsByClassName('.operand')
//     const heavy= input.value*input.value
    
// }
// write(heavy)

// function onadd(x,y){
//     return (x+=y);
// }
// for(let i=0; i<=1000; i++){
//     let a = document.getElementsByClassName('.operand').value;
//    // let cane= a[i];
//     let dog = onadd(cane,cane)
//     console.log(dog[i]);
// }
//let i= document.getElementsByClassName('.operand').value;
//let i={a,b};

// console.log(i);
    

    
// };

// function onclear() {
//     document.querySelector('.operand').value = 'multiply';}

//     function onadd(a,b){
//         return (a + b)}

//         const peace= onadd(input.value,input.value);
//         console.log(peace)=displayy.innerHTML;
//  document.querySelector('.operand').value = console.log(peace);





//  function crayon(a){
//      return a*a;}

//     console.log(return);
 

//    function multiply(a,b){
    // return a*b
//    } 
//    const input = document.querySelector('.operand');
//   const display= document.querySelector('.displayy');
//    const wake= multiply(89,5) ;
//    const happy = console.log(wake);
//    console.log(happy);
//    const cry = operand.value.innerHTML ;


// function onadd(){
//     let a= document.querySelector('.class1').value;
//     let b=document.querySelector('.class2').value;
//     let c= document.querySelector('.class3').value;
    
//     if(b==="+"){

//         let d=a+c
//     }
//     document.querySelector('.class4').value=d;
// }

// function onadd(){
//   let a= document.querySelector('.class1').value;
//  let b5 = document.querySelector('.class1').value;
//     // [' ' + ' ']=
// //'a,b'=  document.querySelector('.class1').value;
// //    let k= a.split('+')
//     L=[a,b5]
//   k = L.split['+']
//    console.log(k);

// //console.log(k)
//  let w = document.querySelector('.displayy').textContent=( parseInt(a)  + parseInt (b5)) ;
//    console.log(w);

    // if( document.querySelector('.displayy').textContent == 'NaN'){
    //     alert('oga check your number')
    // }}
    
// function onadd(){
    
//    a = document.querySelector('.class1').value;
//    let [b,c]=a.split('+')
//    console.log([b,c])
//   document.querySelector('.displayy').textContent=parseInt (b)+parseInt(c)}
//    { return console.log(j)}
// }
// function onadd(){
//     let a= document.querySelector('.class1').value;
// weep=88
//  cry=77
//     let [weep,cry] = a
// // let a= document.querySelector('.class1').value;
// //'weep + cry'==a
//  let hh= parseInt(cry) + parseInt(weep)
//  console.log(hh);}
// //let rice= weep.split('+');
// let w =console.log(weep.split('++'))
// h=parseInt(3) + parseInt(4)
//sparseInt(3)+parseInt(9) == 
    // Write your code here:
// function convertToBaby(nn) {
//     const babyArray = [];
//     for (let i = 0; i < nn.length; i++) {
//       babyArray.push('baby ' + nn[i]);
//     }
//     return babyArray
//   }
  
  // When you're ready to test your code, uncomment the below and run:
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 




  
    //       if( ){
    //     alert('oga check your number')  
    // }
// }
// function onclear(){
//     let a= document.querySelector('.class1').value;
//     let [b,c]=a.split('+');
//     document.querySelector('.displayy').textContent= null;
// }

    


 


// function onadd(){
//     let w = [Number(b),Number(c)]
//     let [r] = w.split('+')==a
//     let a= document.querySelector('.class1').value;
//     ;
//     if(r==a){document.querySelector('.displayy').textContent=parseInt(b)+parseInt(c); }
// }

    // function onadd(){
    //     let a= parseInt(document.querySelector('.n1').value);
    //     let b=(document.querySelector('.n2').value);
    //     let c= parseInt(document.querySelector('.n3').value);
        

    //     if( b === "+"){
    //         let d=a+c
    //         document.querySelector('.n4').value=d;
    //     }
    // if( b ==="*"){
    //     let d= a*c
    //     document.querySelector('.n4').value=d;
    // }
    // if( b ==="/"){
    //     let d=a/c
    //     document.querySelector('.n4').value=d
    // }}

    //     if ( c=== "+" ){
    //     document.querySelector('.operan').value= console.log(a + b);
    //     }

    

    // for (let i =0; i >= 24; i++){
    //    if(a&&b ===i){
    //    console.log(c);
    //    }}}


