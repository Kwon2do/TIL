import { gql } from "@apollo/client"
export const 나의그래프큐엘셋팅 = gql`  
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id 
            number
            message
        }
    }
`
export const UpdateBoard = gql`  
    mutation updateBoard($number:Int, $writer: String, $title: String, $contents: String){
        updateBoard(number:$number, writer: $writer, title: $title, contents: $contents){
            _id 
            number
            message
        }
    }
`