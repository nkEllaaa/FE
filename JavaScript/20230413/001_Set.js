//차집합, 합집합, 교집합, 여집합
//실무에서는 많이 사용이 안되지만
//알고리즘 문제에서는 거의 필수로 사용되는 자료형

let s = new Set('aabbcccc'); //중복을 제거함
s.size

//문제 1 . 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 합니다.)
회사게시판 = ['최나경','최나경','최나경','최나경','엘라','이나경']
let 게시자 = new Set(회사게시판)
게시자.size

//문제 2 .각각 몇 개의 게시물을 작성하였나요?
for(const i of 게시자) {
  console.log(i, 회사게시판.filter(e => e === i))
}

for(const i of 게시자) {
  console.log(i, 회사게시판.filter(e => e === i).length)
}

//이 풀이는 매우 어려워서 초급자에게 권장하지 않음
let map = new Map()
for(const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1)
}

//1번째 순회 i에 '최나경'
map.set(i (map.get(1) || 0)+ 1)

let map = new Map()
map.get('이호준')
map.set('이호준',1) //최종

//2번째 순회 i 에 '최나경'
map.set(i (map.get(1) || 0)+ 1)
map.set('이호준', 2)


///set 연습
let s = new Set('aabbccdd')
s.sizes('a')
s.has('f')
s.add('z')
s

for (const i of s) {
  console.log(i)
}

let s = new Set('aaabbcc'.split('')) //배열로 넣기

//교집합
let a = new Set('abc')
let b = new Set('cde')
let cro = [...a].filter(e => b.has(e))

//합집합
let union = new Set([...a].concat(...b))
let union = new Set([...a, ...b])
//차집합
let dif = [...a].filter(e =>!b.has(e))

//set, map, object, array, string이 이터러블 객체인지? 순서는 보장하는지?
//이터러블한 객체란? 순회가 가능한 객체인가?
//set, map, array, string

//순서를 보장하나요?
//넣은 순서대로 순회할 수 있는가?
//set, map, array, string
//object는 보장하지 않음



