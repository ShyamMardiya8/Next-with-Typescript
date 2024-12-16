"use client"
import React, { useState } from 'react'
import Counter from '../Button/page'
function page() {
  const [count, setCount] = useState<number>(0)
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handledecrement = () => {
    setCount(count - 1)
  }
  return (
    <>
    <Counter 
    count = {count}
    setCount = {setCount}
    handleIncrement = {handleIncrement}
    handledecrement = {handledecrement}/>
    </>
  )
}

export default page