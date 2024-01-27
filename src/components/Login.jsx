import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './login.module.css';

export default function Login(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          margin: "0 auto",
          width: '25ch',
          display: "flex",
          
        },
      }}
      className={styles.form}
      noValidate
      autoComplete="off"
    >
      <TextField id="username" label="Username" variant="standard" />
      <TextField id="password" label="Password"  variant="standard" />
      <Button variant="contained" onClick={() => props.setIsLoggedIn(true)}>Login</Button>
    </Box>
  );
}
