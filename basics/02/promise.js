// 콜백 안에 계속 콜백이 포함되면 문제가 생길 수 있음
// 프로미스는 처리에 성공/실패 반환 결과를 미리 약속
// 프로미스를 사용해 피자 주문하기   

let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza)
    resolve('피자를 주문합니다.');
  else 
    reject('피자를 주문하지 않습니다.');
});

pizza
  .then((result) => console.log(result))  // 성공했을때 반환값
  .catch((err) => console.log(err));  // 실패했을때 반환값
