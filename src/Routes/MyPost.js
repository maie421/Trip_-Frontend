import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/MyPost";

const FEED_QUERY = gql`
  {
    MyPost {
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

console.log(`location ${localStorage.getItem("token")}`);

const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  return (<Wrapper>{loading && <Loader />}
        { !loading &&
          data &&
          data.MyPost &&
          data.MyPost.map(post=>(
            <Post
              key={post.id} 
              id={post.id}
              user={post.user}
              files={post.files } 
              isLiked ={post.isLiked }
              likeCount={post.likeCount}
              comments ={post.comments}
              createdAt={post.createdAt}
              location={post.location}
              localStorage={localStorage.getItem("token")}
            />
          ))}
        </Wrapper>
  );
}; 