import { Task } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { addTodo } from '../utlis'
import { useQueryClient } from '@tanstack/react-query'

export const AddTodo = () => {
    const [newTask,setNewTask]=useState('')

    const queryClient=useQueryClient()
    const handleAdd=async ()=>{
        await addTodo({task:newTask})
        queryClient.invalidateQueries('todos')
        setNewTask('')
    }
  return (
    <div className='addTodo'>
        <TextField id="filled-basic" label="Add new task->" variant="filled" 
        sx={{backgroundColor:"white"}}
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd} disabled={!newTask?true:false}>Add Task</Button>
    </div>
  )
}

