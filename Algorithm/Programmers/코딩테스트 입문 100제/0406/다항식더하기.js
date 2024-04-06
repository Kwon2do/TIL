function solution(polynomial) {
  let arr = polynomial.split("+");
  let count = 0;
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i].trim();
    if (el.includes("x")) {
      let idx = el.indexOf("x");
      if (idx === 0) {
        count += 1;
      } else {
        count += Number(el.slice(0, idx));
      }
    } else {
      num += Number(el);
    }
  }

  let answer = "";

  if (count !== 0) {
    answer += count === 1 ? "x" : count + "x";
  }

  if (num !== 0) {
    if (answer !== "") {
      answer += " + ";
    }
    answer += num;
  }

  if (answer === "") {
    answer = "0";
  }

  return answer;
}
