import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = qql`  
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id 
            number
            message
        }
    }
`;
export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables 이게 $ 역할을 함
        ...inputs,
      },
    });
    //rest API에서는 const result = axios.get("http://koreanjson.com/posts/1")
    console.log(result);
  };
  const onChangeInputs = (event) => {
    //중괄호와 return사이에 아무것도 없으면 소괄호로 바꿀 수 있음.
    setInputs((prev) => ({
      ...prev,
      //contents: inputs.contents,
      [event.target.id]: event.target.value,
      //대괄호로 감싸줘야 event.target.id의 값이 키가 됨.
    }));
  };

  return (
    <div>
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      제목: <input type="text" id="title" onChange={onChangeInputs} />
      내용: <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
