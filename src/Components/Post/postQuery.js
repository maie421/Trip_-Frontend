import {gql} from "apollo-boost";

export const LIKE=gql`
    mutation like($postId: String!){
        like(
            postId:$postId
        )
    }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: String!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      text
      name
    }
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