import {gql} from '@apollo/client'
export const Graphql_Setting = gql`
    mutation createProduct($seller:String, $createProductInput:{
    $name:String
    $detail:String
    $price:Int
  }){
  createProduct(seller:$seller, createProductInput: $createProductInput) {
    _id
    number
    message
   }
  } 
`