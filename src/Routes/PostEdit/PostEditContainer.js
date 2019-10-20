import React, { useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import { gql } from "apollo-boost";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { FEED_QUERY } from "./Home";
import PostEditPresenter from "./PostEditPresenter";
import {PostCreat} from "./PostEditQuery"
const Button = styled.button`
  background-color: red;
  padding: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  color: white;
  font-weight: 600;
`;
export default () => {
  let file=null;
  let path=null;
  const [loading, setIsLoading] = useState(false);
  const captionInput = useInput("dfdf");
  const location = useInput("dfdfd");
  const [fileUrl, setFileUrl] = useState("");
  const [uploadMutation] = useMutation(PostCreat);

  const onChangeHandler=event=>{
    file=event.target.files[0]
    console.log(file);
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (captionInput.value === "" || location.value === "") {
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
        path=res.data.path;
        console.log(path);
      }).catch(err => {
        console.log(`실패`);
      });
      const {
        data: { upload }
      } = await uploadMutation({
        variables: {
          files: [`http://localhost:4000/${path}`],
          caption: captionInput.value,
          location: location.value
        }
      });

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
    captionInput={captionInput}
    location={location}
    />
  );
};
// import React, { Component } from 'react'
// import axios from 'axios';
// import styled from "styled-components";
// import Input from "../../Components/Input";
// import Button from "../../Components/Button";
// import useInput from "../../Hooks/useInput";

// const Wrapper = styled.div`
//   min-height: 80vh;y
//   vertical-align: middle;
//   display: flex;
//   margin:0 auto;
//   width: 100%;
//   max-width: 380px;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

// const Box = styled.div`
//   ${props => props.theme.whiteBox}
//   border-radius:0px;
//   width: 100%;
//   max-width: 350px;
// `;

// const StateChanger = styled(Box)`
//   text-align: center;
//   padding: 20px 0px;
// `;

// const Link = styled.span`
//   color: ${props => props.theme.blueColor};
//   cursor: pointer;
// `;

// const Form = styled(Box)`
//   padding: 40px;
//   padding-bottom: 30px;
//   margin-bottom: 15px;
//   form {
//     width: 100%;
//     input {
//       width: 100%;
//       &:not(:last-child) {
//         margin-bottom: 7px;
//       }
//     }
//     button {
//       margin-top: 10px;
//     }
//   }
// `;
// class PostEdit extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       locationInput: '',
//       selectedFile: null,
//     }
//   }

//   handleFileInput(e){
//     this.setState({
//       selectedFile : e.target.files[0],
//     })
//   }

//   handlePost=(e)=>{

//     const formData = new FormData();
//     formData.append('file', this.state.selectedFile);

//     return axios.post("http://localhost:4000/api/upload", formData).then(res => {
//       console.log(`성공`);
//     }).catch(err => {
//       console.log(`실패`);
//     })
//   }

//   render() {
//     return (
//       <Wrapper>
//         <input type="file" name="file" onChange={e => this.handleFileInput(e)}/>
//         <Button onClick={this.handlePost()}>버튼</Button>
//       </Wrapper>
//     );
//   }
// }

// export default PostEdit