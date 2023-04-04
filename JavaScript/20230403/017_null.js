let value; //undefined;

var value2 = null;
console.log(value2); //null

let 반점수 = [10, 20, 30, null, 40, 50]
let 반평균 = 0
for (const i of 반점수) {
  console.log(i)
  반평균 += i
}

반평균 //NaN