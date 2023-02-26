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