export default function TypescriptPage() {
    //타입추론
    let aaa = "안녕하세요"
    //오류) aaa = 3

    //타입 명시
    let bbb : string = "반갑습니다"
    //오류) bbb = 10

    // 타입명시가 필요한 상황
    let ccc : number | string = 1000 
    ccc = "1000원"
    ccc = 1000

    // 숫자 타입
    let ddd : number = 10
    //오류) ddd = "철수"

    // 불린 타입
    let eee : boolean = true
    eee = false
    //오류) eee = "false" //JS에서는 true로 인식이 된다.

    // 배열 타입
    //오류1) let fff: number[] = [1, 2, 3, 4, 5, "테스트"]
    //오류2) let ggg: string[] = ["철수", "영희", "훈이", 10]
    let hhh: (string | number)[] = ["철수", "영희", 10, 20]
    return <></>

    // 객체 타입
    interface IProfile {
        name: string
        age: number | string
        school : string
        hobby ?: string //있어도 되고, 없어도 되는 것(?)
    }
    const profile:IProfile = {
        name: "철수",
        age : 8,
        school : "다람쥐초등학교"
    }
    profile.name = "훈이" //타입추론으로 인해서 이것만 가능
    profile.age = "8살"
    profile.hobby = "수영"

    // 함수타입(⭐)
    function add1(num1:number, num2:number, unit:string):string {
        return num1 + num2 + unit
    }
    const result = add1(1000,2000,"원") 
    //함수에서 반환해주는 값의 타입도 알려줌
    //result값으로 다른 곳에서 계산이 가능한 지 판단할 수 있다.

    const add2 = (num1:number, num2:number, unit:string):string => {
        return num1+num2+unit
    }
    const result2 = add2(1000,2000,"원")

    // any타입(가급적 자제, JS로 변하게 되는 것)
    let qqq:any = "철수"
    qqq = 123
    qqq = true
}