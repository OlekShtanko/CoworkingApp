import React from "react"
import { Redirect } from "react-router-dom"

const Logout=(props)=>{
props.userAuth.setLoggedIn(props.userAuth.loggedIn=false)
localStorage.setItem('token', null)
return(
 <Redirect to="/"></Redirect>
)
    }

export default Logout