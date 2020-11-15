
//           0
//         5 0 5
//       4 5 0 5 4
//     3 4 5 0 5 4 3 
//   2 3 4 5 0 5 4 3 2
// 1 2 3 4 5 0 5 4 3 2 1

//let p = document.getElementById("tembak")
let n = 5
let pattern = ''
let pattern2 = ""

for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
        pattern += " "
    } for (let k = i; k >= 0; k--) {
        pattern += `${k}`
    } for (let l = 5; l > n - i; l--) {
        pattern += `${l}`
    }pattern += '\n'
}
console.log(pattern)

for (let i = 0; i <= n; i++) {
    let temp = 2
    for (let j = 0; j < n + i + 1; j++) { //kolom
        let out = j + 1
        if (j < n - i) {
            pattern2 += " "
        } else if (j === n) {
            pattern2 += 0
        } else if (j > n) {
            pattern2 += `${out - temp}`
            temp +=2
        } else {
            pattern2 += `${out}`
        }
    }
    pattern2 += '\n'
}
console.log(pattern2)