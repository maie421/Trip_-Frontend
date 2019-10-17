import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import FatText from "../../Components/FatText";
// import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, Comment as CommentIcon } from "../../Components/Icons";
const Post = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 480px;
  user-select: none;
  margin:0 auto;
  margin-bottom: 25px;
`;

const Header = styled.header`

  padding: 15px;
  display: flex;
  align-items: center;
`;
const UserColumn = styled.div`
  margin-left: 10px;
  font-size: 12px;
`;
const Location = styled.div`
  display: block;
  margin-top: 5px;
  padding-bottom:15px;
  font-size: 20px;
`;
const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;
const File = styled.div`
  max-width: 100%;
  width: 100%;
  height: 480px;
  position: absolute;
  top: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;

`;
const Button = styled.span`
  cursor: pointer;
`;
const Meta = styled.div`
  padding: 15px;
`;
const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;
const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;
const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;
export default ({
  user: { name },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  SelectLike,
  onKeyPress,
  comments,
  selfComments,
  localStorage
}) => (
  <Post>
    <Header>
      {/* <Avatar size="sm" url={age} /> */}
      <UserColumn>
        {name}
      </UserColumn>
    </Header>
    <Location>{location}</Location>
    <Files>
      {files &&
        files.map((file) => (
          <File key={file.id} src={file.url}  />
        ))}
    </Files>
    <Meta>
    {(localStorage!==null) && (
      <Buttons>
      
        <Button onClick={SelectLike}>
          {isLiked ? <HeartFull /> : <HeartEmpty />}
        </Button>
      
        <Button>
          <CommentIcon />
        </Button>
      </Buttons>)}
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} like`} />
       {comments && (
        <Comments>
          {comments.map(comment => (
            <Comment key={comment.id}>
              <FatText text={comment.name} />
              {comment.text}
            </Comment>
          ))}
          {selfComments.map(comment => (
            <Comment key={comment.id}>
              <FatText text={comment.name} />
              {comment.text}
            </Comment>
          ))}
        </Comments>
      )}
      <Timestamp>{createdAt}</Timestamp>
      {(localStorage!==null) && (
      <Textarea
        onKeyPress={onKeyPress}
        placeholder={"Add a comment..."}
        value={newComment.value}
        onChange={newComment.onChange}
      />)}
    </Meta>
  </Post>
);