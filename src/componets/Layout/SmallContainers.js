import styled from "styled-components"

const SmallCOntainers =({children, theme})=>{
  return (
    <Box theme={theme}>
      <Text>{children}</Text>
    </Box>
  )
}

export default SmallCOntainers;

const Box = styled.div`
  display: flex;
  width: 250px;
  height: 250px;
  border: solid 10px ${props => props.theme.color ? props.theme.color : 'black'};
  justify-content: center;
  align-items: center;
  margin: 5px;
`
const Text = styled.p`
  font-size: 18px;
  color: red;
`