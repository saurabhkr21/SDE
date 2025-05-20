import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material';

export default function Parent() {
  return (
    <Tooltip
      title={
        <button className='bg-amber-200 p-2 rounded-lg w-full '>
            hello</button>
      } >
        <div>Hover me</div>
    </Tooltip>
  )
}
