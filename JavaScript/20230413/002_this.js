//this

function a(){
  console.log(this)
}
a(); //window를 호출

function b(){
  console.log('hello')
}
b()
window.b()

let myObj = {
  val1: 100,
  func1 = function() {
    console.log(this);
    //this가 누구일까?
    //1. func1
    //2.myObj 호출
    //3. window
  }
}

myObj.func1(); //myObj 호출


////////////////////////////////////////
let myObj = {
  val1: 100,
  func1 = function() {
    console.log(this);
  }
}

let test = myObj.func1;
test();
//window가 호출 -> test는 윈도우에 있기 때문



//문제 1
//
function sayName() {
  console.log(this)
}
var c = {
  'hello' : 'world',
  'say' : sayName
}

var b = {
  'c' : c
}

var  a= {
  'b' : b
}


//문제2
function sayName() {
  console.log(this)
}
var c = {
  'hello' : 'world',
  'say' : sayName
}

var b = {
  b : 'b',
  'say' : sayName
}


var  a= {
  a: 'a',
  'say' : sayName
}


//추가 예제

function sayName() {
  console.log(this.name) //여기서 this는 window의 name
}

sayName()

let peter = {
  name: 'Peter Parker',
  say: sayName
}

let bruce = {
  name: 'Bruce Wayne',
  say: sayName
}

peter.say() //Peter Parker
bruce,say() //Bruce Wayne


//////////////////////////////////////////////



function attackBeam() {
  this.hp -= 20 //여기서 this는 window의 name
}

sayName()

let jombi = {
  name: 'Busan',
  damaged: attackBeam,
  hp: 10000 
  power: 2
}

let thanos = {
  name: 'Thanos',
  say: sayName,
  damaged: attackBeam,
  hp: 1000,
  power: 100
}

jombi.attackBeam()
jombi

//////////////////////////////////////////////////


function attackBeam() {
  this.hp -= 20 //여기서 this는 window의 name
}
function attackKnife(){
  this.hp -= 5
}

let jombi = {
  name: 'Busan',
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 2
}

let thanos = {
  name: 'Thanos',
  say: sayName,
  damaged: attackBeam,
  hp: 1000,
  power: 100
}

jombi.damaged1()
jombi.damaged2()

jombi.hp


/////////////////////////////////////////////////////////////////
