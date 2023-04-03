//스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필(최신 문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것)이 필요합니다.
let firstName = null;
let lastName = null;
let nickName = 'licat';

console.log(firstName ?? nickName)
console.log(firstName ?? nickName ?? nickName) //'licat'
console.log(firstName ?? nickName ?? nickName ?? '익명 사용자')

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c) //10

//단락회로 평가와 nullish 연산자의 차이점
let height = 0;
console.log(height || 100); //100
console.log(height ?? 100); //0

let height2;
console.log(height2 || 100); //100
console.log(height2 ?? 100); //0

let height3 = '';
console.log(height || 'hello'); //hello 
console.log(height ?? 'world'); //undefined