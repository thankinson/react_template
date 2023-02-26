import styled from "styled-components";

const Button =({children})=>{
  return (
    <PressAble>{children}</PressAble>
  )
}

export default Button;

const PressAble = styled.button`
  width: 100px;
  height: 30px;
  margin: 5px;
`