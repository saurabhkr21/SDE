import React from 'react'
import ChildB from './ChildB'
import UserControls from './UserControls'

export default function ChildA() {
  return (
    <div>
      <h2>Child A Component</h2>
      <UserControls />
      <ChildB />
    </div>
  )
}
