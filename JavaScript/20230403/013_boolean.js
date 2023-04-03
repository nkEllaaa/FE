let x = 5;
let y = 10;

console.log(x > y); //false

//true , false 값을 and, or 연산했을 경우 반환값은 true, false
let a = true;
let b = false;

console.log(a && b);

//true, false가 아닌 값을 and, or 연산 했을 경우 단락회로평가를 하게 됨

let a2 = 'hello';
let b2 = '';

console.log(a2 && b2);

//무조건 false =>코드 전체 삭제
if(!(x || y)) {
  console.log('hello')
}

//무조건 true 되게 하려면?
if(!(x || y)) {
  console.log('hello')
}
//변경 후
console.log('hello')

//중요
console.log(Boolean('hello')) //t
console.log(Boolean('')) //f
console.log(Boolean([1, 2, 3])) //t
console.log(Boolean([])) //t
console.log(Boolean({'one' : 10, 'two' : 20})) //t
console.log(Boolean({})) //t
console.log(Boolean(0)) //f
console.log(Boolean(-1)) //t
console.log(Boolean(undefined)) //f
console.log(Boolean(null)) //f
console.log(Boolean(NaN)) //f

if (undefined) { //undefined
  console.log('hello');
}

let aa; //undefined
if (aa) {
  console.log('hello')
}

let bb; //undefined
if (bb > 100) {
  console.log('hello')
}

//견고한 코드 : 어떤 상황에서도 기능이 무너지지 않는 코드
