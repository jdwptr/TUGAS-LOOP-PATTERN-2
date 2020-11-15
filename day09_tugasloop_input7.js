// 7
// 6 7
// 5 6 7
// 4 5 6 7
// 3 4 5 6 7
// 2 3 4 5 6 7
// 1 2 3 4 5 6 7

let a = 7
let b = ''

for (let i = 0; i < a; i++) {
    for (let j = 0; j <= i; j++) {
        b += a - i + j 
    }
    b += '\n'
}
console.log(b)