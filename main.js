//--------------------------------- 1-vazifa
// 1-masala

// let person = {
//     name: "Abdulloh",
//     age: 19,
//     job: "Logistic company",
//     interest: "game",
//     hobby: "sleep",
//     number: "+99894683325",
//     username: "AU"
// };
// Object.entries(person).map(([key, value]) => console.log(`${key} - ${value}`))


// 2-masala

// const person1 = { name: "Abdulloh", age: 19 };
// const person2 = { hobby: "Volleyball", interest: "sleep" };
// const newPerson = {};
// Object.keys(person1).map(item => newPerson[item] = person1[item]);
// Object.keys(person2).map(item => newPerson[item] = person2[item]);
// console.log(newPerson);

// 3-masala

// let arr = [1, 2, 3];
// let arr1 = arr.map((value, index) => index === arr.length ? value + 1: value).concat(arr[arr.length -1] + 1);
// console.log(arr1);

// 4-masala

// function fn(arr) {
//     let sum = 0;
//     arr.filter(value => sum += value)
//     if(arr[0] % 2 === 0){
//         return [sum, ...arr].filter(x => true)
//     }else{
//         return [...arr, sum].filter(y => true)
//     }
// }
// console.log(fn([2, 2, 3]))
  

// 5-masala

// 1-usul
// let arr = [1, 2, 3, 4];
// [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
// console.log(arr);

// 2-usul filter
// let arr = [1, 2, 3, 4];
// let newArr = arr.filter((_, index) => true)
// newArr[0] = arr[arr.length - 1]
// newArr[newArr.length - 1] = arr[0]
// console.log(newArr)

// 3-usul map
// let arr = [1, 2, 3, 4];
// let newArr = arr.map((value, index) => {
//   if (index === 0) {
//     return arr[arr.length - 1]
//   }
//   else if (index === arr.length - 1) {
//     return arr[0] 
//   }     
//   else{
//     return value  
//   }                    
// });
// console.log(newArr)


// 6-masala

// function fn() {
//     return [0, 0, 0, 0, 0, 0].map((_, index) => prompt(`${index + 1} - So'zni kiriting :`));
// }
// console.log(fn());
  
// 7-masala

// function test() {
//     const questions = [];
//     for (let i = 0; i < 3; i++) {
//       const question = prompt(`${i + 1} - savolni kiriting:`);
//       questions.push(question);
//     }
//     const answers = questions.map((question, index) => {
//       const answer = prompt(`Savol ${index + 1}: ${question}`); 
//       return { question: question, answer: answer };
//     });
//     console.log(answers);
// }
// test();




// 2-vazifa --------------------------------------------

// 1-masala
// let arr = [];
// for (let i = 0; i < 5; i++) {
//     arr.push(prompt(`${i+1} - sonni kiriting`));
// }
// let max = []
// arr.map(num => {
//     if (num > max) max = num;
// }); 
// // // arrayni ichidagi sonlardan birortasi 2 xonali bolip qolganlari 1 xonali son bolganda 2 xonali sonni xisoblamayabdi  
// // // masalan ['2', '3', '55', '6', '7']  shunaqa bolganda max 55 chiqayabdi 
// console.log("Array:", arr);
// console.log("Max:", max); 

// 2-masala

// const arr1 = [5, 6, true, null, 8];
// const arr2 = [0, 2, 5, false, 6];
// const newArr = [...arr1, ...arr2];
// let sum = 0;
// newArr.map(item => {
//   if (typeof item === 'number' || item === true ) {
//     sum += item;
//   }
// });
// console.log("Yig'indi:", sum);

// 3-masala

// let numbers = [10, 4, 3, 6, 3, 7, 1];
// let minIndex = 0;
// let minValue = numbers[0];
// numbers.map((num, index) => {
//   if (num < minValue) {
//     minValue = num;
//     minIndex = index;
//   }
// });
// console.log("Minimum qiymatning indexi", minIndex);

// 5-masala

// let arr1 = [5, 4, 3, 6, 3, 7, 1];
// let arr2 = [22, 1, 42, 34, 55, 67, 11, 32];
// let arr = [...arr1, ...arr2];
// let newArr = [];

// arr.map(() => {
//   let min = Math.min(...arr);
//   newArr.push(min);
//   arr = arr.filter((num, index) => num !== min || index > arr.indexOf(min));
// });
// console.log(newArr);

// 6-masala

// let carsArr = [
//     { name: "Lasetti", price: 9000 },
//     { name: "Damas", price: 7800 },
//     { name: "Cobalt", price: 12500 },
//     { name: "Gentra", price: 14000 },
//     { name: "Onix", price: 17000 }
// ];
  
// let names = carsArr.map(car => car.name);
// console.log("Names:", names);
// let prices = carsArr.map(car => car.price);
// console.log("Prices:", prices);
  

// 7-masala
// Masala shartiga tushunmadim!

// 8-masala

function reversePrompt() {
    let promt = prompt("Ixtiyoriy son yoki So'z kiriting:");
    let reversed = promt.split('').map((_, i) => promt[promt.length - 1 - i]).join('');
    return reversed
}
console.log(reversePrompt());
  