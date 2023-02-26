# React Configurable Style Template
#
## Welcome!!
### This started as a test to see how i can push my react knowledge upto now and has turned into a configurable template for future projects i may work on. 
#
#
## How it works!

### Asuming you have a basic understanding of javascript and the react framwork then you should be able to follow my confusing nonsense i maybe about to type. 

### For the purpose of this talk assume the `<Home />` compnant is called in the App.js file (your own projects maybe using routes in app.js.).
#
## Home.js

### In Home.js you import the default layout for the site. 

```
import DefaultLayout from "../componets/Templates/DefaultLayout";

const Home =()=>{
  return (
    <DefaultLayout theme={theme}>
      <p>Hello World</p>
    </DefaultLayout>
  )
}

export default Home;
```

### To configure some basic stylings for the DefaultLayout you need to create an object with set styling paramiters to pass to your componants.

```
const theme = {
  banner: {
    borderColor: 'blue',
    borderSize: '1px',
    borderStyle: 'solid'
  },
  navBar: {
    // flexDirection: 'column',
    borderColor: 'red',
    borderSize: '1px',
    borderStyle: 'solid'
  },
  content: {
    borderColor: 'green',
    borderSize: '1px',
    borderStyle: 'solid',
    height: '500px'
  }
  } 
  ```
### When renderd the theme object is passed to the DefaultLayout component and then onto the subcomponents.

## DefaultLayout.js

### As you can see in the bellow snippit, you can see that the theme object has been passed to this file and then by using template literals its has passed the appropriate stylings to the correct componants if they where set in Home.js

```
import Banner from "../Content/Banner"
import FlexContainer from "../Layout/flexContainer"
import LongContainer from "../Layout/LongContainer"
import Button from "../Ui/Button"

const DefaultLayout =({children, theme})=>{

  const navBar = [{lable: 'Home'}, {lable: 'About'}, {lable: 'Contact Us'}]

  return (
    <FlexContainer theme={theme.mainContainer}>

      <LongContainer theme={theme.banner}>
        <Banner>Title Goes here</Banner>
      </LongContainer>

      <LongContainer theme={theme.navBar}>
        {navBar && navBar.map((e)=> <Button>{e.lable}</Button>)}
      </LongContainer>

      <LongContainer theme={theme.content}>{children}</LongContainer>
    </FlexContainer>
  )
}

export default DefaultLayout;
```
## LongContainer.js

### LongContainer.js is a preconfgured component that has a set styling already configured. By passing through props from Home.js if you wanted to you could alter the preconfigured stylings using the theme object.
```
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
```

### If you look at the Styled componants you will see turnery operators that set default styles for the componanet and check that if the chosen prop is present then the default will be replaced by the paramiter passed down from Home.js

#
#
## Confused?

### If your as confused as i am Feel free to ask some questions. more than happy to try and record a video and upload it youtube. (i fail at videos btw).
