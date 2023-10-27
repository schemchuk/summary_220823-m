// logSum(5, 4) // hoisting

// function logSum(firstNum, secondNum) {
//   console.log(firstNum + secondNum)
// }


//// function declaration
// function getSum(firstNum, secondNum) {
//   return  firstNum + secondNum
// }

// const result = getSum(5, 4)
// console.log(result)

// ------------ var ------------

// if (true) {
//   var num = 4
// }
// console.log(num)

// function test() {
//   var text = "Hello"
// }
// test()
// // console.log(text)

// var word = "hello"
// var word = "world"
// console.log(word);

// -----------------------------
// function expression
// let getSum = function(a, b) {
//   return a + b
// }

// console.log(getSum(4, 5));

// ----------------- tasks -----------------
// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 
// (9, 3) => [3, 4, 5, 6, 7, 8, 9]
function getArrayFromRange(a, b) {
  if (a === b) {
    return null
  }

  let min = a
  let max = b
  if (a > b) {
    min = b
    max = a
  }

  const newArray = []
  for(let i = min; i <= max; i++) {
    newArray.push(i)
  }

  return newArray
}

// console.log(getArrayFromRange(9, 3))
// console.log(getArrayFromRange(100, 72))

// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.

function getStatsOfArray(arr) {
  if (arr.length === 0) {
    return null
  }
  let sum = 0
  let min = arr[0]
  let max = arr[0]

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]

    if(arr[i] < min) {
      min = arr[i]
    }
    if(arr[i] > max) {
      max = arr[i]
    }
  }

  let avg = sum / arr.length
  const obj = {
    min,
    max,
    avg
  }

  return obj
}

// console.table(getStatsOfArray([2, 1, 3, 5]))

// В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.
// Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
// Anna, казак, мадам, оно, hello

// const text = "hello" // olleh

function checkPalindrome(word) {
  let reversed = ''
  for(let i = word.length - 1; i >= 0; i--) {
    reversed += word[i]
  }
  
  return reversed === word
}

// console.log(checkPalindrome("hello"))
// console.log(checkPalindrome("anna"))

// Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
// let sum = 0
// for(let i = 0; i <= 50; i += 5) {
//   sum += i
// }
// console.log(sum)

// В программе объявлена переменная list, содержащая массив данных. Используя цикл, посчитайте сумму значений до первого булевого значения. Дойдя до булевого значения остановите цикл. Результат суммы выведите в консоль
// const list = [2, -6, 15, 23, true, 100]
// let sum = 0
// for(let i = 0; i < list.length; i++){
//   if(typeof list[i] === "number") {
//     sum += list[i]
//   }
//   if(typeof list[i] === "boolean") {
//     break
//   }
// }

// console.log(sum);

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”
const products = [
  {
      id: 1,
      title: "bicycle",
      price: 45000,
      discount: 10
  },
  {
      id: 2,
      title: "roller-skates",
      price: 15000,
      discount: 5
  },
  {
      id: 3,
      title: "kick scooter",
      price: 10000,
      discount: 30
  },
  {
      id: 4,
      title: "skis",
      price: 25000,
      discount: 10
  },
  {
      id: 5,
      title: "skate",
      price: 10000,
      discount: 0
  }
]

// for(let i = 0; i < products.length; i++) {
//   const {title:name, price, discount} = products[i]
//   // let totalPrice = price - price * discount / 100
//   console.log(`${name}: Price = ${price - price * discount / 100}`)
// }

let arrOfNums = [1, 2, 3]
// let a = arrOfNums[0]
// let b = arrOfNums[1]
// let c = arrOfNums[2]
const [a, b, c] = arrOfNums