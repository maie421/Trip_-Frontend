import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import FatText from "../../Components/FatText";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 80vh;y
  // vertical-align: middle;
  display: flex;
  margin:0 auto;
  width: 100%;
  max-width: 890px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
const Files = styled.div`
  width:890px;
  margin:0 auto;
`;
const File = styled.div`
  width:200px;
  height: 200px;
  top: 0;
  float:left;
  margin:10px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;

`;
const FileDtaile = styled.div`
  width:550px;
  height: 550px;
  top: 0;
  margin:0 auto;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;

`;
const Username = styled.span`
  font-size: 26px;
  display: block;
`;
const Location = styled.div`
  line-height:35px;
  font-size: 20px;
  margin:-10px 0 5px 170px;
`;
const FullName = styled(FatText)`
  font-size: 32px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;
const DetailPosts =styled.div`
  width: 900px;
  margin: 0 auto;
`;
const ButtonBox=styled.div`
  clear:both;
  float:right;
  width: 80px;
  margin:20px 0;
  margin-right:100px;
`;

const ButtonBox1 = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${props => props.theme.blueColor};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
`;
export default ({ loading, data ,Detail,action,Postdata,PostDelete}) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data) {
    const {
      me: {
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
            <FullName text={name} />
          </HeaderColumn>
        </Header>
        <Posts>
        {action==="list" &&
            <Files>
              {posts &&
                posts.map((post) => (
                  <File key={post.id} src={post.files[0].url} onClick={()=>Detail([post.id,post.caption,post.location,post.files[0].url])} />
                ))}
            </Files>
        }
        {action==="detail" && 
        <DetailPosts>
           <Location>{Postdata[2]}</Location>
           <Location>{Postdata[1]}</Location>
           <FileDtaile src={Postdata[3]} />
           <ButtonBox>
           <ButtonBox1 onClick={()=>PostDelete(Postdata[0])}>삭제</ButtonBox1>
           </ButtonBox>
        </DetailPosts>
        }
        </Posts>
      </Wrapper>
    );
    
  }
  return null;
};