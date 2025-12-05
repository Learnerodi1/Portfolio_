// import { useState } from 'react'
import './App.css'
import { About } from './components/About'
import { Header } from './components/Header'
import { Stack } from './components/Stack'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React, { useEffect } from 'react'
import { Nav } from './components/Nav'

function App() {
  const [width, updateWidth] = React.useState(()=>window.innerWidth < 700)

  useEffect(()=>{
    window.addEventListener("resize", ()=>{
      updateWidth(()=>window.innerWidth < 700)
      updateNewWidth(()=> window.innerWidth > 700)
    })
  },[])


  // console.log(width)
  return (
    <>
    {width && <Nav width = {width}/>}
    <Header/>
    <About name ="Chukwudi Gabriel Chimnonso" skill ="Learning" DOB = "4th July" age ="19" />
    <Stack ></Stack>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
