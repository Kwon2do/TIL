const messageContainer = document.querySelector('#d-day-message');
const container = document.querySelector('#d-day-container');
const savedDate = localStorage.getItem('saved-date');

const intervalIdArr = [];

const dateFormMaker = function () {
  const inputYear = document.querySelector('#target-year-input').value;
  const inputMonth = document.querySelector('#target-month-input').value;
  const inputDate = document.querySelector('#target-date-input').value;

  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;

  return dateFormat;
};

const counterMaker = function (data) {
  //localStorage date값과 일치하는지 비교
  if (data !== savedDate) { 
    localStorage.setItem('saved-date', data);
  }
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  //TimeOver
  if (remaining <= 0) {
    //타이머가 종료 안내메시지 출력
    container.style.display = 'none';
    messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>';
     //display none 속성 제거
    messageContainer.style.display = 'flex';
     //타이머 중지
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    // 만약, 잘못된 날짜가 들어왔다면, '유효한 시간대가 아님' 안내메시지 출력
    container.style.display = 'none';
    messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>';
    messageContainer.style.display = 'flex';
    setClearInterval();
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  //D-day를 출력하는 각 태그에 접근 용이
  const documentArr = ['days', 'hours', 'min', 'sec'];
  //remaining 객체의 key값을 배열로 저장
  const timeKeys = Object.keys(remainingObj);

   //2자리 표기 변환함수
  const format = function (time) {
    if (time < 10) {
      return '0' + time;
    } else {
      return time;
    }
  };

  let i = 0;
  for (let tag of documentArr) {
    //remainingObj에 있는 각각의 value를 2자리 format으로 변환해서 저장
    const remainingTime = format(remainingObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainingTime;
    i++;
  }
};

const starter = function (targetDateInput) {
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }
   //화면에 D-Day를 표시하기 위해서
  container.style.display = 'flex';
   //안내메시지 숨김
  messageContainer.style.display = 'none';
  setClearInterval();
  //타이머 동작은 1초 뒤이기 때문에 미리 한번 실행시켜주는 것
  counterMaker(targetDateInput);
  //타이머 시작
  const intervalId = setInterval(() => {
    counterMaker(targetDateInput);
  }, 1000);
  //여러번 버튼 클릭 시 발생하는 Interval 저장
  intervalIdArr.push(intervalId);
};

//여러 개 중첩된 Interval을 처리할 수 있는 clearInterval 구현
const setClearInterval = function () {
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
};

const resetTimer = function () {
  container.style.display = 'none';
  messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';
  messageContainer.style.display = 'flex';
	localStorage.removeItem('saved-date'); 
  setClearInterval();
};

//기존에 savedDate가 있다면,
if (savedDate) {
//저장된 savedDate를 불러와서 재가동
  starter(savedDate);
} else {
  container.style.display = 'none';
  messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';
}