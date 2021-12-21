
import './App.css'
import React from 'react'
import {Header,Navbar,Team,
       Footer,Marketing, Welcome, BlockChain, 
       Customers, SuccessStory, Partner, Group, Companies,Join} from './components';


const App = () => {
  return (
    <>
          
            <Navbar/> 
            <Header/>
            <Marketing/>
            <Welcome/>
            <BlockChain/>
            <Customers/>
            {/* <SuccessStory/> */}
            <Partner/>
            <Team/>
            <Group/>
            <Companies/>
            <Join/>
            <Footer/>


          
    </>
  )
}

export default App
