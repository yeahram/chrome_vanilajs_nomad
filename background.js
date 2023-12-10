// JavaScript 코드
const imageUrl = [
  "./img/background1.jpg",
  "./img/background2.jpg",
  "./img/background3.jpg",
]; // 이미지 파일 경로를 적절히 지정하세요.
const chosenImag = imageUrl[Math.floor(Math.random() * imageUrl.length)];
document.body.style.backgroundImage = `url(${chosenImag})`;
document.body.style.backgroundSize = "cover"; // 이미지를 화면에 맞게 조절합니다.
document.body.style.backgroundRepeat = "no-repeat"; // 이미지 반복을 방지합니다.
