import { Button, TextField, Typography } from '@mui/material'
import React,{ useState } from 'react'

//  function Addstudent() {
  const AddStudent = () =>{
    var[data,setData]= useState();
     const student=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }
  
  return (
    <div>
        <Typography variant='h6'>Name:</Typography>
        <TextField variant='outlined' label="enter your name" onChange={student} ></TextField><br />
        <Typography variant='h6'>Age:</Typography>
        <TextField variant='outlined' label="enter your age"onChange={student}></TextField><br />
        <Typography variant='h6'>Dept:</Typography>
        <TextField variant='outlined' label="enter your dept"onChange={student}></TextField><br /><br />
        <Button variant='contained' >Submit</Button>
    </div>
  )
}

export default AddStudent