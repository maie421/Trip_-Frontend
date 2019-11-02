import React, { useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import { gql } from "apollo-boost";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import PostEditPresenter from "./PostEditPresenter";
import {PostCreat} from "./PostEditQuery"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default () => {
  let file=null;
  let path=null;

  const [loading, setIsLoading] = useState(false);
  const caption = useInput("");
  const location = useInput("");
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
      toast.error("파일을 선택해주세요.");
    }
    const formData = new FormData();
    formData.append("file",file);
    try {
      toast.success("파일 업로드 중입니다.");
      setIsLoading(true);
      await  axios.post("http://localhost:4000/api/upload", formData).then(res => {
        path=res.data.location;
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