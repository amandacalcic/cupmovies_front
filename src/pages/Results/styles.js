import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;

  ul {
    list-style: none;
    display: flex;
    margin: 50px auto;
    flex-direction: column;

    li {
      background: #fff;
      margin-bottom: 15px;

      span {
        padding: 20px 0;
        float: left;
        width: 6%;
        height: 100%;
        background: #999;
        font-size: 45px;
        color: #fff;
      }

      label {
        float: left;
        width: 93%;
        padding: 36px 15px;
        text-align: left;
        font-size: 17px;
        background: #eee;
      }
    }
  }
`;
