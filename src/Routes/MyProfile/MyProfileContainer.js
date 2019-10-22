import React ,{ useState } from "react";
import {gql} from "apollo-boost";
import {useQuery, useMutation} from "react-apollo-hooks";
import MyProfilePresenter from "./MyProfilePresenter"
import {MY_POST_D} from "./MyProfileQuery";


const GET_USER=gql`
    query me{
        me{
            id
            name 
            email 
            age
            password
            # # likes
            # comments
            posts{
                id,
                caption,
                location,
                files{
                    url
                }
                
            }
        }
    }
`;

export default () => {
    const [action, setAction] = useState("list");
    const [Postdata, setPostdata] = useState("");
    const { data, loading } = useQuery(GET_USER);
    const [mypostMutation]=useMutation(MY_POST_D);
    // const [SeeQuery] = useQuery(SEE_POST);
    const Detail=async(e)=>{
        setPostdata(e);
        setAction("detail");
    }
    const PostDelete=async (e)=>{
    try{
        console.log(e);
      await mypostMutation({
        variables: {
            id:e
        }
      });
      window.location = "/";
        }catch(e){
          throw e;
        }
    };
    console.log(Postdata);
    console.log(data);
    return <MyProfilePresenter 
        loading={loading}  
        Detail={Detail}
        data={data}
        Postdata={Postdata}
        action={action}
        PostDelete={PostDelete}
     />;
  };