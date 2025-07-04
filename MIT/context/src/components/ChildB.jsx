import React from 'react'
import ChildC from './ChildC'

export default function ChildB() {
  return (
    <div style={{ marginLeft: '20px', padding: '10px', border: '1px dashed #999' }}>
      <h3>Child B Component</h3>
      <ChildC />
    </div>
  )
}
