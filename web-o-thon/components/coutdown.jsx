import React, { useEffect, useState } from 'react'


export default function coutdown() {
    const [CountDown,setCountdown]= useState(30)
    setTimeout(() => {
        setCountdown(CountDown - 1)
    },30000)
  return (
    <div>{coutdown}</div>
  )
}
