// '주문 접수' 3초 후 '완료' 메시지 표시하기
const order = (coffee, callback) => {
    console.log(`${coffee} 주문 접수`);
    setTimeout(() => {
      callback(coffee);
    }, 3000);
  };
  
  const display = (result) => {
    console.log(`${result} 완료!`);
  };
  
  order('아메리카노', display);
  

// 1초 간격으로 'A -> B -> C -> D -> STOP' 표시하기   
function displayLetter() {
    console.log('A');
    setTimeout(() => {
      console.log('B');
      setTimeout(() => {
        console.log('C');
        setTimeout(() => {
          console.log('D');
          setTimeout(() => {
            console.log('stop!');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
  
  displayLetter();
  