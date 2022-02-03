// JS Console API
// console.log("Hello World");
// console.warn("This is a warning");
// console.error("This is an error");

// // JS Variables
// var number1 = 36;
// var number2 = 45;
// console.log("sum = ", number1+number2)

// for Each
// var arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach(function (element) {
//   console.log(element);
// });

// while loop
// var arr = [1,2,3,4,5]
// let j = 0
// while (j<arr.length){
//     console.log(arr[j])
//     j+=1
// }

// split text
// str = "This is a string"
// console.log(str.split(" "))

// date
// let date = new Date()
// console.log(date)

// Event Listener
// elem = document.getElementById('firstContainer')
// elem.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = " <p> <b> We have clicked </b> </p>"
//     console.log('Container was clicked')
// })

// elem = document.getElementById('firstContainer')
// elem.addEventListener('mouseover', function(){
//     console.log('mouse on container')
// })

// elem = document.getElementById('firstContainer')
// elem.addEventListener('mouseout', function(){
//     console.log('mouse out container')
// })

// elem = document.getElementById('btn')
// elem.addEventListener('click', function(){
//     console.log('button was clicked')
// })


// let prevHTML =  document.querySelectorAll('.container')[1].innerHTML
// elem = document.getElementById('firstContainer')
// elem.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML
//     console.log('mouse up container')
// })

// elem = document.getElementById('firstContainer')
// elem.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = " <p> <b> We have clicked </b> </p>"
//     console.log('mouse down container')
// })

// Arrow Function 
// function sum(a,b){
//     return a+b
// }

// sum = (a,b) =>{
//     return a+b
// }


// setTimeout and setInterval 

// logg = () => {
//     console.log("Logging after timeout")
// }

// setTimeout(logg, 5000) // 1 Time
// setInterval(logg, 1000) // Repetetive

// Local Storage in JavaScript write in console
// localStorage.setItem('name', 'Zain');
// localStorage.getItem('name');
// localStorage.removeItem('name')
// localStorage.clear();

// JSON
// // converting
// obj = {name: 'Zain', age: 23, objj: {brothers: 5, family: 'Mujahid'}}
// obj_json = JSON.stringify(obj)
// console.log(typeof(obj))
// console.log(obj)
// console.log(typeof(obj_json))
// console.log(obj_json
// // Converting back
// obj_return = JSON.parse(obj_json)
// console.log(typeof(obj_return))
// console.log(obj_return)

// Template Literals - Backticks
// a = 32
// console.log(`Example of backticks ${a}`)