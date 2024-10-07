const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; // ! = null을 허용하지 않을 것이라는 뜻
const input2 = document.getElementById("num2")! as HTMLInputElement;

// 가장 큰 장점 : 타입 추가
function add(num1: number, num2: number) {   // = num1, num2의 타입이 number다.
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
