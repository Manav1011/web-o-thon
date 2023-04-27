import React, { useEffect, useState } from 'react'


export default function Coutdown() {
    const [Countdown,setCountdown]= useState(30)
    setInterval(() => {
        setCountdown(Countdown - 1)
    },1000)
  return (
    <div>{Countdown}</div>
  )
}
