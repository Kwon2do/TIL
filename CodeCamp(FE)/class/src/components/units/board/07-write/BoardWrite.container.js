
import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import {나의그래프큐엘셋팅} from './BoardWrite.queries'

export default function BoardWrite() {
    const [isActive, setIsActive] = useState(false)
    const [writer,setWriter] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()

    const [나의함수] = useMutation(나의그래프큐엘셋팅)
    const onClickSubmit = async () => {
        const result = await 나의함수({
            $: { //variables 이게 $ 역할을 함
                writer : writer,
                title : title,
                contents : contents
            }
        }) 
        //rest API에서는 const result = axios.get("http://koreanjson.com/posts/1")
        console.log(result)
        }
        const onChangeWriter = (event) => {
            setWriter(event.target.value)
            if(event.target.value&&title&&contents){
                setIsActive(true)
            }
            else {
                setIsActive(false)
            }
        }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(writer&&event.target.value&&contents){
            setIsActive(true)
        }
        else {
            setIsActive(false)
        }
    }
    
    const onChangeContents = (event) => {
        setContents(event.target.value)
        if(writer&&title&&event.target.value){
            setIsActive(true)
        }
        else {
            setIsActive(false)
        }
    }   
    return (
        <BoardWriteUI onChangeSubmit={onClickSubmit} onChangeWriter={onChangeWriter} onChangeTitle={onChangeTitle} onChangeContents={onChangeContents}
        isActive={isActive}/>
        //이렇게 보내놓으면, props 객체에 aaa,bbb,ccc,ddd 프로퍼티가 담긴 채로 전달 됨.
    )
}