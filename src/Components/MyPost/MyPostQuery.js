import {gql} from "apollo-boost"

export const MY_POST_E=gql`
    mutation editPost(
        $id: String!
        $catption: String
        $location: String){
            editPost(
            id:$id
            catption:$catption
            location:$location
            action:DELETE
        ){
        id
        }
    }
`;