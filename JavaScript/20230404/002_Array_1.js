const arr = [10,20,30];

console.log(arr);
console.dir(arr); //프로퍼티와 메서드를 볼 수 있음


//숫자로 들어간 값은 대괄호로 호출할 수 있고
//length는 문자. 문자로 입력된 값은 .을 찍어서 호출할 수 있음
arr[1]
arr.length

//프로퍼티 추가 가능
arr['leehojun'] = 100
arr.hojun = 1000


//배열의 특징
//1. 배열은 순서가 있음. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing이라고 함
//배열 안의 값을 원소(elements)라고함
const arr = [10,20,30]
arr[0] = 100

//2. 배열에 다른 원시타입과 객체타입을 포함할 수 있음
const arr2 = [
  [1, 2],
  [3, 4],
  [5, 6]
]
arr[3][2]; //6

//0차원, 1차원, 2차원, 3차원, 다차원
const a = 10 //스칼라
const b = [10, 20, 30] //벡터
const arr3 = [
  [1, 2],
  [3, 4],
  [5, 6]
] //메트릭스
const arr4 = [
  [1, 2, [1, 2]],
  [3, 4, [1 ,2]],
  [5, 6, [1, 2]]
] //텐서 (3차원 이상의 다차원)
//인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산이다.


//push
const arr = [1, 2, 3];
arr.push(4);

// push 실무 예제
// let tableBodyData = []
//     for (const iterator of data) {
//         tableBodyData.push(`          
//             <tr>
//                 <td>${iterator['a']}</td>
//                 <td>${iterator['b']}</td>
//                 <td>${iterator['c']}</td>
//                 <td>${iterator['d']}</td>
//                 <td>${iterator['e']}</td>
//                 <td>${iterator['f']}</td>
//             </tr>
//         `)
//     }
//     document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')


//pop
const arr5 = [1,2,3,4,5];
let lastValue = arr.pop() //1. 마지막 값을 꺼냄 2. 꺼낸 값을 반환 
arr // [1,2,3,4]
lastValue //5

//unshift
let myArray = ['사과', '바나나', '포도']
myArray.unshift

//shift 1. 앞에서 값을 꺼내고 2. 꺼낸 값을 반환
let myArray2 = ['사과', '바나나', '포도']
let firstValue = myArray2.shift()
firstValue //사과

//arr.splice(start, deleteCount, items)
const arr6 = [1, 2, 3];
arr6.splice(1, 0, 4); //arr 첫번째에 아무것도 삭제하지 않고 4를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, ...[10, 20, 30]) // 대괄호 없이 1차원으로 넣고싶을 떄

const arr = [1, 2, 3];
arr.splice(1, 0, 10, 20, 30)//같은 결과

const arr7 = [10, 20, 30, 40, 50]
const x = [1, 2, 3]
//만들고 싶은 값 == [10, 1,2 3 ,20 ,30, 1, 2, 3, 50]
arr7.splice(1, 0, ...x)
arr7.splice(6, 0 ,...x);

const arr8 = [10,20,30,40,50]
arr.splice(2,1,5) //arr 2번쨰에 1개를 삭제하고 5를 넣는다

//arr.splice().splice() 
//메서드 체이닝이 의도한대로 안되는 이유는 splice는 arr가 아니라 삭제된 값을 반환하기 떄문입니다.

const arr9 = [10,20,30,40,50]
arr.slice(2,2); // 2번쨰 인덱스에서 값 2개를 삭제합니다. 삽입되는 값은 없습니다.

const arr = [1, 2, 3, 4, 5]
arr.splice(1) //스타트 값 지정, 해당 지점부터 다 날려버림
arr //원본 영향 받지 않음

const myArray1 = ['apple', 'banana', 'orange', 'meron']
console.log(myArray1.slice(1,4))
console.log(myArray1) //원본 영향받지 않음
myArray1.slice(0, 100)

arr = [1, 2, 3, 4, 5]
//arr.forEach(함수)
//함수 callbackfn : (value: number), (index: number), (array: number[])
arr.forEach(function(item, index){
  console.log(index, item) //아이템에 값이들어감
})

arr.forEach(function(item, index){
  console.log(index, item)
  console.log('hello')
  //아이템에 값이들어감
})

