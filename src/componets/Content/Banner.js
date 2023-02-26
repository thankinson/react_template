import styled from "styled-components";

const Banner =({children})=>{
  return (
    <Box>
      <p>{children}</p>
    </Box>
  )
}

export default Banner;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1030px;
  height: 80px;
  border: solid 1px green;
  margin: 5px;
`