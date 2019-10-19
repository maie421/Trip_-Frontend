// import React, { useState } from "react";
// import axios from 'axios';
// import styled from "styled-components";
// import { gql } from "apollo-boost";
// import useInput from "../../Hooks/useInput";
// import { useMutation } from "react-apollo-hooks";
// import { FEED_QUERY } from "./Home";
// import PostEditPresenter from "./PostEditPresenter";

// const UPLOAD = gql`
//   mutation upload($caption: String!, $files: [String!]!, $location: String) {
//     upload(caption: $caption, files: $files, location: $location) {
//       id
//       caption
//       location
//     }
//   }
// `;

// const Button = styled.button`
//   background-color: red;
//   padding: 10px;
//   border-radius: 4px;
//   align-items: center;
//   justify-content: center;
// `;

// const Text = styled.span`
//   color: white;
//   font-weight: 600;
// `;
// export default () => {
//   const [loading, setIsLoading] = useState(false);
//   const captionInput = useInput("dfdf");
//   const locationInput = useInput("dfdfd");
//   const [fileUrl, setFileUrl] = useState("");
//   const uploadMutation = useMutation(UPLOAD, {
//     refetchQueries: () => [{ query: FEED_QUERY }]
//   });
//   let name="";
//   const onChangeHandler=event=>{
//     console.log(event.target.files[0])
//     name=event.target.files[0].name;
//   }
  
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     console.log(captionInput.value, locationInput.value);
//     if (captionInput.value === "" || locationInput.value === "") {
//       console.log("All fields are required");
//     }
//     if(name==""){
//       console.log("이미지 선택");
//     }

//     const formData = new FormData();
//     formData.append("file", {
//       name
//     });
//     console.log(name);
//     try {
//       setIsLoading(true);
//       const {
//         data: { location }
//       } = await axios.post("http://localhost:4000/api/upload", formData, {
//         headers: {
//           "content-type": "multipart/form-data"
//         }
//       });
//       console.log(formData);
//       // const {
//       //   data: { handleSubmit }
//       // } = await uploadMutation({
//       //   variables: {
//       //     files: [location],
//       //     caption: captionInput.value,
//       //     location: locationInput.value
//       //   }
//       // });
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return (
//     <PostEditPresenter
//     onSubmit={onSubmit}
//     captionInput={captionInput}
//     locationInput={locationInput}
//     onChangeHandler={onChangeHandler}
//     />
//   );
// };
import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFile: null,
    }
  }

  handleFileInput(e){
    this.setState({
      selectedFile : e.target.files[0],
    })
  }

  handlePost(){
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);

    return axios.post("http://localhost:4000/api/upload", formData).then(res => {
      alert('성공')
    }).catch(err => {
      alert('실패')
    })
  }

  render() {
    return (
      <div>
        <input type="file" name="file" onChange={e => this.handleFileInput(e)}/>
        <button type="button" onClick={this.handlePost()}/>
      </div>
    )
  }
}

export default App