
//************** */ best ES7 Snnipet = rafce ****************


// // This is Functional Component.

// import my custom component


import Header from './components/header/Header.jsx'
import Section from './components/section/Section.jsx'
import Footer from './components/footer/Footer.jsx'
import Footer2 from './components/Footer2/Footer2.jsx'



// You can also import css files at this App.jsx file to make them globaly available to all components.

import './index.css'
import './components/header/Forall.css'
import './App.css'
 
// import Header from './components/Header.css'

const App = () =>  {

  return (
    <>
    {/*  render my custom  component */}
    
    <Header/>
    <Section/>
    <Footer/>
    <Footer2/>
    </>
    
  )
}

export default App;
