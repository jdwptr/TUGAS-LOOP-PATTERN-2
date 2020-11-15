// 1 2 3 4 5 
// 2 3 4 5 1
// 3 4 5 2 1
// 4 5 3 2 1
// 5 4 3 2 1

let a = 5
let b = ''
let temp = 0
let temp2 = 0

for (let i = 0; i < a; i++) {
    for (let j = 1; j <= a; j++) {
        temp = a - i
    
        if (j <= temp) {
            b += j + i
        } else {
            b += a + 1 - j
        }
    }
    b += `\n`
}
console.log(b)