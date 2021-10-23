import styled from "styled-components";

export const Container = styled.label`
  display: inline-flex;
  align-items: center;
  align-content: center;
  padding-bottom: 0;
  margin-bottom: 0;
  margin-right: 1rem;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ .checkbox {
      background-color: ${(parm) => (parm.disabled ? "#ccc" : "#2196f3")};
    }

    &:checked ~ .checkbox:after {
      display: block;
    }
  }

  .checkbox {
    position: relative;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${(parm) => (parm.disabled ? "#ccc" : "#fff")};
    transition: filter 0.2s;

    &:hover {
      filter: ${(props) => (props.disabled ? "none" : "brightness(0.85)")};
      cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    }

    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 9px;
      top: 2px;
      width: 6px;
      height: 14px;
      border: solid;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;
