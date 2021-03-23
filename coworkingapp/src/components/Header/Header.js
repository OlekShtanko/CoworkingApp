import React,{ useState } from "react"
import Nav from "./../Navigation/Nav"
import { makeStyles } from '@material-ui/core/styles';
import {withStyles} from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  back:
  {
  background:'#31373e'
  },
}));
const  Header=(props)=> {
  const classes = useStyles();
return(
  <div>
     <header className={classes.back}>
     <Nav userAuth={props.userAuth} Local={props.Local} Admin={props.Admin}/>
     </header>
  </div>
)
    }
    export default Header;