import { gql } from "apollo-boost";

export const ME_NAME = gql`
  {
    me{
      name
    }
  }
`;