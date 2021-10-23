import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: var(--dark-background);
  color: var(--header-title);
  border: 1px;
  border-radius: 0.7rem;
  padding: 65px;

  span {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 35px;
    color: var(--header-sub-title);
  }

  h1 {
    font-size: 25px;
  }

  hr {
    width: 2%;
    margin: 15px auto 30px auto;
  }

  p {
    font-size: 15px;
    margin: auto;
    width: 55%;
  }
`;
