export interface IProfile {
    name: string
    age: number
    school: string
    hobby?: string
}

// 1.patial 타입(전부 다 ? 달아줌)
type aaa = Partial<IProfile>

// 2.Required(전부 필수)
type bbb = Required<IProfile>

// 3.Pick 타입(일부만 가져오기)
type ccc = Pick<IProfile, "name"|"age">

// 4. Omit 타입(일부 제거)
type ddd = Omit<IProfile, "school"> 

// 5. Record 타입
type eee = "철수" | "영희" | "훈이" // Union 타입
let child:eee = "철수" //철수,영희,훈이 중에서만 선택 가능
let child2:string = "사과" //모든 문자열 가능

type fff = Record<eee, IProfile> //eee는 Key로, IProfile은 value로 바뀜.

// 6. 객체의 key들로 union타입 만들기
type ggg = keyof IProfile //"name" | "age" | "school" | "hobby"
let myprofile:ggg = "hobby"

// 7. type vs interface 차이 => 선언 병합
export interface IProfile {
    candy:number //선언 병합으로 추가 됨.
}

// 8. 응용
let profile:Partial<IProfile> = {
    candy: 10,
}