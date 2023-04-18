// 2번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 정답 유형1 : 숫자를 찾는다!
function solution(my_string) {
  return my_string
      .match(/[0-9]/g)
      .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

"aAb1B2cC34oOp".match(/[0-9]/g)
"aAb1B2cC34oOp".match(/[0-9]/g).map(x => parseInt(x)).reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
  .match(/[0-9]/g)
  .map(x => parseInt(x))
  .reduce((a, b) => a + b, 0)
"aAb1B2cC34oOp"
  .match(/[0-9]/g)
  .reduce((a, b) => parseInt(a) + parseInt(b), 0)


  //정답 유형2 : 문자를 제거한다!
  