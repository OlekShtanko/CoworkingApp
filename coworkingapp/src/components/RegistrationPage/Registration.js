import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {NavLink,Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios"


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

export default function Registration() {
  const classes = useStyles();
  
  const initialFieldValues={
    login:'',
    password:'',
    fullName:'',
    mobile:'',
    email:'',
    age:'',
    status:'user'
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
const handleChangeFullName = (event) => {
  setUserData({
    ...UserData,
    fullName:event.target.value,
  });
};
const handleChangeMobile = (event) => {
  setUserData({
    ...UserData,
    mobile:event.target.value,
  });
};
const handleChangeEmail = (event) => {
  setUserData({
    ...UserData,
    email:event.target.value,
  });
};
const handleChangeAge = (event) => {
  setUserData({
    ...UserData,
    age:event.target.value,
  });
};

  const handleSubmit=(e)=>
  {
   e.preventDefault();
        axios
        .post(
           `http://localhost:5000/api/DUser`,
           {
            "login": UserData.login,
            "password":UserData.password,
            "fullName":UserData.fullName,
            "mobile": UserData.mobile,
            "email":UserData.email,
            "age":parseInt(UserData.age),
            "status":UserData.status,
           }
        ).then(res=>{
       console.log(res);
        })
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
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="fullName"
            autoFocus
            value={UserData.fullName}
            onChange={handleChangeFullName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="login"
            label="Login"
            type="login"
            id="login"
            autoComplete="current-login"
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
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            autoComplete="current-email"
            value={UserData.email}
            onChange={handleChangeEmail}
          />
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="age"
            label="Age"
            type="age"
            id="age"
            value={UserData.age}
            onChange={handleChangeAge}
          />

          <Button
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>

          <Grid container  alignItems="center"
  justify="center">
            <Grid item >
              <Link to="/login" variant="body2" >
                Back to sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}