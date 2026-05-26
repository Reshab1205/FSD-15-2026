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

const arr = [0,1,2,3,4,5,6,7,8,9,10,true]

function checkOddEvenInArr(a) {
    for(let i of a) {
        if(i % 2 === 0) {
            console.log(`The number ${i} is Even`)
        } else if(i % 2 === 1) {
            console.log(`The number ${i} is ODD`)
        } else {
            console.log('Hello')
        }
    }
}

checkOddEvenInArr(arr)