// // 문서에 "환영합니다"가 작성됩니다.
// document.write("환영합니다");
// // 콘솔창에 "Hi!"가 출력됩니다.
// console.log("Hi!");

// // 변수 box안에 100을 저장하고 출력합니다.
// var box = 100;
// console.log(box);

// var box = 30;
// console.log(box);

// // 변수 box안에 문자열 "안녕"을 저장하고 출력합니다.
// box = "안녕";
// console.log(box);

// 변수 a,b에 각 숫자 100과 문자열 "100"을 작성하면 숫자는 보라색으로 출력되어
// 차이점을 확인할 수 있습니다.
// var a = 100;
// var b = "100";
// var c = true;

// console.log(a);
// console.log(b);

// //a는 number, b는 string으로 출력되어 각 타입을 확인할 수 있습니다.
// c는 boolean형으로 참과 거짓을 구별하는 논리형입니다.
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// // 이 태그는 문자열이며 이 tag변수는 h1의 기능으로도 사용할 수 있습니다.
// var tag = "<h1>타이틀</h1>";
// console.log(tag);
// console.log(typeof tag);
// document.write(tag);

// var s = "100";
// var t = 30;
// var d = 100;

// console.log(s);
// console.log(t);
// console.log(typeof s);
// console.log(typeof t);
// console.log(s + t); // 연결 연산자로 문자형과 숫자를 더하면 문자열
// console.log(d + t); // 더하기 연산자로 숫자와 숫자를

// console.log(Number(s) + t); // 문자형을 숫자로 바꿀 수 있는 변환함수

// var s1 = true;
// var s2 = "true";
// var s3 = false;

// //s2는 문자열입니다.
// console.log(s1);
// console.log(s2);
// console.log(s3);

// console.log(typeof s1);
// console.log(typeof s2);
// console.log(typeof s3);

// var s1 = 0;
// var s2 = 1;
// var s3 = 2;
// var s4 = -3.56;

// var s1 = "";
// var s2 = "     ";  // 공백도 참으로 처리됩니다.

// 값이 없기 때문에 false로 처리됩니다.
// var s3 = null;
// var s4;

// console.log(Boolean(s1)); // 값이 없기 때문에 false로 처리됩니다.
// console.log(Boolean(s2));

// console.log(Boolean(s3));
// console.log(Boolean(s4));

// undifined, null
// var s;
// var t = null;

// console.log(s);
// console.log(t);

// 비교 연산자
// console.log(10 < 5); // false로 출력
// console.log(10 > 5); // true로 출력

// // 변수 num에 100을 저장하여 이 타입은 number로 출력됩니다.
// var num = 100;
// console.log(typeof num);

// var myNum = 300; // 전역변수를 사용

// // // 함수 선언
// function test() {
//   // 함수 myNum의 값은 10
//   var myNum = 10;
//   console.log("hi");
//   console.log("함수 안 : " + myNum);
// }
// //위에 함수를 선언하고 호출해주지 않았기 때문에 호출보다 먼저 출력됩니다.
// console.log("밖1 : " + myNum); // 첫번째에 출력 1

// // 함수 호출 2
// test();
// //위에 함수를 선언하고 호출한 다음이기 때문에 마지막에 출력됩니다.3
// console.log("밖2 : " + myNum);

// var num1 = 10;
// console.log(num1);

// function test() {
//   var num1 = 20;
//   console.log(num1);
// }
// test();
// console.log(num1);

// console.log("-------------------------------");

// //1번째
// var num2 = 10;
// console.log(num2);

// //{}만 있을땐 블록으로 처리되기 때문에 영향받지 않습니다 2번째
// {
//   var num2 = 20;
//   console.log("{}: " + num2);
// }

// //3번째
// console.log(num2);

// var 변수는 중복해서 사용이 가능합니다.
// var num1 = 10;
// console.log(num1);

// var num1 = 30;
// console.log(num1);

// // let은 변수를 중복해서 쓸 수 없습니다.
// let score = 20;
// console.log(score);

// let score2 = 30;
// console.log(score2);

// const 변수는 변하지 않는 것에서 사용됩니다. 나이와 키는 변하지만 이름은 변하지 않기때문에 const변수를 사용합니다.
// const myName = "박주아";
// let p_age = 22;
// let p_height = 170;

// console.log(myName);
// console.log(p_age);
// console.log(p_height);

// // myName = "박주미";
// p_age = 32;
// p_height = 163;

// console.log(p_age);
// console.log(p_height);

// // 첫번째
// let num1 = 100;
// console.log(num1);
// // 함수를 선언합니다. 세번째
// function test() {
//   let num1 = 20;
//   console.log(num1);
// }
// // 함수 호출 전이기 때문에 두번째로 출력됩니다.
// {
//   let num1 = 50;
//   console.log(num1);
// }
// // 함수를 호출합니다.
// test();
// //함수를 호출한 후이기 때문에 마지막에 출력됩니다.
// console.log(num1);

// 산술연산자, 숫자와 숫자끼리 만나면 더하기 역할을 합니다.
// let num1 = 15;
// let num2 = 2;
// let result = num1 + num2;
// // 즉 15+2를 더하면 17이 출력됩니다.
// console.log(result);

//덧셈 외에 -,*,/,%로 사용할 수 있습니다.
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// 문자 결합 연산자, 문자열과 숫자가 만나면 문자열의 기능을 하게 됩니다.
// let t1 = "학교";
// let t2 = 20;
// let t3 = 30;
// console.log(t1 + (t2 + t3));
// console.log(t2 + t3 + t1);

// 복합대입연산자
// let num1 = 10;
// let num2 = 3;
// let result;

// result = num1;
// result = num1 + num2;
// console.log(result);

// num1 = 20;
// num1 = num1 + 20;
// num1 += 20;
// console.log(num1);

// 증감 연산자
// let num1 = 10;
// let num2 = 20;

// let result;

// // num1--;
// console.log(num1); // 10
// console.log(++num1); //11
// console.log(num1); //11

// 수업내용
let myNum = 1;
const totalNum = 3;

function numberSetting() {
  document.getElementById("num").innerText = myNum;
}
numberSetting();

document.getElementById("btn_prev").onclick = function () {
  console.log("이전버튼");
  myNum = 1;
  if (myNum == 1) {
    myNum = totalNum;
  } else {
    myNum--;
  }
  numberSetting();
  // console.log(document.getElementById("pic"));
  document.getElementById("pic").src = "./img/product_1.jpeg";
};

document.getElementById("btn_next").onclick = function () {
  console.log("다음버튼");
  myNum = 1;
  if (myNum == totalNum) {
    myNum = 1;
  } else {
    myNum++;
  }
  numberSetting();
  // document.getElementById("pic").style.border = "3px solid blue";
  document.getElementById("pic").style.left = "500px";
};
