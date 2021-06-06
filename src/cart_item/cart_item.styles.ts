import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  // justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding: 20px 0;

  div {
    // flex: 1;
  }

  h3,
  .information,
  .buttons {
    width: 300px;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 150px;
    object-fit: contain;
    margin-left: 50px;
  }
`;
