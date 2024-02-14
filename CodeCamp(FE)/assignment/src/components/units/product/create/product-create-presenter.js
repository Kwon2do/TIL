
export default function ProductCreateUI(props) {
    return(
        <div>
            판매자:<input type='text' onChange={(event)=>{ props.setSeller(event.target.value);
            }}></input>
            상품명:<input type='text' onChange={(event)=>{ props.setName(event.target.value);
            }}></input>
            상품내용:<input type='text' onChange={(event)=>{ props.setContents(event.target.value);
            }}></input>
            상품가격:<input type='text' onChange={(event)=>{ props.setPrice(event.target.value);
            }}></input>
            <button onClick={props.submit}>상품등록</button>
        </div>
    )
};