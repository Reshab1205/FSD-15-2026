// greet()

// function greet() {
//     console.log('Hello World')
// }

// function add(a,b) {
//     console.log(a + b)
// }

// add(2,4)

// greet()
// greet()

// function checkOddEven(a) {
//     if( typeof a === 'number') {
//         if(a % 2 === 0) {
//             console.log('Even')
//         } else if(a % 2 === 1) {
//             console.log('ODD')
//         } else {
//             console.log('Provide Number to Check')
//         }
//     } else {
//         console.log('Provide DataType as Number')
//     }
// }

// checkOddEven()

// const arr = [0,1,2,3,4,5,6,7,8,9,10,true]

// const obj = {
//     name:"Reshab",
//     lname:"Kumar",
//     age:28
// }
// console.log(obj['name'])

// for(let i in obj) {
//     console.log(obj[i])
// }

// function checkOddEvenInArr(a) {
//     for(let i of a) {
//         if(i % 2 === 0) {
//             console.log(`The number ${i} is Even`)
//         } else if(i % 2 === 1) {
//             console.log(`The number ${i} is ODD`)
//         } else {
//             console.log('Hello')
//         }
//     }
// }

// checkOddEvenInArr(arr)

// console.log(greet())

// function greet() {
//     const a = 'Hello Everyone'
//     return a
// }

// const x = function greet() {
//     const a = 'Hii Everyone'
//     console.log('a', a)
// }
// console.log(x())

// const greet = () => {
//     console.log('Hello')
// }

// greet = 10

// greet()
// const x = greet()
// console.log(x)

// const arr = [1,2,true,"Reshab",5,6,{name:"Reshab"}, [7,8]]

// const a = JSON.stringify(arr)
// const d = JSON.parse(a)
// console.log(typeof d)
// console.log(JSON.stringify(a))

// function checkType(x) {
//     if(typeof x === 'object' && x.length > 0) {
//         for(let i of x) {
//             console.log(`Type of ${JSON.stringify(i)} is ${typeof i}`)
//         }
//     } else {
//         console.log('Send an array')
//     }
// }

// checkType(a)


const arr = [1,2,3,4,5]

const obj = {
    name:"Reshab",
    age:28
}

// const obj1 = {
//     city:"Bhopal"
// }

// const x = {...obj, ...obj1}
const {name, ...x} =obj
console.log(x)

// const [x,y,...rest] = arr
// console.log(rest)

// const arr1 = [6,7,8,9]
// // [1,2,3,4,5,6,7,8,9]

// const x = [...arr, ...arr1]
// console.log(x)

// const x = arr.at(0)
// const y = arr.concat(arr1)
// console.log(y)






