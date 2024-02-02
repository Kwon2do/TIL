import { useMutation, gql } from "@apollo/client"

const 나의그래프큐엘셋팅 = qql`  
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id 
            number
            message
        }
    }
`
    export default  function GraphqlMutationPage() {
        const [나의함수] = useMutation(나의그래프큐엘셋팅)
        const onClickSubmit = async () => {
            const result = await 나의함수({
                $: { //variables 이게 $ 역할을 함
                    writer : "훈이",
                    title : "안녕하세요!!",
                    contents : "반갑습니다"
                }
            }) 
            //rest API에서는 const result = axios.get("http://koreanjson.com/posts/1")
            console.log(result)
        }
        return (
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        )
    }