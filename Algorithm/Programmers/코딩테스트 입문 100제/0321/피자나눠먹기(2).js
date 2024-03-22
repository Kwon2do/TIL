function solution(n) {
  //n을 6의 배수로 나누고, 나머지가 0일 때의 몫(피자 판수)
  let pizza = 6; //1판
  //계속 n % pizza하고 있었네..
  while (pizza % n !== 0) {
    pizza += 6;
  }
  return pizza / 6;
}
