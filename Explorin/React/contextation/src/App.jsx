import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'

export default function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <Header obj={obj}/>
      <Sidebar/>
      <Content/>
    </div>
  )
}
