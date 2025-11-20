// Node.js에서 프로미스로 비동기 처리하기  
// 실행결과가 true, false일때 반환값이 미리 약속되어 있음
// 프라미스를 사용하려면 가져온 모듈 뒤에 .promises를 붙여야함
// then : 실행결과가 true 일때
// catch : 실행결과가 false 일때 
const fs = require("fs").promises;

fs.readdir("./")
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
