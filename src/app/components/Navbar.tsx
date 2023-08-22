'use client'
import {useState} from 'react'
export default function Navbar(props:any) {
//     const [mode, setMode] = useState({
//         color:'white',
//         backgroundColor:'black'
  
//     })
//     const [btn,setBtn]=useState("Enable Dark mode")
//     const handleCls= ()=>{
//     if(mode.color === 'white'){
// setMode({
//     color:'black',
//     backgroundColor:"white"

// })
// setBtn("Enable Light mode")
//     }else{
//         setMode({
//             color:'white',
//             backgroundColor:"black"
        
//         })
    
//     setBtn("Enable Dark mode")
//     }
//     }


  return (
 <>
 <div className={`w-full bg-${props.mode} text-${props.mode} mt-2 h-16 flex justify-between`} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} >
    <div className='mt-3 text-2xl'>
{props.heading}
    </div>
<div className='p-3 mx-3 flex'>
    <button className={`border p-2 ${props.mode==='light'?'dark':'light'} mr-2` }  onClick={props.toggleMode}>Change the body</button>
    {/* <button className={`border p-2 ${props.mode==='light'?'dark':'light'}` }  onClick={handleCls}>{</button> */}
</div>
    </div>
 </>
  )
}
