import styled from "styled-components";

const FlexContainer =({children, theme})=>{
  return (
    <MainContainer theme={theme}>
      {children}
    </MainContainer>
  )
}

export default FlexContainer;

const MainContainer = styled.div`
  display: ${props => props.theme.display ? props.theme.display : 'flex'};
  flex-direction: ${props => props.theme.flexDirection ? props.theme.flexDirection : 'column'};
  width: ${props => props.theme.width ? props.theme.width : '100vw'};
  height: ${props => props.theme.height ? props.theme.height : '100vh'};
  justify-content: ${props => props.theme.justifyDirection ? props.theme.justifyDirection : 'flex-start'};
  align-items: ${props => props.theme.alignItems? props.theme.alignItems : 'center'};
  border: ${props => props.theme.borderSize ? props.theme.borderSize : '0px' } ${props => props.theme.borderStyle ? props.theme.borderStyle : 'none'} ${props => props.theme.borderColor ? props.theme.borderColor : 'black'};
  padding-top: ${props => props.theme.marginBottom ? props.theme.marginBottom : '5px'};
`


