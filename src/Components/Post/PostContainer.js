import React,{useState} from "react";
import PropTypes  from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./postPresenter";

const PostContainer =({
  id,
  user,
  files,
  likeCount,
//   isLiked,
  comments,
  createdAt,
  caption,
  location
})=>{
// // //   const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const comment = useInput("");
  return (
    <PostPresenter
      user={user}
      files={files}
      likeCount={likeCountS}
      location={location}
      caption={caption}
    // //   isLiked={isLikedS}
      comments={comments}
      createdAt={createdAt}
      newComment={comment}
    // //   setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
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
//   isLiked: PropTypes.bool.isRequired,
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