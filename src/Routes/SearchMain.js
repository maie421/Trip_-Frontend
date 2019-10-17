import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import Loader from "../Components/Loader";
import ComponentsSearch from "./Search";
import {SEARCH_POST} from "./SearchQuery";

const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;
console.log(`location ${localStorage.getItem("token")}`);
export default withRouter(({location:{search}})=>{
  console.log(`뭐임1${search}`);
    const term =search.split("=")[1];
    console.log(`뭐임${term}`);
    const {data,loading}=useQuery(SEARCH_POST,{
        skip:term===undefined,
        variables:{
          term
        }
       
    });
  return (<Wrapper>{loading && <Loader />}
        { !loading &&
          data &&
          data.searchPost &&
          data.searchPost.map(post=>(
            <ComponentsSearch
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
}); 