import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Secure from "../../../img/secure.svg"
import Diamond from "../../../img/diamond.svg"
import Fast from "../../../img/fast.svg"
import Finger from "../../../img/finger.svg"
import Map from "../../../img/map.svg"
import Window from "../../../img/window.svg"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin:theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  head:{
    textAlign:'center',
    fontSize:"32px",
  },
  img:{
   
    maxWidth:"80%"
  },
  about:{
    textAlign:'center',
    fontSize:"24px",
  },
  main:{
    background:"white"
  }
}));
function AboutUs() {
  const classes = useStyles();
  
  return (
    <div className={classes.main}>

        <h2 className={classes.head}>About Us</h2>
        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
        <Grid container >
        <Grid item xs={3} sm={3}>
          
        </Grid>
        <Grid item xs={2}>
        <Paper className={classes.paper}>
        <img src={Secure} className={classes.img} />
        <h2 className={classes.about}>Security</h2>
        </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}> 
          <img src={Fast} className={classes.img} />
        <h2 className={classes.about}>Fast work</h2>
        </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}> 
          <img src={Window} className={classes.img} />
        <h2 className={classes.about}>Easy to work</h2>
        </Paper>
        </Grid>
        <Grid item xs={3} sm={3}>
    
        </Grid>
        <Grid item xs={3} sm={3}>
        
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <img src={Diamond} className={classes.img} />
        <h2 className={classes.about}>Best offers</h2>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <img src={Finger} className={classes.img} />
        <h2 className={classes.about}>Convenient interface</h2>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
          <img src={Map} className={classes.img} />
        <h2 className={classes.about}>Find on map</h2>
          </Paper>
        </Grid>
        <Grid item xs={3} sm={3}>

        </Grid>
      </Grid>
    </ReactCSSTransitionGroup>
    </div>
  );
}

export default AboutUs;