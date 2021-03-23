import React,{useState}  from "react"
import {Route} from 'react-router-dom'
import MainPage from "../MainPage/MainPage"
import  Login from "../LoginPage/Login"
import  Logout from "../LoginPage/Logout"
import  Registration from "../RegistrationPage/Registration"
import  Coworkings from "../CoworkingsPage/Сoworkings"
import  CoworkingDetail from "../CoworkingsPage/CoworkingDetail"
import AddNewCoworking from "../AddNewCoworking/AddNewCoworking"


const  Section=(props)=> {

        return(
            <section>
                <Route exact path="/"  render={()=><MainPage  userAuth={props.userAuth} Local={props.Local} Admin={props.Admin}/>}/>
                <Route  path="/coworkings"  render={()=><Coworkings userAuth={props.userAuth} Local={props.Local} Admin={props.Admin} />}/>
                <Route  path="/addNewCoworking"  render={()=><AddNewCoworking userAuth={props.userAuth} Local={props.Local} Admin={props.Admin} />}/>
                <Route  path="/login"  render={()=><Login  userAuth={props.userAuth} Local={props.Local} Admin={props.Admin} />}/>
                <Route  path="/registration"  render={()=><Registration userAuth={props.userAuth} Local={props.Local} Admin={props.Admin} />}/>
                <Route  path="/logout"  render={()=><Logout userAuth={props.userAuth} Local={props.Local} Admin={props.Admin} />}/>
                <Route  path="/coworkingDetail/:id"  component={CoworkingDetail} />
                

            </section>
          
        )    
    }
export default Section