// async ... awiat 연습하기
// 비동기로 처리할 함수가 있다면 함수 앞에 async를 붙이고 
// 비동기로 처리할 함수 앞에 await를 붙임
// await를 사용하려면 그 함수는 프라미스를 반환해야함
const fs = require("fs").promises;

async function readDirAsync() {
  try {
    const files = await fs.readdir("./");
    console.log(files);
  } catch {
    console.error(err);
  }
}

readDirAsync();
