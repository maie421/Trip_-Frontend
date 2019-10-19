import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import Loader from "../../Components/Loader";
import { useQuery } from "react-apollo-hooks";
import Post from "../Post";
// import { POST_FRAGMENT } from "../../fragments";

export const FEED_QUERY = gql`
  {
    seeFeed {
      ...PostParts
    }
  }
`;

export default () => {
  const [refreshing, setRefreshing] = useState(false);
  const { loading, data, refetch } = useQuery(FEED_QUERY);
  const refresh = async () => {
    try {
      setRefreshing(true);
      await refetch();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };
  return (
    <div
      refreshControl={
        <div refreshing={refreshing} onRefresh={refresh} />
      }
    >
      {loading ? (
        <Loader />
      ) : (
        data &&
        data.seeFeed &&
        data.seeFeed.map(post => <Post key={post.id} {...post} />)
      )}
    </div>
  );
};