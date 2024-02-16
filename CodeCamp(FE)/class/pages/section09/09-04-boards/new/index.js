import BoardWrite from "../../../../src/components/units/board/09-write2/BoardWrite.container"

export default function GraphqlMutationPage(props){
    return (
        <BoardWrite isEdit={false} isActive={props.isActive}/>
    )
}