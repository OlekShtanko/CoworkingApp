import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from '../../../img/coworking1.svg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:"#31373e",
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  HeadBoxText:{
    padding: theme.spacing(2),
    textAlign:'center',
  fontSize:"42px",
  },
  img:{
    marginLeft:theme.spacing(6),
    maxWidth:"100%"
  }
}));
function Tagline() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <hr style={{size:"30px",color:"#31373e"}}></hr>
    <Grid container >
      <Grid item xs={2} sm={2}>
        
      </Grid>
      <Grid item xs={8} sm={8}>
        <Paper>
      <Grid container >
      <Grid item xs={6} >
          <p className={classes.HeadBoxText}>Workify -
The best service for renting and finding a comfortable place to work in a team. Rent out and look for coworking spaces with us</p>
        </Grid>
        <Grid item xs={6} >
         <img src={Image} className={classes.img} />
        </Grid>
        </Grid>
        </Paper>
      </Grid>

      <Grid item xs={2} sm={2}>
      </Grid>
    </Grid>
  </div>
  );
}

export default Tagline;