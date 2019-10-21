import React from "react";
import {gql} from "apollo-boost";
import withRouter from "react-router-dom/withRouter";
import {useQuery} from "react-apollo-hooks";
import MyProfilePresenter from "./MyProfilePresenter"

const GET_USER=gql`
    query SeeUser($id:String!){
        SeeUser(id:$id){
            id
            name 
            email 
            age
            password
            # # likes
            # comments
            posts{
                id,
                files{
                    url
                }
                
            }
        }
    }
`;

export default withRouter(({ match: { params: { name } } }) => {
    const { data, loading } = useQuery(GET_USER, { variables: { name } });
    return <MyProfilePresenter loading={loading}  data={data} />;
  });