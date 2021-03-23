import React,{useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Header from '../Header/Header';
import Section from '../Sections/Section'
import Footer from '../Footer/Footer'
const SwitchBar=()=> {  
    const [loggedIn, setLoggedIn] = useState(false)
    const [loggedAdmin, setloggedAdmin] = useState(false)
    const [Login, setUserLogin] = useState(null)
    const [Lang, SetLang]=useState("en")

        return(
            <Router>
            <div>
            <Header userAuth={{ loggedIn, setLoggedIn}} userLogin={{Login, setUserLogin}} Local={{Lang,SetLang}}  Admin={{loggedAdmin, setloggedAdmin}}/>
            <Section userAuth={{ loggedIn, setLoggedIn}}userLogin={{Login, setUserLogin}} Local={{Lang,SetLang}} Admin={{loggedAdmin, setloggedAdmin}}/>
                <Footer/>
            </div>  
            </Router>      
        )
    
}
export default SwitchBar