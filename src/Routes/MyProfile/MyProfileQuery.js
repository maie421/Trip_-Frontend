import {gql} from "apollo-boost";

// export const SEE_POST=gql`
//     query SeePost($id:String){
//         SeePost(
//             id:$id
//         ){
//             id
//             caption
//             location
//             files{
//             url
//             }
//         }
//     }
// `;
export const MY_POST_D=gql`
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
