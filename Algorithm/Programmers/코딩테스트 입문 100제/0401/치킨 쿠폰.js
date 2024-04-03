function solution(chicken) {
  //10마리에 서비스 치킨 1마리인데 이것도 쿠폰나오니까
  //처음 시킬때는 10마리에 서비스 치킨 1마리 -> 쿠폰이 한개 딸려와
  //10+9+9+9 이런식으로 감.
  //만약 10마리 미만이면 서비스 0마리
  return chicken < 10 ? 0 : Math.floor((chicken - 10) / 9) + 1;
}
