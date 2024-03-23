import React,{useState,useEffect} from 'react'
import ColorValue from "./components/ColorValue/ColorValue.jsx"
import Button from "./components/Button/Button.jsx"
import CopyBtn from "./components/CopyBtn/CopyBtn.jsx"


export default function App() {
   
   const [bgColor, setbgColor] = useState("#6963e9")
   
   const randomUtil=(range)=>{
      return Math.floor(Math.random() * range)
   }
   
   const HandleRgbClick=()=>{
      const R = randomUtil(220)
      const G = randomUtil(220)
      const B = randomUtil(220)
      setbgColor(`rgb(${R},${G},${B})`)
   }
   
   const HandleHexClick=()=>{
     let HexValue = "#"
     const HexCodes=["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
     for(let i=0;i<6;++i){
       HexValue+=HexCodes[randomUtil(15)]
     }
     setbgColor(HexValue)
   }

   useEffect(() => {
     document.body.style.background=bgColor
   }, [bgColor])
   
   
  return (
    <center className="w-[90%] m-auto h-[100vh] flex items-center justify-center">
    <div className="w-[90%] flex flex-col items-center justify-between p-3 rounded h-[130px] bg-gradient-to-br from-indigo-400 to-blue-300 shadow-2xl shadow-indigo-400">
    <div className="relative w-[90%] text-center flex items-center">
    <ColorValue colorVal={bgColor}/>
    <CopyBtn toCopy={bgColor}/>
    </div>
    <div className="flex w-[90%] justify-between px-2 items-center">
    <Button btnValue="RGB" HandleRgbClick={HandleRgbClick}/>
    <Button btnValue="HEX" HandleHexClick={HandleHexClick}/>
    </div>
    </div>
    
    </center>
  )
}