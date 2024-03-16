function solution(price) {
  var sale = 0;
  if (price >= 100000 && price < 300000) {
    sale = 5;
  } else if (price >= 300000 && price < 500000) {
    sale = 10;
  } else if (price >= 500000) {
    sale = 20;
  }
  return Math.trunc(price - price * (sale / 100));
}
