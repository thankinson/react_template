import DefaultLayout from "../componets/Templates/DefaultLayout";

const Home =()=>{
  return (
    <DefaultLayout theme={theme}>
      <p>Hello World</p>
    </DefaultLayout>
  )
}

export default Home;

const theme = {
  // here you can pass flex direction to the Default Containers
  //
  // by default <LongContainer> flex-direction is set to row
  //
  // example

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
