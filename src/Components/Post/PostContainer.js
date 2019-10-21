import React,{useState} from "react";
import PropTypes  from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./postPresenter";
import { useMutation } from "react-apollo-hooks";
import {LIKE,ADD_COMMENT} from "./postQuery";
import { toast } from "react-toastify";

const PostContainer =({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  caption,
  location,
  localStorage
})=>{
  const comment = useInput("");
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [selfComments, setSelfComments] = useState([]);
  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value }
  });
  const [likeMutation]=useMutation(LIKE,{
    variables:{postId:id}
  });
  const SelectLike=()=>{
    likeMutation();
    if(isLikedS===false){
      setIsLiked(true);
      setLikeCount(likeCountS+1);
    }else if(isLikedS===true){
      setIsLiked(false);
      setLikeCount(likeCountS-1);
    }
  };
  const onKeyPress = async event => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
      try {
        const {
          data: { addComment }
        } = await addCommentMutation();
        setSelfComments([...selfComments, addComment]);
        comment.setValue("");
      } catch {
        toast.error("Cant send comment");
      }
    }
  };
  return (
    <PostPresenter
      user={user}
      files={files}
      likeCount={likeCountS}
      location={location}
      caption={caption}
      isLiked={isLikedS}
      SelectLike={SelectLike}
      comments={comments}
      createdAt={createdAt}
      newComment={comment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      localStorage={localStorage}
      onKeyPress={onKeyPress}
      selfComments={selfComments}
    />);
};

PostContainer.propTypes = {
  user:PropTypes.shape({//user:User!
    id:PropTypes.string.isRequired,
    avatar:PropTypes.string,
    name:PropTypes.string.isRequired
  }).isRequired,
  files:PropTypes.arrayOf(//files:[File!]!
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      url:PropTypes.string.isRequired
    })
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  comments:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user:PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  createdAt:PropTypes.string.isRequired,
  laoction:PropTypes.string,
};

export default PostContainer; 