function changeImg(name) {
  const imgElement = document.querySelector("img"); //imgElment 라는 이름에 값을 넣어준 것이다.
  imgElement.src = `./${name}.jpg`; //같은 폴더에 있어서 ./로 불러오는것 그리고 이름이 같은 그림의 jpg를 불러오는것이다
  imgElement.alt = name;
}
