import React, { useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import { gql } from "apollo-boost";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { FEED_QUERY } from "./Home";
import PostEditPresenter from "./PostEditPresenter";
import {PostCreat} from "./PostEditQuery"


export default () => {
  let file=null;
  let path=null;
  const [loading, setIsLoading] = useState(false);
  const caption = useInput("");
  const location = useInput("");
  const [fileUrl, setFileUrl] = useState("");
  const [uploadMutation] = useMutation(PostCreat);

  const onChangeHandler=event=>{
    file=event.target.files[0]
    console.log(file);
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (caption.value === "" || location.value === "") {
      console.log("All fields are required");
    }
    if(file===null){
      console.log("이미지 선택");
    }
    const formData = new FormData();
    formData.append("file",file);
    try {
      setIsLoading(true);
      await  axios.post("http://localhost:4000/api/upload", formData).then(res => {
        console.log(`성공`);
        path=res.data.location;
        console.log(path);
      }).catch(err => {
        console.log(`실패`);
      });
      const {
        data: { upload }
      } = await uploadMutation({
        variables: {
          files: [path],
          caption: caption.value,
          location: location.value
        }
      });
      window.location = "/";
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <PostEditPresenter
    onChangeHandler={onChangeHandler}
    onSubmit={onSubmit}
    caption={caption}
    location={location}
    />
  )
};