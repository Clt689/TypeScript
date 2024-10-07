var button = document.querySelector("button");
var input1 = document.getElementById("num1"); // ! = null을 허용하지 않을 것이라는 뜻
var input2 = document.getElementById("num2");
// 가장 큰 장점 : 타입 추가
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
