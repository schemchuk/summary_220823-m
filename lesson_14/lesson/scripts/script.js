// const, let, var
// let name = "John"
// const age = 18

// <
// <=
// >
// >=
// == слабое равенство
// != слабое неравенство
// === строгое равенство
// !== строгое неравенство

// if (18 == "18") { // number === string
  
// } else {
  
// }

// let carModelName // camelCase
// car_model_name // snake_case
// car-model-name // kebab-case

// 4 + "2" 
// in js [оператор + может либо конкатенировать либо сложить значения] 
// выбирает конкатенирование потому что для преобразования типов в строковой тип требует меньше вычислений
// String(4) + "2" = "42"

// 4 - "2"
// in js [оператор - это только математический оператор] 
// 4 - Number("2") = 2

// let arr = [10, "text", true, 0]
// arr[1]

// arr[5] = "new elem"
// arr.push("new elem")
// const lastElem = arr.pop()

let arr = [10, 8, 101, -5, 0] // 0 1 2 3 4 ... arr[0] arr[1] arr[2] ...

for(let i = 0; i < arr.length; i++) { // i = 0, i = 1, i = 2, i = 3, i == 4 ... i = 9
  console.log(arr[i])
}