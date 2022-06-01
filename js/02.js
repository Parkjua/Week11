//비교연산자
// let a = 10;
// let b = 20;
// let c = "10"; //숫자가 아닌 문자
// let d = 9;
// let result;

// console.log(a < b);
// console.log(a > b);
// console.log("---------");
// console.log(a == b);
// console.log(a === b);
// console.log("---------");
// console.log(a == c);
// console.log(a === c);
// console.log("---------");
// console.log(a <= d);
// console.log(a >= d);

// console.log(a);
// console.log(a < b); //true
// console.log(typeof result); //result의 값이 선언되지 않았기 때문에 undefined로 출력
// console.log(Boolean(result)); //false 출력, 정의되지 않았기 때문에 false로 처리됩니다.

// console.log(b);
// console.log(typeof b);
// console.log(Boolean(b)); //true 출력, 정의되어 있기 때문에 true로 처리됩니다.

// 이벤트
// console.log(document);
// console.log(document.getElementById("prev_btn"));
let picNum = 1;
const totalNum = 3;
var picSetting = function () {
  document.getElementById("pic_num").innerText = picNum;
};
picSetting();

// 이벤트 핸들러, 운전하는 핸들 ?
document.getElementById("prev_btn").onclick = function () {
  prevFunction(); // 매개변수=매개인자, 연결시켜주는것
};
document.getElementById("next_btn").onclick = function () {
  nextFunction();
};
var prevFunction = function () {
  if (picNum == 1) {
    picNum = totalNum;
  } else {
    picNum--;
  }
  picSetting();
};
var nextFunction = function () {
  if (picNum == totalNum) {
    picNum = 1;
  } else {
    picNum++;
  }
  picSetting();
};

// 함수 선언 매개변수 사용
// var myFunction = function (a) {
//   //   console.log(a);
//   //   console.log("click");
//   picNum = picNum + 1 * a;
//   document.getElementById("pic_num").innerText = picNum;
// };
