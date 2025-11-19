// basics
function greeting(name) {
  console.log(`${name} 님, 안녕하세요?`);
}
  
greeting('홍길동');
  
// 함수 표현식
// const는 재할당 안됨 즉, 선언과 동시에 값도 선언해야함
const greeting2 = function (name) {
  console.log(`${name}님, 안녕하세요?`);
};
greeting2('홍길동');

// 즉시 실행 함수
(function (a, b) {
  console.log(`두 수의 합: ${a + b}`);
})(100, 200); 

// 화살표 함수
// 주로 return 문으로 하나만 받을 경우에 사용
// let은 재할당 가능함 즉, 초기에 값 선언 안해도됨
////////////////////////////////////////////////////////////////////////
// 매개변수가 없는 경우

// 함수 표현식
let hi = function() {
  return '안녕하세요?';
}
console.log(hi());

// 화살표 함수
let hi2 = () => {
  return '안녕하세요?';
};
console.log(hi2());

// 더 간단하게 하려면 아래처럼
let hi3 = () => '안녕하세요?';
console.log(hi3());
////////////////////////////////////////////////////////////////////////
// 매개변수가 있는 경우 

// 함수 표현식
let sum = function(a, b) {
  return a + b;
};
console.log(sum(100, 200));

// 화살표 함수 
let summ = (a, b) => {
  return a + b;
};
console.log(summ(100, 200));

// 더 간단하게 
let summm = (a, b) => a + b;
console.log(summm(100, 200));