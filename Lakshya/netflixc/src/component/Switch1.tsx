//@ts-nocheck
'use Client'
import { ThemeContext } from '@/app/layout'
import { Switch } from '@radix-ui/themes'
import React, { useContext } from 'react'

export default function Switch1() {
    const {isDark,setIsDark}=useContext(ThemeContext)
  return (
    <div>
      <Switch size="3"
      onCheckedChange={()=>(
        setIsDark(!isDark)
      )}/>
    </div>
  )
}
