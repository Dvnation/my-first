//alert('hh')

//color = ['red', 'blue', 'green']
function gghh(){
    
  let col=   document.querySelector('.wrapper').style.background
  color = ['red', 'blue', 'green']
  for(var count=color[0]; count<color.length; count++){
return    document.querySelector('.wrapper').style.background = count++
}

gghh()}


function speak(){
 console.log('good day')
}
speak()

function speak(name){                        //name is a parameter
    console.log(`good day ${name}`)  //console cannnot be made outside the function 
}
speak ('div') //div is known as arguments

function speak(name, time){
    console.log(`good ${time} ${name}`)
}
speak('tayo', 'afternoon')
speak('jerry', 'night')
speak('name', 'time')

function speak(name = 'tayo' , time = 'night'){
console.log(`${name} is alaways a ${time} girl`)
}
speak()
speak( 'day')
speak('george','night') //assigning an argument can overwrite the already listed values of name and time


function calculation(number){
    let calc = `${number} * 2`
    let calcs = number * 3
  let ccc =  calcs + 3
  let came = ccc+2
  let cadd = came + 2
    console.log(calc)
    console.log(calcs)
    console.log(ccc)
    console.log(came)
}
calculation(6)


function area(radius){
  return 3.142 * radius**2}
 let solve = area(9)
  console.log(solve)




function volume (length){
   return solve * length
   
}
let sol = volume(6)
console.log(sol)


// function change(){
//   p = document.querySelector('#checko').innerHTML
//   search = document.querySelector('.checks')
//   span = document.querySelector('.spans')

// //alert('ad')
// if(document.querySelector('#checko').innerHTML = p.replace(search.value, span.innerHTML)){
//   //alert('dwf')
//   document.querySelector('.spans').innerHTML = search.value
// }}


// function hit(){
// //span = document.querySelector('#span')
// span = document.querySelector('.spans')
// sample = document.querySelector('#ss')
// p = document.querySelector('#checko').innerHTML
// search = document.querySelector('.checks')
// way = p.split(' ') 
// console.log(p); //single space split gives each letter.. double space split gives per word


// if(p.includes(search.value)){
  
// play = way.indexOf(search.value)
// vibe = way[play]
// console.log(play);
// console.log(vibe);
// if(p.includes(vibe)){
  
//   document.querySelector('.spans').innerHTML = vibe
// span.innerHTML = `<span style="color: green">${vibe}</span>`;
//   // document.querySelector('.spans').style.color = 'green'
//    document.querySelector('#checko').innerHTML = p.replace( search.value, span.innerHTML)}
   
  
  

  
  
// //onclick can make all color default then highlight selected text
// }
// else{alert('no')}
// }
 



function hit(run){
  word = document.querySelector('#checko').innerHTML
  search = document.querySelector('.checks')
words = word.split(' ')
console.log(words)



if(words.includes(search.value)){
document.querySelector('#checko').innerHTML = word.replace(search.value, `<mark>${search.value}</mark>`);
if(document.querySelector('#checko').innerHTML = word.replace(search.value, `<mark>${search.value}</mark>`)){
  fucntion
}
 }
else{alert('no it is not')}
}

//<!-- Latest compiled and minified CSS -->
//<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">

//<!-- Latest compiled JavaScript -->
//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>



// function change(){
//   word = document.querySelector('#checko').innerHTML
//   search = document.querySelector('.checks')
//   document.querySelector('#checko').innerHTML = 'dvd'
  
// }