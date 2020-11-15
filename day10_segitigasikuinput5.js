// 1 2 3 4 5 4 3 2 1        | 9 col dr 1, max 5 -> 1
// 2 3 4 5 4 3 2            |7
// 3 4 5 4 3                |5
// 4 5 4                    |3
// 5                        |1
// input 5

let a = 5
let b = ''
let initial = 1

for (let i = a; i > 0; i--) {
    let output = initial
    let output2
    for (let j = (2*i)-1; j > 0; j--) { // yang bikin panjang kolom 9,7,5,3,1
        if (output > 5) {
            output2--
            b += `${output2} `
        } else {
            b += `${output} `
            output2 = output
            output++
        }
    }
    b += '\n'
    initial += 1
}
console.log(b)


/*for (let i = a; i > 0; i--) {
    let output = initial
    let output2
    for (let j = 2 * i - 1; j > 0; j--) {
        if (output > 5) {
            output2--
            b += `${output2}`
        } else {
            b += `${output}`
            output2 = output
            output++
        }
    }
    b += '\n'
    initial += 1
}
//console.log(b)*/