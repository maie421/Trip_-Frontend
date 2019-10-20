import {gql} from "apollo-boost";

export const PostCreat=gql`
    mutation upload(
        $caption: String
        $files: [String!]!
        $location: String!){
            upload(
                caption: $caption
                files: $files
                location:$location
        ){
        location
        }
    }
`;