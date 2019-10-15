import { gql } from "apollo-boost";

export const PASSWORD_FIND = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;
export const JOIN=gql`
  mutation JoinUser(
    $name: String!
    $email: String!
    $age: String
  ){
    JoinUser(    
    name: $name
    email: $email
    age: $age)
  }
`;
export const LOGIN=gql`
  mutation LoginUser(
    $password: String!
    $email: String!
  ){
    LoginUser(
    password: $password
    email: $email
    )
  }
`;
export const LOCAL_LOG_IN=gql`
  mutation logUserIn($token:String!){
    logUserIn(token:$token) @client
}
`;