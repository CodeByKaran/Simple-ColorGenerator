import React,{useState} from 'react'

export default function CopyBtn({toCopy}) {
   
   const [isClicked, setisClicked] = useState(false)
   
   const HandleCopy=async()=>{
      const text = await navigator.clipboard.readText();
      
      let timeOut = null;
      
      if(timeOut){
      clearTimeout(timeOut)
      }
      
      setisClicked(true)
      
      timeOut = setTimeout(()=>setisClicked(false),100)
      
      if(text==toCopy){
         return
      }
      
      navigator.clipboard.writeText(toCopy)
   }
   
  return (
   <button className={`p-1 rounded border-none bg-transparent absolute right-2 ${isClicked?`bg-[#82e82c73]`:``} `} onClick={HandleCopy}>
   &#10065;
   </button>
  )
}