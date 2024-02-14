import {useState} from 'react'
import {useRouter} from 'next/router'
import {useMutation} from '@apollo/client'
import {Graphql_Setting} from './product-create-queries'
import ProductCreateUI from './product-create-presenter'
export default function ProductCreateContainer() {
    const router = useRouter();
    const [나의함수] = useMutation(Graphql_Setting);
    const [seller, setSeller] = useState();
    const [name, setName] = useState();
    const [contents, setContents] = useState();
    const [price, setPrice] = useState();
    const onClickSubmit = async () => {
    const result = await 나의함수({
        variables: {
          //variables 이게 $ 역할을 함
          seller: seller,
          name: name,
          detail: contents,
          price: price
        },
      });
      console.log(result.data.createProduct.message);
    }
    return(
        <ProductCreateUI setSeller={setSeller} setName={setName} setContents={setContents} setPrice={setPrice} submit={onClickSubmit}/>
    )
};