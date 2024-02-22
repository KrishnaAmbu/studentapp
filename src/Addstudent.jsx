import { TextField, Typography } from '@mui/material'
import React from 'react'

function Addstudent() {
  return (
    <div>
        <Typography variant='h6'>Name:</Typography>
        <TextField variant='outlined' label="enter your name" ></TextField><br />
        <Typography variant='h6'>Age:</Typography>
        <TextField variant='outlined' label="enter your age"></TextField><br />
        <Typography variant='h6'>Dept:</Typography>
        <TextField variant='outlined' label="enter your dept"></TextField>
    </div>
  )
}

export default Addstudent