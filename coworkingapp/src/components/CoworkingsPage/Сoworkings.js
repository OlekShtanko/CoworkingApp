import React,{useState,useEffect} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Redirect } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from "axios"
import {TableContainer,Table,TableHead, TableRow, TableCell,TableBody, ButtonGroup,Container, Box,TextField,FormControlLabel,RadioGroup,Radio, getLuminance} from "@material-ui/core"
import {Link} from 'react-router-dom';
import { getByDisplayValue } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin:theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperImg: {
    padding: theme.spacing(2),

    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  head:{
    textAlign:'center',
    fontSize:"32px",
  },
  img:{
    maxWidth:"100%"

  },
  about:{
    textAlign:'center',
    fontWeight:"bold"
  },
  main:{
    background:"white"
  },
  button:{
    padding: theme.spacing(3),

      hight:"200px"
  }
}));
function Coworkings(props) {
  const classes = useStyles();



  const [coworkingData, setcoworkingData] = useState([])
  const fetchData = () => { 
    axios
    .get(
       `http://localhost:5000/api/DCoworking`).then(response => {
        console.log(response)
        setcoworkingData(response.data)
       })}

  useEffect(() => {
   fetchData();
   return () => {
    setcoworkingData({});
   };
  },[]);

  if(props.userAuth.loggedIn==false )
  return(
      <Redirect to="/login"></Redirect>
     )
  return (
    <div className={classes.main}>

        <h2 className={classes.head}>Coworkings</h2>
            
        <Grid container >
    
        <Grid item xs={4} sm={4}>
            </Grid>
            <Grid item xs={4}>
           <Link to="/addNewCoworking">
            <Button
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.button}>
           + Create new ad
          </Button>
          </Link>
            </Grid>
            </Grid>
            {
              coworkingData.map((data)=>
              {
return(
<Grid  key={data.id} container >
        <Grid item xs={3} sm={3}>
        </Grid>
        <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Grid container>
        <Grid item xs={7} >
      
        <img  className={classes.img} width="320" height="270"  src={`data:image/jpeg;base64,${data.image}`} />

        </Grid>
        <Grid item xs={5} >

        <h4 className={classes.about}>Coworking Name</h4>
        <h1 >{data.name}</h1>
        <h4  className={classes.about}>Coworking Adress</h4>
        <h1 >{data.adress}</h1>
        <Link to={`/coworkingDetail/${data.id}`} className="btn btn-primary" >Details</Link>
        </Grid>
        
        </Grid>
        <Grid item xs={12}>
          </Grid>
        </Paper>
        </Grid>
      
      </Grid>

)
              })
              }

    </div>
  );
}

export default Coworkings;