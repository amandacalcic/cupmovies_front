import styled from "styled-components";

export const Container = styled.div`
  form > div {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.5rem;
    margin-bottom: 2rem;

    li {
      display: flex;
      background: #333;
      color: #fff;
      padding: 1.5rem;
      border: 1px solid #333;
      border-radius: 0.8rem;

      .movie-information {
        text-align: left;

        label {
          font-size: 17px;
        }

        p {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
`;

export const Button = styled.button`
  background: #333;
  padding: 1rem;
  color: #fff;
  border: 1px solid;
  border-radius: 0.5rem;

  :hover {
    background: #000;
    border-color: #000;
  }

  :active {
    background: #474444;
    border-color: #474444;
  }

  :disabled {
    background: #999;
    border-color: #999;
    cursor: context-menu;
  }
`;
