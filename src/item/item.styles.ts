import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
    padding: 20px;
  }

  img {
    max-height: 250px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
    padding-top: 20px;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
    height: 100%;
  }
`;
