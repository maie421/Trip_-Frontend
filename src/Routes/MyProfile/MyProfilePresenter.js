import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import FatText from "../../Components/FatText";

const Wrapper = styled.div`
  min-height: 100vh;
`;
const SquarePost=styled.div`
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const HeaderColumn = styled.div``;

const UsernameRow = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.span`
  font-size: 26px;
  display: block;
`;

const FullName = styled(FatText)`
  font-size: 16px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

export default ({ loading, data }) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.seeUser) {
    const {
      seeUser: {
        id,
        age,
        name,
        posts
      }
    } = data;
    return (
      <Wrapper>
        <Header>
          <HeaderColumn>
            <UsernameRow>
              <Username>{name}</Username>{" "}
            </UsernameRow>
            <FullName text={name} />
          </HeaderColumn>
        </Header>
        <Posts>
          {posts &&
            posts.map(post => (
              <SquarePost
                key={post.id}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
              />
            ))}
        </Posts>
      </Wrapper>
    );
  }
  return null;
};