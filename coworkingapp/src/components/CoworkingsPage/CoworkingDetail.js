import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from "axios"
import {TableContainer,Table,TableHead, TableRow, TableCell,TableBody, ButtonGroup,Container, Box,TextField,FormControlLabel,RadioGroup,Radio, getLuminance} from "@material-ui/core"

import DateTimePicker from 'react-datetime-picker';


const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8),
    padding:theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
  header:{
  textAlign:"center",
  },
  img:{
    display: "block",
    marginLeft:"auto",
    marginRight: "auto",
    maxWidth:"100%"
  },
  about:{
    textAlign:'center',
    fontWeight:"bold",
  },
  exist:{
    fontSize:"10px",
    textAlign:'center',
    color:"red"
  },
  grid:{
    alignItems: 'center',
  },
  btn:{
    display: "flex",
    justifyContent:"center"
  },
  func:{
    paddingLeft:theme.spacing(1),
    paddingRight:theme.spacing(1),
  },
  time:{
    fontSize:"20px",
    textAlign:'center',
    fontWeight:"bold",
    paddingLeft:theme.spacing(1),
    paddingRight:theme.spacing(1),
  },
  btnCount:{
    margin: theme.spacing(2),
  },
  countText:{
    fontWeight:"bold",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },


}));

const CoworkingDetail=({userAuth,userLogin,...props})=>{
  const classes = useStyles();
  const [valueStart, onChangeStart] = useState(new Date());
  const [valueFinish, onChangeFinish] = useState(new Date());
  const [totalCount, settotalCount] = useState(0);
  const [totalCountHours, settotalCountHours] = useState(0);
  const [coworkingFunctions, setcoworkingFunctions] = useState([{
    functionName:"",
    image:null,
    price:0
   },
  {
    functionName:"",
    image:null,
    price:0
  },
  {
    functionName:"",
    image:null,
    price:0
  },
  {
    functionName:"",
    image:null,
    price:0
  },
  {
    functionName:"",
    image:null,
    price:0
  },
  {
    functionName:null,
    image:null,
    price:0
  }],
  )
  const [coworkingInfo, setcoworkingInfo] = useState({
    name:"",
    ownerId:0,
    adress:"",
    info:"",
    image:"",
    defaultPrice:0,
  })
  const [countFunction, setcountFunction] = useState({
    tea:0,
    coffe:0,
    table:0,
    chair:0,
    sofa:0,
    cola:0,
  })
  const [timeCheck, settimeCheck] = useState([])
  const [coworkingFunctionInfo, setcoworkingFunctionInfo] = useState({
    coworkingId: 0,
    isChair: false,
    isCoffee: false,
    isCola: false,
    isSofa: false,
    isTable: false,
    isTea: false,
    priceChair: 0,
    priceCoffee: 0,
    priceCola: 0,
    priceSofa: 0,
    priceTable: 0,
    priceTea: 0,
  })
  const getCoworkingFunctionInfo=()=>
  {
    axios
    .get(
       `http://localhost:5000/api/DCoworkingFunction/${props.match.params.id}`).then(response => {
        setcoworkingFunctionInfo(response.data)
        console.log(response.data)
       })
}
const getFunctions = () => { 
  axios
  .get(
     `http://localhost:5000/api/DFunction`).then(response => {
      setcoworkingFunctions(response.data)
     })}

const getCoworkingInfo=()=>
{
  axios
  .get(
     `http://localhost:5000/api/DCoworking/${props.match.params.id}`).then(response => {
      setcoworkingInfo(response.data)

     })
}
const getTimeTable=()=>
{
  axios
  .get(
     `http://localhost:5000/api/DCoworkingOrder/Except/${props.match.params.id}`).then(response => {
      settimeCheck(response.data)

     })
}

  useEffect(() => {
    getFunctions()
    getCoworkingFunctionInfo()
    getCoworkingInfo()
    getTimeTable()
  },[props.match.params.id]);


  const  createOrder = () =>{
    var count=0;
  timeCheck.forEach(element => {
    if((parseInt(element.timeStart)<=valueStart.getTime() && parseInt(element.timeFinish)>=valueStart.getTime())|| (parseInt(element.timeStart)<=valueFinish.getTime() && parseInt(element.timeFinish)>=valueFinish .getTime()))
    {
      count++;
    }
  });
  if(count==0)
  {
    axios
    .post(
       `http://localhost:5000/api/DCoworkingOrder`,{ 
         "coworkingId":parseInt(props.match.params.id),
        "userId":parseInt(coworkingInfo.ownerId),
        "timeStart":(valueStart.getTime()).toString(),
        "timeFinish":(valueFinish.getTime()).toString(),
       "totalCost":parseFloat(totalCount+  ((selectedTime)/3600000)*coworkingInfo.defaultPrice),
      }).then(response => {
        console.log(response)
        console.log(count)
       })
      }
    }
  const showdata=()=>{
    console.log(timeCheck)
    console.log(valueStart.getTime())
    
  }

  const AddTea =() =>{
    if(coworkingFunctionInfo.isTea==true)
    {
    setcountFunction({
      ...countFunction,
      tea:countFunction.tea+1
    })
    settotalCount(
      totalCount+coworkingFunctionInfo.priceTea
    )
  }
}
  const ReduceTea =() =>{
    if(coworkingFunctionInfo.isTea==true)
    {
    if(countFunction.tea>0)
    {
      setcountFunction({
        ...countFunction,
        tea:countFunction.tea-1
      })
      settotalCount(
        totalCount-coworkingFunctionInfo.priceTea
      )
    }
    if(countFunction.tea<0)
    {
      setcountFunction({
        ...countFunction,
        tea:0
      })}
    }
  }
  const AddCoffe =() =>{
    if(coworkingFunctionInfo.isCoffee==true)
    {
    setcountFunction({
      ...countFunction,
      coffe:countFunction.coffe+1
    })
    settotalCount(
      totalCount+coworkingFunctionInfo.priceCoffee
    )
  }
}
  const ReduceCoffe =() =>{
    if(coworkingFunctionInfo.isCoffee==true)
    {
    if(countFunction.coffe>0)
    {
      setcountFunction({
        ...countFunction,
        coffe:countFunction.coffe-1
      })
      settotalCount(
        totalCount-coworkingFunctionInfo.priceCoffee
      )
    }
    if(countFunction.coffe<0)
    {
      setcountFunction({
        ...countFunction,
        coffe:0
      })}
    
  }
}
const AddTable =() =>{
  if(coworkingFunctionInfo.isTable==true)
  {
  setcountFunction({
    ...countFunction,
    table:countFunction.table+1
  }
  )
  settotalCount(
    totalCount+coworkingFunctionInfo.priceTable
  )
}
}
const ReduceTable =() =>{
  if(coworkingFunctionInfo.isTable==true)
  {
  if(countFunction.table>0)
  {
    setcountFunction({
      ...countFunction,
      table:countFunction.table-1
    })
    settotalCount(
      totalCount-coworkingFunctionInfo.priceTable
    )
  }
  if(countFunction.table<0)
  {
    setcountFunction({
      ...countFunction,
     table:0
    })} 
}
}
const AddChair =() =>{
  if(coworkingFunctionInfo.isChair==true)
  {
  setcountFunction({
    ...countFunction,
    chair:countFunction.chair+1
  })
  settotalCount(
  totalCount+coworkingFunctionInfo.priceChair
  )
}
}
const ReduceChair =() =>{
  if(coworkingFunctionInfo.isChair==true)
  {
  if(countFunction.chair>0)
  {
    setcountFunction({
      ...countFunction,
      chair:countFunction.chair-1
    })
    settotalCount(
      totalCount-coworkingFunctionInfo.priceChair
    )
  }
  if(countFunction.chair<0)
  {
    setcountFunction({
      ...countFunction,
     chair:0
    })}
}
}
const AddSofa =() =>{
  if(coworkingFunctionInfo.isSofa==true)
  {
  setcountFunction({
    ...countFunction,
    sofa:countFunction.sofa+1
  })
  settotalCount(
    totalCount+coworkingFunctionInfo.priceSofa
  )
}
}
const ReduceSofa =() =>{
  if(coworkingFunctionInfo.isSofa==true)
  {
  if(countFunction.sofa>0)
  {
    setcountFunction({
      ...countFunction,
      sofa:countFunction.sofa-1
    })
    settotalCount(
      totalCount-coworkingFunctionInfo.priceSofa
    )
  }
  if(countFunction.sofa<0)
  {
    setcountFunction({
      ...countFunction,
     sofa:0
    })}
  
}
}
const AddCola =() =>{
  if(coworkingFunctionInfo.isCola==true)
  {
  setcountFunction({
    ...countFunction,
    cola:countFunction.cola+1
  })
  settotalCount(
    totalCount+coworkingFunctionInfo.priceCola
  )
}
}
const ReduceCola =() =>{
  if(coworkingFunctionInfo.isCola==true)
  {
  if(countFunction.cola>0)
  {
    setcountFunction({
      ...countFunction,
      cola:countFunction.cola-1
    })
    settotalCount(
      totalCount-coworkingFunctionInfo.priceCola
    )
  }
  if(countFunction.cola<0)
  {
    setcountFunction({
      ...countFunction,
     cola:0
    })}
}
}
const selectedTime=valueFinish-valueStart

 const selectTimeStart= (newDate)=>{
  onChangeStart(newDate)
  
 }
 const selectTimeFinish= (newDate)=>{
  onChangeFinish(newDate)

 }


  return (
    <div>
  <Grid   container >
        <Grid item xs={3} sm={3}>
        </Grid>
        <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Grid container>

        <Grid item xs={8} >
     
        <h2 className={classes.about} >Coworking Name</h2>
        <h1 className={classes.header}>{coworkingInfo.name}</h1>
        <img  className={classes.img} width="550" height="400"  src={`data:image/jpeg;base64,${coworkingInfo.image}`} />
        </Grid>
        <Grid item xs={4} >
     <h2 className={classes.about}>Coworking Adress</h2>
     <h1 className={classes.header}>{coworkingInfo.adress}</h1>
     <h2 className={classes.about}>Coworking Info</h2>
     <h4  className={classes.header}>{coworkingInfo.info}</h4>
     <h2 className={classes.about}>Coworking Price/hour</h2>
     <h4  className={classes.header}>{coworkingInfo.defaultPrice}</h4>
     </Grid>
        </Grid>
        <Grid xs={3}>
        </Grid>

        <Grid xs={6}>
          <h2 className={classes.about}>Select Features you want</h2>
          </Grid> 
          
          <Grid item xs={12} >
          <Grid container>
  
          <Grid   item xs={4} className={classes.func}><h4 className={classes.about}>{coworkingFunctions[0].functionName}</h4>
          <img  className={classes.img} width="45" height="45"  src={`data:image/jpeg;base64,${coworkingFunctions[0].image}`} />
                  <h5 className={classes.about}>Price/1</h5>
                  <h5 className={classes.header}>{coworkingFunctionInfo.priceTea}</h5>
                  <h5 className={classes.about}>Choose count</h5>
                   <ButtonGroup  className={ classes.btn} size="small" aria-label="small outlined button group">
        <Button onClick={AddTea}>+</Button> 
        <Button disabled>{countFunction.tea}</Button>
        <Button onClick={ReduceTea}>-</Button>
      </ButtonGroup>
      <p className={classes.exist}>{coworkingFunctionInfo.isTea?"": 'not exist in this coworking'}</p>
      </Grid>     


      <Grid   item xs={4} className={classes.func}><h4 className={classes.about}>{coworkingFunctions[1].functionName}</h4>
          <img  className={classes.img} width="45" height="45"  src={`data:image/jpeg;base64,${coworkingFunctions[1].image}`} />
                  <h5 className={classes.about}>Price/1</h5>
                  <h5 className={classes.header}>{coworkingFunctionInfo.priceCoffee}</h5>
                  <h5 className={classes.about}>Choose count</h5>
                   <ButtonGroup  className={ classes.btn} size="small" aria-label="small outlined button group">
        <Button onClick={AddCoffe}>+</Button> 
        <Button disabled>{countFunction.coffe}</Button>
        <Button onClick={ReduceCoffe}>-</Button>
      </ButtonGroup>
      <p className={classes.exist}>{coworkingFunctionInfo.isCoffee? '': 'not exist in this coworking'}</p>
      </Grid>  
      
      
      <Grid   item xs={4} className={classes.func}><h4 className={classes.about}>{coworkingFunctions[2].functionName}</h4>
          <img  className={classes.img} width="45" height="45"  src={`data:image/jpeg;base64,${coworkingFunctions[2].image}`} />
                  <h5 className={classes.about}>Price/1</h5>
                  <h5 className={classes.header}>{coworkingFunctionInfo.priceTable}</h5>
                  <h5 className={classes.about}>Choose count</h5>
                   <ButtonGroup  className={ classes.btn} size="small" aria-label="small outlined button group">
        <Button onClick={AddTable} >+</Button> 
        <Button disabled>{countFunction.table}</Button>
        <Button onClick={ReduceTable}>-</Button>
      </ButtonGroup>
      <p className={classes.exist}>{coworkingFunctionInfo.isTable? "": 'not exist in this coworking'}</p>
      </Grid>  

  
      </Grid>
      <Grid item xs={12} >
         <Grid container>
          <Grid   item xs={4} className={classes.func}><h4 className={classes.about}>{coworkingFunctions[3].functionName}</h4>
          <img  className={classes.img} width="45" height="45"  src={`data:image/jpeg;base64,${coworkingFunctions[3].image}`} />
                  <h5 className={classes.about}>Price/1</h5>
                  <h5 className={classes.header}>{coworkingFunctionInfo.priceChair}</h5>
                  <h5 className={classes.about}>Choose count</h5>
                   <ButtonGroup  className={ classes.btn} size="small" aria-label="small outlined button group">
        <Button onClick={AddChair} >+</Button> 
        <Button disabled>{countFunction.chair}</Button>
        <Button onClick={ReduceChair}>-</Button>
      </ButtonGroup>
      <p className={classes.exist}>{coworkingFunctionInfo.isChair?"": 'not exist in this coworking'}</p>
      </Grid>  

      <Grid   item xs={4} className={classes.func}><h4 className={classes.about}>{coworkingFunctions[4].functionName}</h4>
          <img  className={classes.img} width="45" height="45"  src={`data:image/jpeg;base64,${coworkingFunctions[4].image}`} />
                  <h5 className={classes.about}>Price/1</h5>
                  <h5 className={classes.header}>{coworkingFunctionInfo.priceSofa}</h5>
                  <h5 className={classes.about}>Choose count</h5>
                   <ButtonGroup  className={ classes.btn} size="small" aria-label="small outlined button group">
        <Button onClick={AddSofa} >+</Button> 
        <Button disabled>{countFunction.sofa}</Button>
        <Button onClick={ReduceSofa}>-</Button>
      </ButtonGroup>
      <p className={classes.exist}>{coworkingFunctionInfo.isSofa? "": 'not exist in this coworking'}</p>
      </Grid>  

      <Grid   item xs={4} className={classes.func}><h4 className={classes.about}>{coworkingFunctions[5].functionName}</h4>
          <img  className={classes.img} width="45" height="45"  src={`data:image/jpeg;base64,${coworkingFunctions[5].image}`} />
                  <h5 className={classes.about}>Price/1</h5>
                  <h5 className={classes.header}>{coworkingFunctionInfo.priceCola}</h5>
                  <h5 className={classes.about}>Choose count</h5>
                   <ButtonGroup  className={ classes.btn} size="small" aria-label="small outlined button group">
        <Button onClick={AddCola} >+</Button> 
        <Button disabled>{countFunction.cola}</Button>
        <Button onClick={ReduceCola}>-</Button>
      </ButtonGroup>
      <p className={classes.exist}>{coworkingFunctionInfo.isCola? "": 'not exist in this coworking'}</p>
      </Grid>  
      </Grid>
      </Grid>
      </Grid>
      <Grid xs={12} >
      <Grid container>
      <Grid xs={6} >
          <h2 className={classes.time}>Select Start Time</h2>
          <DateTimePicker 
            className={classes.func}
        onChange={selectTimeStart}
        value={valueStart}
      />
      </Grid>
      <Grid xs={6} >
             <h2 className={classes.time}>Select Finish Time</h2>
          <DateTimePicker
          className={classes.func}
        onChange={selectTimeFinish}

        value={valueFinish}
      />
       </Grid>
     </Grid>
          </Grid> 
          <Grid xs={12} >
      <Grid container>
      <h5 className={classes.countText}>Total price : { ((selectedTime)/3600000)*coworkingInfo.defaultPrice>0?parseInt(totalCount+  ((selectedTime)/3600000)*coworkingInfo.defaultPrice):'Chose corect time'} грн</h5>
        </Grid>
        </Grid>
        <Grid xs={12} >
        <Button variant="contained" color="primary" onClick={createOrder}>Create Order</Button>
        </Grid>
        <Grid xs={3}>
        </Grid>
        </Paper>
        </Grid>
        <Grid>
        
        </Grid>
      </Grid>

    </div>
  );
}
export default CoworkingDetail;