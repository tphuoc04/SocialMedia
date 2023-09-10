import { Box, FormControl, TextField, Button } from '@mui/material';
import './register.css';
import React from 'react'

const Register = () => {
  let handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  }
  return (
    <div className='register'>
      <Box component='div' 
        sx={{
          width: 500,
          height: 300,
          backgroundColor: '#05f8ee',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'row',
          }}>
            <div className="left">
              <img src="https://picsum.photos/200/300" alt="img" />
            </div>
            <div className="right" 
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              <form onSubmit={handelSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <TextField 
                id='outlined-basic' 
                label='Username/Email' 
                type='text' 
                margin='normal'
                required
                />
                <TextField 
                id='outlined-basic' 
                label='Password' 
                type='password' 
                margin='normal'
                required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  >
                  Register
                </Button>
              </form>
            </div>
      </Box>
    </div>
  )
}

export default Register