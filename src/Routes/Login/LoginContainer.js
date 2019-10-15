import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { PASSWORD_FIND,JOIN,LOGIN,LOCAL_LOG_IN} from "./LoginQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const name = useInput("");
  const age = useInput("");
  const password = useInput("");
  const email = useInput("maie421@naver.com");
  const [requestSecretMutation] = useMutation(PASSWORD_FIND, { variables: { email: email.value } });
  const [join]=useMutation(JOIN,{
    variables:{
      name:name.value,
      email:email.value,
      age:age.value
    }
  });
  const [loginMutation]=useMutation(LOGIN, { variables: { email: email.value,password:password.value } });
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);
  const onSubmit =async  e => {
    e.preventDefault();
    if(action==="logIn"){
      if (email !== "") {
      try {
          const {
            data: { requestSecret }
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error("존재하지 않는 이메일입니다.");
            setTimeout(() => setAction("signUp"), 3000);
          } else {
            toast.success("이메일에 비밀번호가 도착하였습니다.");
            setAction("confirm");
          }
        } catch(e){
          console.log(e);
          toast.error("다시 비밀번호를 입력해 주세요");
        }
      } else {
        toast.error("Email is required");
      }

      }else if(action==="signUp"){
      if(name !=="" && email!==""){
        try{
          const {data:{JoinUser}}=await join();
          if (!JoinUser) {
            toast.error("이미 존재하는 이메일 입니다");
          } else {
            toast.success("성공하였습니다");
            setTimeout(() => setAction("logIn"), 3000);
          }
        }catch{
          toast.error(e.message);
        }
      }
    }else if(action==="confirm"){
      if(password!==""){
        console.log(`${email.value} ${password.value}`);
        const log =loginMutation();
        console.log(log);
        try{
          const{
            data:{LoginUser: token}
          }=await loginMutation();
          if(token !==""&&token !==undefined){
            localLogInMutation({variables:{token}});
          }else{
            throw Error();
          }
        }catch(e) {
          console.log(e);
          toast.error("Cant confirm secret,check again");
        }
      }
    }
  };

  return (
    <LoginPresenter
      setAction={setAction}
      action={action}
      name={name}
      email={email}
      age={age}
      password={password}
      onSubmit={onSubmit}
    />
  );
}; 