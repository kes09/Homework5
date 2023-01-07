//1.
let array = [[1,2], [3,4], [5,6],].reduce(function(accumulator,currentValue){
      return accumulator.concat(currentValue);
})
console.log(array);
// 2.
let arr = [-1, -2, -3, 4].some(item => item > 0);
console.log(arr);
// 3.

let array1 =[23,45,32,5,87,7,3,98];
let min= array1.sort((x,y) => y - x)[array1.length-1];
console.log(min);

// 4.
let divElement = document.createElement('div');
divElement.setAttribute('class', 'wrapper');

let image = document.createElement('img');
image.setAttribute('src', 'https://cdn.hswstatic.com/gif/google-update.jpg');
image.setAttribute('alt', 'Google');

let h2Elem = document.createElement('h2');
h2Elem.textContent = "Google";
h2Elem.style.color = "rgb(255,0,0)";
h2Elem.style.fontSize = "30px";

divElement.appendChild(image);
divElement.appendChild(h2Elem);

document.getElementById('wrapper-box').appendChild(divElement);