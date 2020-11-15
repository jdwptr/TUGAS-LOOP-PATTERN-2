// 1 -9 2 -8 3 -7 4 -6 5

let a = 9
let b = ''
let out = -9
let out2 = 1

for (let i = 1; i <= a; i++) {
    if (i % 2 === 0) {
        b += out + ' '
        out += 1
    } else {
        b += out2 + ' '
        out2 += 1
    }
}
console.log(b)