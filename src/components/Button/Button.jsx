import React from 'react'

export default function Button({btnValue,HandleRgbClick,HandleHexClick}) {
   
   const EmitBtnEvent=(type)=>{
     if(type==="RGB") HandleRgbClick()
     else HandleHexClick()
   }
   
  return (
    <button type='submit' className="w-[65px] h-[40px] bg-gradient-to-b from-indigo-300 to-indigo-100 rounded-lg  border-none text-slate-900 font-bold" onClick={()=>EmitBtnEvent(btnValue)}>
    {btnValue}
    </button>
  )
}