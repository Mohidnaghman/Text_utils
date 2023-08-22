'use client'
import Form from './components/Form'
import Navbar from './components/Navbar'
import { useState } from 'react'

export default function Home() {
  const [mode, setMode] = useState('light'); 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
  <>
  <Navbar heading="Navbar " toggleMode={toggleMode} mode={mode}/>
  <Form mode={mode} />
  </>
    )}