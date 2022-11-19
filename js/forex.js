
    //let but= document.querySelector(".button-open")

if(document.getElementsByClassName(".button").clicked == true){
    alert('yes')
}

// onclick = (function outer(){
//     let but= document.querySelector(".button-open")
//     let counter = 0; 
//     return function inner(){
//         counter++; console.log(counter);
//     };
// })();
event

let but= document.querySelector(".button-open")
counter=0;

but.addEventListener('click', function (){
++counter;
if(counter===1){
    but.style.background='blue';
    
}

if(counter===2){
    but.style.background ='pink'  //return breaks from a function

}

  console.log(counter);
})



// for(let i=0; i<10; i++){
//     ar= [i]
// ar.forEach(function(n){
//     let but= document.querySelector(".button-open")
//     but.addEventListener('click', function play(){
//          console.log(n++);
// })}
// )}
   
