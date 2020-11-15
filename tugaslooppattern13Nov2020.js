

// input 4
// 
//         0
//       1 0 1
//     2 1 0 1 2
//   3 2 1 0 1 2 3
// 4 3 2 1 0 1 2 3 4

let input = 4
let pattern = ""

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < input - i; j++) {
        pattern += " "
    } for (let k = i; k >= 0; k--) {
        pattern += `${k}`
    } for (let l = 1; l <= i; l++)
        pattern += `${l}`
    pattern += '\n'
}
console.log(pattern)

let n = 5
let pat = ""

for (let i = 0; i <= n; i++) {
    for (let j = n; j > -n; j--) {
        if (Math.abs(j) >= i) {
            pat += " "
        } else {
            pat += Math.abs(j)
        }
    } pat += '\n'
}
console.log(pat)