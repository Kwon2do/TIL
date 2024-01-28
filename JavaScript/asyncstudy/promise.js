//Producer
const promise = new Promise((resolve, reject)=>{
    //doing some heavy work
    console.log('doing something');
    setTimeout(()=>{
        resolve('success');
    }, 2000); //완료했다면?
    setTimeout(()=>{
        reject(new Error('problem'));
    }, 2000); //실패했다면?
});

//Consumer
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(()=>{ //무조건 수행
        console.log("finally");
    })