function solution(id_pw, db) {
  //id 일치하는 게 있는지 확인
  //db에 아이디는 같고, 비번 다른거 하나랑 둘 다 같은 것이 존재할 수 있음.
  let answer;
  for (let i = 0; i < db.length; i++) {
    if (db[i][0] == id_pw[0] && db[i][1] == id_pw[1]) {
      answer = "login";
      break;
    } else if (db[i][0] == id_pw[0] && db[i][1] != id_pw[1]) {
      answer = "wrong pw";
    } else if (answer != "wrong pw") {
      answer = "fail";
    }
  }
  return answer;
}
