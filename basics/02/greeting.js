// 이 함수를 두개의 모듈로 나눔 
// users-1.js, hello.js
// 실행시키는건 app-1.js

const users = "홍길동";
const hello = (name) => {
  console.log(`${name} 님, 안녕하세요?`);
};

hello(users);