//JSON
//JavaScript Object Notation

//1. Object to JSON 
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);
json = JSON.stringify(['apple, banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log('${name} can jump!');
    }
}
json = JSON.stringify(rabbit);
console.log(json);

//배열 안에 프로퍼티명 적어주면, 해당 프로퍼티만 가져옴.
//배열이용
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

//콜백함수 이용
json = JSON.stringify(rabbit, (key, value)=>{
    console.log('key: ${key}, value: ${value}');
    return key;
    //return key === 'name' ? 'dohun' : 'value';
    //만약 키에 name이 들어오게 되면 dohun, 그 외에는 그냥 value값
});
console.log(json);
console.clear();
//2. JSON to Object
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log('key: ${key}, value: ${value}');
    return key === 'birthDate' ? new Date(value) : value;
}); //객체로 변환!!
console.log(obj);
obj.jump(); //Error! why? 우리가 stringify할 때 함수는 따라가지 않음.
console.log(rabbit.birthDate.getDate()); //Date객체라서 정상적
//console.log(obj.birthDate); // obj에 birthDate는 그저 String객체
console.log(object.birthDate.getDate());
//위에 obj 생성에서 콜백함수 사용했기 때문에 getDate() 가능해짐