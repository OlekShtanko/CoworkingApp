import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios"
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  container:{
    paddingBottom:"300px"
  }
}));

const Login=({userAuth,userLogin,...props})=>{
  const classes = useStyles();
  
  const initialFieldValues={
    login:'',
    password:'',
}
const [UserData, setUserData] = useState(initialFieldValues)

const handleChangeLogin = (event) => {
  setUserData({
    ...UserData,
    login:event.target.value,
  });
};
const handleChangePassword = (event) => {
  setUserData({
    ...UserData,
    password:event.target.value,
  });
};

  const handleSubmit=(e)=>
  {
   e.preventDefault();
    axios
    .get(
       `http://localhost:5000/api/Authorization?username=${UserData.login}&pass=${UserData.password}`,{withCredentials:true}).then(response => {
        localStorage.setItem('token', response.data.token)
        axios
        .post(
           `http://localhost:5000/api/Authorization/Post`,
           {withCredentials:true},{
           headers: { Authorization:`Bearer ${response.data.token}`} }
        ).then(res=>{
          localStorage.setItem('id', res.data)
      userAuth.setLoggedIn(userAuth.loggedIn=true)
       console.log(res.data);
        })
       })

}
const handleSubmitAdmin=(e)=>
{
 e.preventDefault();

}

  useEffect(() => {
    
  });

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
       
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
            value={UserData.login}
            onChange={handleChangeLogin}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={UserData.password}
            onChange={handleChangePassword}
          />

          <Button
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Button
           
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmitAdmin}
          >
            Sign In As Admin
          </Button>
          <Grid container  alignItems="center"
  justify="center">
            <Grid item >
              <Link to="/registration" variant="body2" >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default Login;