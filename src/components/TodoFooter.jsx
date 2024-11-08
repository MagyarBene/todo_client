import { Button } from '@mui/material'
import React from 'react'

export const TodoFooter = ({nrTask}) => {
  return (
    <div className='footer'>
    <Button variant="contained">{nrTask != 0 ?`${nrTask }tasks left` : "No task left"}</Button>
    </div>
    
  )
}
