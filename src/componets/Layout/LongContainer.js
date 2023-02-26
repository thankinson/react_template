import styled from "styled-components";

const LongContainer=({children, theme})=>{
  return(
    <Box theme={theme}>
      {children}
    </Box>
  )
}

export default LongContainer;

const Box = styled.div`
  display: ${props => props.theme.display ? props.theme.display : 'flex'};
  flex-direction: ${props => props.theme.flexDirection ? props.theme.flexDirection : 'row'};
  width: ${props => props.theme.width ? props.theme.width : '90vw'};
  height: ${props => props.theme.height ? props.theme.height : ''};
  justify-content: ${props => props.theme.justifyDirection ? props.theme.justifyDirection : 'center'};
  align-items: ${props => props.theme.alignItems? props.theme.alignItems : 'center'};
  border: ${props => props.theme.borderSize ? props.theme.borderSize : '' } ${props => props.theme.borderStyle ? props.theme.borderStyle : ''} ${props => props.theme.borderColor ? props.theme.borderColor : ''};
  margin-bottom: ${props => props.theme.marginBottom ? props.theme.marginBottom : '5px'};
`