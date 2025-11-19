// 중간에 시간 걸리는 작업이 있을 경우
function displayA() {
    console.log('A');
  }
  function displayB() {
    setTimeout(() => {    // 2초뒤에 console.log("B") 실행
      console.log('B');
    }, 2000);
  }
  function displayC() {
    console.log('C');
  }
  
  displayA();
  displayB();
  displayC();

// 작업 순서 조절하기 - 비동기 처리
function displayA() {
  console.log('A');
}
function displayB(callback) {   // 함수 안에 다른 함수를 매개변수로 넘길때 콜백
  setTimeout(() => {
    console.log('B');
    callback();
  }, 2000);
}
function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);    // displayB를 실행한 후 이어서 displayC 실행
