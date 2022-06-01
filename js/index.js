let myNum = 1;
const totalNum = 3;

function numberSetting() {
  document.getElementById("num").innerText = myNum;
}
numberSetting();

document.getElementById("btn_prev").onclick = function () {
  console.log("이전버튼");
  myNum = 1;
  // if (myNum == 1) {
  //   myNum = totalNum;
  // } else {
  //   myNum--;
  // }
  numberSetting();
  // console.log(document.getElementById("pic"));
  document.getElementById("pic").style.top = "100px";
  document.getElementById("pic").style.left = "20px";
  document.getElementById("pic").src = "./img/emoji1.png";
};

document.getElementById("btn_next").onclick = function () {
  console.log("다음버튼");
  myNum = 2;
  // if (myNum == totalNum) {
  //   myNum = 2;
  // } else {
  //   myNum++;
  // }
  numberSetting();
  //console.log(document.getElementById("pic"));
  // document.getElementById("pic").style.border = "3px solid blue";
  document.getElementById("pic").style.top = "100px";
  document.getElementById("pic").style.left = "500px";
  document.getElementById("pic").src = "./img/emoji2.png";
};

document.getElementById("btn_top").onclick = function () {
  console.log("다음버튼");
  myNum = 3;
  // if (myNum == totalNum) {
  //   myNum = 2;
  // } else {
  //   myNum++;
  // }
  numberSetting();
  //console.log(document.getElementById("pic"));
  // document.getElementById("pic").style.border = "3px solid blue";
  document.getElementById("pic").style.top = "500px";
  document.getElementById("pic").style.left = "500px";
  document.getElementById("pic").src = "./img/emoji3.png";
};
