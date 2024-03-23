import React from 'react'

export default function ColorValue({colorVal,colorCodeRef}) {
  return (
    <div className="w-full text-center font-bold text-2xl text-gray-200" >
    <span>
    {!colorVal?"Hello Color!":colorVal}
    </span>
    </div>
  )
}