arr.forEach(function(item, index, arr){
  console.log(index, item, arr)
  console.log('hello') //아이템에 값이들어감
})

Array(100).fill(0)
const arr1 = Array(100).fill(0)
const array = []

arr1.forEach(function(item, index){
  array.push(index);
})

arr1.forEach(function(item, index){
  array.push(index+1);
})

const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});

//map (면접질문에서 많이나옴. 데이터를 뽑으려고 많이 사용합니다.)
//map은 forEach와 다르게 새로운 배열을 생성합니다.
const arr = [1, 2, 3]
arr.map(function(x){
  return x ** 2
})
// map (면접 질문에서도 많이 나옵니다. 데이터를 뽑으려고 많이 사용합니다.)
// map은 forEach와 다르게 새로운 배열을 생성합니다.

const arr = [1, 2, 3]
arr.map(function(item, index){
    return item ** 2
})

arr.map(function(x){
    return x ** 2
})

arr.map(x => x **2)

const arr = Array(100).fill(0)
// 같은 코드 1
const arr = Array(100).fill(0)
arr.map((v, i) => i)

// 같은 코드 2
const arr = Array(100).fill(0)
arr.map(function(v, i){
    return i
})

// 같은 코드 3
const arr = Array(100).fill(0)
function hojun(v, i){
    return i
}
arr.map(hojun)

// 같은 코드 4
const arr = Array(100).fill(0)
arr.map((v, i) => {
    return i
})


///////////////////////////실무 팁/////////////////////////
let tip1 = [1, 2, 3, 4, 5];
tip1,length //5
console.log(tip1[tip1.lenght-1])
//원본 수정없이 [1,2,3,4] 값과 [5]라는 값을 얻어내고 싶을 때 
console.log([...tip1].pop())
console.log(tip2.pop())
console.log(tip2)

let tip3 = [1, 2, 3, 4, 5];
let tip4 = [10, 20, 30, 40, 50];
console.log([...tip3, 1000, ...tip4])
console.log

//다차원 배열에서 최소값 최대값 찾기
const tip5 = [
  [1, 2],
  [3, 4],
  [5, 6]
]
Math.max(...tip5.flat())

const tip6 = [
  [[1, 2], [1, 2], [1, 2]],
  [[1, 2], [1, 2], [1, 2]],
  [[1, 2], [1, 2], [1, 2]]
]

tip6.flat()
tip6.flat(1)
tip6.flat(2)
tip6.flat(Infinity) //다 펼쳐지면 스톱

const tip7 = new Array(10).fill(0) //Array(10).fill(0) new 안써도 가능
const tip8 = Array.from('hello world')

const tip9 = [1, 2, 3, 4 ,5];
console.log([...tip9.slice(0,2), 1000, ...tip9.slice(2,5)])

let tip10 = [1, 2, 3, 4, 5]
tip10.splice(2, 0, 1000)
tip10
// '.'.repeat(100).split('.') 권하진 않음

arr.forEach((item, index) => {
  arr2.push(index + 1)
})
//둘이 같은코드, 한 줄이면 중괄호 생략가능
arr.forEach((item, index) => 
  arr2.push(index + 1)
)
//같은코드지만 이렇게는 사용하지 않음
function hojun(item, index) {
  arr2.push(index + 1)
}
arr.forEach(hojun)

const tip11 = Array(100).fill(0).map((v, i) => i + 1)

const tip12 = [
  [
    {
      "_id": "642ba3980785cecff3f39a8d",
      "index": 0,
      "age": 28,
      "eyeColor": "green",
      "name": "Annette Middleton",
      "gender": "female",
      "company": "KINETICA"
    },
    {
      "_id": "642ba398d0fed6e17f2f50c9",
      "index": 1,
      "age": 37,
      "eyeColor": "green",
      "name": "Kidd Roman",
      "gender": "male",
      "company": "AUSTECH"
    },
    {
      "_id": "642ba39827d809511d00dd8d",
      "index": 2,
      "age": 39,
      "eyeColor": "brown",
      "name": "Best Ratliff",
      "gender": "male",
      "company": "PRISMATIC"
    }
  ]
]
const ages = tip12.map((item) => item.age);
console.log(ages);