// 1
// 2 3
// 6 5 4
// 7 8 9 10
// 15 14 13 12 11

// Input 5

let n = 5
let pattern = ''

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        pattern += '*'
    }
    pattern += '\n'
}
console.log(pattern)

// A B C D E
//  B C D E
//   C D E
//    D E
//     E
// 
// input 5

let n1 = 5
let pattern2 = ''
let alfa = ["A", "B", "C", "D", "E"]
//console.log(alfa)

for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n1; j++) {
        //pattern2 += alfa.charAt(j)
        if (i === j) {
            pattern2 += alfa
        } else {
            pattern2 += alfa.delete(1, 1)
        }
    }
    pattern2 += '\n'
}
console.log(pattern2)