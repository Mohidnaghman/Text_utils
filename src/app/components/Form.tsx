'use client'
import React  from 'react'
import { useState } from "react";

export default function Form(props:any) {
    const handleonChange =(even:any)=>{

        setText(even.target.value)
    }
    const handleUpp = () => {
        const newtext = text.toUpperCase()
        setText(newtext)
    }
    const handleDown = () => {
        const newtext = text.toLowerCase()
        setText(newtext)
    }
    const handleCls= () => {
        setText("")
    }

    const [text,setText]=useState("")

  return (
 <>
 <form  style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} >
    <h1 className='text-bold text-5xl mx-16 mt-8'>Enter your text here : </h1>
    <textarea className='border mt-10 mx-96 px-96 py-36 w-7/12' onChange={handleonChange} value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
 </form>
 <div className='flex w-7/12 justify-between ml-96'>
    <button className='bg-blue-400 text-white p-5 text-2xl mt-3' onClick={handleUpp}>Change in UpperCase</button>
    <button className='bg-blue-400 text-white p-5 text-2xl mt-3 ' onClick={handleDown}>Change in LowerCase</button>
    <button className='bg-blue-400 text-white p-5 text-2xl mt-3 ' onClick={handleCls}>Clear</button>
</div>

<div className='ml-48 mt-5' style={{color: props.mode==='dark'?'white':'#042743'}}>

<h2 className='text-3xl font-bold'>Prewieu</h2>
<p className='text-lg'> {text}</p>
</div>

 </>

  )
}

