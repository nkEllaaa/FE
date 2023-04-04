x = 10;
y = 2;
result = x * y;
console.log(`${x}곱하기 ${y} = ${result}`)
//중괄호 안에서 계산하는 것 보다는 변수를 만들어서 계산하는 것을 추천

// console.log('h
// e
// l
// l
// o')

console.log(`h
e
l
l
o
`)

const s = 'hello'
const ss = 'world'
const result2 = s + '\n' + ss
console.log(result2)

// 단점을 '굳이' 뽑자면..
if (true) {
    if (true) {
        if (true) {
            console.log(`h
            e
            l
            l
            o
            `)
        }
    }
}

// 가독성이 떨어집니다.
if (true) {
    if (true) {
        if (true) {
            console.log(`h
e
l
l
o
`)
        }
    }
}