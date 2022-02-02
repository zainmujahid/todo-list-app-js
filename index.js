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
elem = document.getElementById('firstContainer')
elem.addEventListener('click', function(){
    console.log('Container was clicked')
})

elem = document.getElementById('btn')
elem.addEventListener('click', function(){
    console.log('button was clicked')
})