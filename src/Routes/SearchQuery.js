import {gql} from "apollo-boost";
export const SEARCH_POST=gql`
     query searchPost($term:String!){
        searchPost(term:$term){
                id
                location
                caption
                user {
                    id
                    age
                    name
                }
                files {
                    id
                    url
                }
                likeCount
                isLiked
                comments {
                    id
                    text
                    name
                    user {
                    id
                    }
                }
                createdAt
                }
            }
`;