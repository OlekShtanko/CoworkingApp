import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from "axios"
import {TableContainer,Table,TableHead, TableRow, TableCell,TableBody,Container, Box,TextField,FormControlLabel,RadioGroup,Radio, getLuminance} from "@material-ui/core"
import ButtonGroup from "@material-ui/core/ButtonGroup";

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
 
  about:{
    textAlign:'center',
    fontSize:"24px",
  },
  main:{
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    background:"white"
  },
  button:{
    padding: theme.spacing(3),
    
  },
  text:{
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  img:{
    maxWidth:"100%"
  },
  price:{
    margin:0
  },

}));
function AddNewCoworking() {
  const classes = useStyles();
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
    functionName:"",
    image:null,
    price:0
  }],
  )
  const [priceTea, setpriceTea] = useState({
    text:"Add",
    isTea:false,
    cost:0,
  })
  const [priceCoffee, setpriceCoffee] = useState({
    text:"Add",
    isCoffee:false,
    cost:0,
  })
  const [priceTable, setpriceTable] = useState({
    text:"Add",
    isTable:false,
    cost:0,
  })
  const [priceChair, setpriceChair] = useState({
    text:"Add",
    isChair:false,
    cost:0,
  })
  const [priceSofa, setpriceSofa] = useState({
    text:"Add",
    isSofa:false,
    cost:0, 
  })
  const [priceCola, setpriceCola] = useState({
    text:"Add",
    isCola:false,
    cost:0, 
  })

 
 
  const [coworkingData, setcoworkingData] = useState({
      name:"",
      ownerId:0,
      lng:0,
      lat:0,
      adress:"",
      info:"",
      image:"iVBORw0KGgoAAAANSUhEUgAAAS4AAACnCAMAAACYVkHVAAAAJ1BMVEX09PTa2trc3Nz29vbj4+Pg4ODv7+/Y2Njy8vLt7e3q6urm5ubn5+eHk7pVAAAEMklEQVR4nO2ci46jMAxFSZw3/P/3ru0QFtoppSPtUsn3rDSLmFaCIycxjplpAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxzSLj7Ir4b8UPdU6lL8MvdF/TtiKjSQnQ5O+cClbsv6OvQEddDKrEo7xTPuAhdeySUivgqqc5xmBq6+MfdF/hVSFxRSYuEVGY93j/ocunuS/wCxujjsTeLKOe3aFJlfMKHJfDJXK2vjUVNldpCl7SLJvXlY2hJBmiSs4vlXGJM596tpvxel+OQSrt0S05Gk7aKGuhjT91sAbUeSUhNx7SUIv8i3nXFt8KiJKTyELVN5jz2ZhY1PSfwNMnk5S0mEhT6JL4be1kjqhZN4Pkj5dELURO5xeBopPnvbJXV1CKz+ekzIesSu8mirjrCSseemprerXmUOCDdbFAXJwWsK3ZR178VOXXdL4125jGJrjBUlbKWHd4QZSXYn7j3Hv4fPSn48HYpcHTtl8ZkJbxUlx/B5a+yJWcrVuZ9muXOR1LgfosZXVXutkLXNahwQp9HKfmQ20PXT4igsB6LrvgZIZrSJXO9H7VR0RXW1OBSRkHr5GdHVxBdayIgh+GTO2dhwZSuadHb7cerrpKuMpnTlTLPXm3U/USXrJZZGf+/pE7WdBWpR8xHXb6vkMctjWe8QV381Ohz/FlXCKfpg0ldUl5Yl8ajrkWWvvkkvizq4kyAh1xfGg+65t4XMUPXHi0l57407nR5N61Pkg+Zvl//GdXFSyPfb9PDva5RpiB/mO99f1Cyq0sfrHty+l4X/6ZuFWuTuki2GPu24WEw1j531d1glNJW5QefmvvOtkldum2oh4ep3nddx+abntDyfGdVF1GT7F3n9aMu30ppx4nLz9p2UihY1aVL41ohfEhTnxKHv8/fFMzqKnLDywVduz0Q0iK/RV0TbSbe6OLPbNGl+yA2dUlPiS6Np7rysYuEik1dWrLqj0Gnuh57biiZHIxEC1vSx6DXurzLz92oNVdz5cHRVyIJ1Ul0/dSMSnMzqEtmbacVwidd+cyWtv4a1CUVQu2oOejiTCGUIM3O2buXjc4GdfFTo1QIy0N0xUaFmqajy0sdFnVJhdCnH8qD8irLItu2L1tsLOpqWvKS9F51ScEwbsOP0nzSj2RRl75YMG+6qne7zdly2rRrUBcvjU4rhCO6fDv00Z991aIubbmMI7okni7fvkVda1/J0PXcS3/yVXu6aJr1DdjwcUuJSV3T1NzY3IGuCyS3vbf4WcOSSV2l9N0x+Rnef3yHxUdsJm4t4D58grVmyw6F0Goqr2r0J/QvGNM19TenPnW1YU1Xz7Sg6yL9di+/5PII/kwCeMsv/1JLmSy+aQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjiD11yHkXgwpzGAAAAAElFTkSuQmCC",
      defaultPrice:0,
  })
  const getFunctions = () => { 
    axios
    .get(
       `http://localhost:5000/api/DFunction`).then(response => {
        setcoworkingFunctions(response.data)
       })}



  useEffect(() => {
   getFunctions();
  },[]);
  const addCoworking=(e)=>{
      e.preventDefault();
      axios
      .post(
        `http://localhost:5000/api/DCoworking`,{
          "name":coworkingData.name,
          "ownerId":parseInt(localStorage.getItem('id')),
          "lng":coworkingData.lng,
           "lat":coworkingData.lat,
           "adress":coworkingData.adress,
           "info":coworkingData.info,
          "image":coworkingData.image,
          "defaultPrice":coworkingData.defaultPrice
        }).then(response => {
         console.log(response)
         axios
         .post(
           `http://localhost:5000/api/DCoworkingFunction`,{
             "coworkingId":parseInt(response.data.id),
             "isTea":priceTea.isTea,
              "priceTea":parseInt(priceTea.cost),
              "isCoffee":priceCoffee.isCoffee,
              "priceCoffee":parseInt(priceCoffee.cost),
              "isTable":priceTable.isTable,
              "priceTable":parseInt(priceTable.cost),
              "isChair":priceChair.isChair,
              "priceChair":parseInt(priceChair.cost),
              "isSofa":priceSofa.isSofa,
              "priceSofa":parseInt(priceSofa.cost),
              "isCola":priceCola.isCola,
              "priceCola":parseInt(priceCola.cost),
           }).then(response => {
            console.log(response)
          
           })
        })
    }
  const handleReaderLoader=(readerEvt)=>{
    let binaryString = readerEvt.target.result
    setcoworkingData({
      ...coworkingData,
      image:btoa(binaryString)
    })
}
 const onChange=(e)=>{
  let file = e.target.files[0]
  if(file){
    const reader = new FileReader();
    reader.onload = handleReaderLoader.bind(this)
    reader.readAsBinaryString(file)
  }
}

const handleChangeName = (event) => {
  setcoworkingData({
    ...coworkingData,
    name:event.target.value,
  });
};
const handleChangeAdress = (event) => {
  setcoworkingData({
    ...coworkingData,
    adress:event.target.value,
  });
};
const handleChangeInfo = (event) => {
  setcoworkingData({
    ...coworkingData,
    info:event.target.value,
  });
};
const handleChangedefaultPrice = (event) => {
  setcoworkingData({
    ...coworkingData,
    defaultPrice:event.target.value,
  });
};

const OnButtonClickAddTea =() =>{
  if(priceTea.text=="Add"){
  setpriceTea({
    ...priceTea,
    text:"Remove",
    isTea:true})
 }
  if(priceTea.text=="Remove"){
    setpriceTea({
      ...priceTea,
      text:"Add",
      isTea:false})
   }
}
const OnButtonClickAddPriceTea =() =>{
  setpriceTea({
    ...priceTea,
    cost:priceTea.cost+1
    
  })
}
const OnButtonClickReducePriceTea =() =>{
  if(priceTea.cost>0)
  {
  setpriceTea({
    ...priceTea,
    cost:priceTea.cost-1
  })}
  if(priceTea.cost<0)
  {
  setpriceTea({
    ...priceTea,
    cost:0
  })}
}

const OnButtonClickAddCoffee =() =>{
  if(priceCoffee.text=="Add"){
  setpriceCoffee({
    ...priceCoffee,
    text:"Remove",
    isCoffee:true})
 }
  if(priceCoffee.text=="Remove"){
    setpriceCoffee({
      ...priceCoffee,
      text:"Add",
      isCoffee:false})
   }
}
const OnButtonClickAddPriceCoffee =() =>{
  setpriceCoffee({
    ...priceCoffee,
    cost:priceCoffee.cost+1
    
  })
}
const OnButtonClickReducePriceCoffee =() =>{
  if(priceCoffee.cost>0)
  {
  setpriceCoffee({
    ...priceCoffee,
    cost:priceCoffee.cost-1
  })}
  if(priceCoffee.cost<0)
  {
  setpriceCoffee({
    ...priceCoffee,
    cost:0
  })}
}

const OnButtonClickAddTable =() =>{
  if(priceTable.text=="Add"){
  setpriceTable({
    ...priceTable,
    text:"Remove",
    isTable:true})
 }
  if(priceTable.text=="Remove"){
    setpriceTable({
      ...priceTable,
      text:"Add",
      isTable:false})
   }
}
const OnButtonClickAddPriceTable =() =>{
  setpriceTable({
    ...priceTable,
    cost:priceTable.cost+1
    
  })
}
const OnButtonClickReducePriceTable =() =>{
  if(priceTable.cost>0)
  {
  setpriceTable({
    ...priceTable,
    cost:priceTable.cost-1
  })}
  if(priceTable.cost<0)
  {
  setpriceTable({
    ...priceTable,
    cost:0
  })}
}
const OnButtonClickAddChair =() =>{
  if(priceChair.text=="Add"){
  setpriceChair({
    ...priceChair,
    text:"Remove",
    isChair:true})
 }
  if(priceChair.text=="Remove"){
    setpriceChair({
      ...priceChair,
      text:"Add",
      isChair:false})
   }
}
const OnButtonClickAddPriceChair =() =>{
  setpriceChair({
    ...priceChair,
    cost:priceChair.cost+1
    
  })
}
const OnButtonClickReducePriceChair =() =>{
  if(priceChair.cost>0)
  {
  setpriceChair({
    ...priceChair,
    cost:priceChair.cost-1
  })}
  if(priceChair.cost<0)
  {
  setpriceChair({
    ...priceChair,
    cost:0
  })}
}
const OnButtonClickAddSofa =() =>{
  if(priceSofa.text=="Add"){
  setpriceSofa({
    ...priceSofa,
    text:"Remove",
    isSofa:true})
 }
  if(priceSofa.text=="Remove"){
    setpriceSofa({
      ...priceSofa,
      text:"Add",
      isSofa:false})
   }
}
const OnButtonClickAddPriceSofa =() =>{
  setpriceSofa({
    ...priceSofa,
    cost:priceSofa.cost+1
    
  })
}
const OnButtonClickReducePriceSofa =() =>{
  if(priceSofa.cost>0)
  {
  setpriceSofa({
    ...priceSofa,
    cost:priceSofa.cost-1
  })}
  if(priceSofa.cost<0)
  {
  setpriceSofa({
    ...priceSofa,
    cost:0
  })}
}
const OnButtonClickAddCola =() =>{
  if(priceCola.text=="Add"){
  setpriceCola({
    ...priceCola,
    text:"Remove",
    isCola:true})
 }
  if(priceCola.text=="Remove"){
    setpriceCola({
      ...priceCola,
      text:"Add",
      isCola:false})
   }
}
const OnButtonClickAddPriceCola =() =>{
  setpriceCola({
    ...priceCola,
    cost:priceCola.cost+1
    
  })
}
const OnButtonClickReducePriceCola =() =>{
  if(priceCola.cost>0)
  {
  setpriceCola({
    ...priceCola,
    cost:priceCola.cost-1
  })}
  if(priceCola.cost<0)
  {
  setpriceCola({
    ...priceCola,
    cost:0
  })}
}

  return (
    <div className={classes.main}>
 <div className={classes.root}>
   
      <Grid container >
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Grid item xs={12} className={classes.main}>
            <h2>Ad creating</h2>
            </Grid>
            <Grid container >
            <Grid item xs={4}>
            <h2>Add photo</h2>
            <img className={classes.img} width="300" height="350" src={`data:image/jpeg;base64,${coworkingData.image}`} />
        <form >
      <div className="row justify-content-center mb-2">
           <input type="file" id="avatar"  accept="image/png, image/jpeg" 
            onChange={(e)=>onChange(e)} />
           
       </div>
  </form>
            </Grid>
            <Grid item xs={4}>
            <h2>Add description</h2>
            <TextField
            className={classes.text}
            fullWidth
          id="outlined"
          label="Name"
          multiline
          rowsMax={4}
          variant="outlined"
          onChange={handleChangeName}
        />
          <TextField
           className={classes.text}
          fullWidth
          id="outlined"
          label="Adress"
          multiline
          rowsMax={4}
          variant="outlined"
          onChange={handleChangeAdress}
        />
            <TextField
             className={classes.text}
            fullWidth
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={10}
          variant="outlined"
          onChange={handleChangeInfo}
        />
        <TextField
        fullWidth
          id="outlined-number"
          label="Cost per hour"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChangedefaultPrice}
        />
            </Grid>
            <Grid item xs={4}>
            <h2>Select features</h2>
            <Grid container >
          
                  <Grid   item xs={4}><h4>{coworkingFunctions[0].functionName}</h4>
                  <img  className={classes.img} width="45" height="45"  src={`data:image/jpeg;base64,${coworkingFunctions[0].image}`} />
                  <p className={classes.price}>Price/1</p>
                   <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={OnButtonClickAddPriceTea}>+</Button>
        <Button disabled>{priceTea.cost}</Button>
        <Button onClick={OnButtonClickReducePriceTea}>-</Button>
      </ButtonGroup>
      <Button onClick={OnButtonClickAddTea}>{priceTea.text}</Button>
      </Grid>


      <Grid  item xs={4}><h4>{coworkingFunctions[1].functionName}</h4>
      <img  className={classes.img} width="45" height="45"  src={`data:image/jpeg;base64,${coworkingFunctions[1].image}`} />
      <p className={classes.price}>Price/1</p>
                   <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={OnButtonClickAddPriceCoffee}>+</Button>
        <Button disabled>{priceCoffee.cost}</Button>
        <Button  onClick={OnButtonClickReducePriceCoffee} >-</Button>
      </ButtonGroup>
      <Button onClick={OnButtonClickAddCoffee}>{priceCoffee.text}</Button>
      </Grid>

      <Grid item xs={4}><h4>{coworkingFunctions[2].functionName}</h4>
      <img  className={classes.img} width="45" height="45"  src={`data:image/jpeg;base64,${coworkingFunctions[2].image}`} />
      <p className={classes.price}>Price/1</p>
                   <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={OnButtonClickAddPriceTable}>+</Button>
        <Button disabled>{priceTable.cost}</Button>
        <Button onClick={OnButtonClickReducePriceTable} >-</Button>
      </ButtonGroup>
      <Button onClick={OnButtonClickAddTable}>{priceTable.text}</Button>
      </Grid>

      <Grid   item xs={4}><h4>{coworkingFunctions[3].functionName}</h4>
      <img  className={classes.img} width="45" height="45"  src={`data:image/jpeg;base64,${coworkingFunctions[3].image}`} />
      <p className={classes.price}>Price/1</p>
                   <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={OnButtonClickAddPriceChair}>+</Button>
        <Button disabled>{priceChair.cost}</Button>
        <Button onClick={OnButtonClickReducePriceChair}>-</Button>
      </ButtonGroup>
      <Button  onClick={OnButtonClickAddChair}>{priceChair.text}</Button>
      </Grid>

      <Grid  k item xs={4}><h4>{coworkingFunctions[4].functionName}</h4>
      <img  className={classes.img} width="45" height="45"  src={`data:image/jpeg;base64,${coworkingFunctions[4].image}`} />
      <p className={classes.price}>Price/1</p>
                <ButtonGroup size="small" aria-label="small outlined button group">
     <Button onClick={OnButtonClickAddPriceSofa}>+</Button>
     <Button disabled>{priceSofa.cost}</Button>
     <Button onClick={OnButtonClickReducePriceSofa} >-</Button>
   </ButtonGroup>
   <Button  onClick={OnButtonClickAddSofa}>{priceSofa.text}</Button>
   </Grid>

   <Grid   item xs={4}><h4>{coworkingFunctions[5].functionName}</h4>
      <img  className={classes.img} width="45" height="45"  src={`data:image/jpeg;base64,${coworkingFunctions[5].image}`} />
      <p className={classes.price}>Price/1</p>
                <ButtonGroup size="small" aria-label="small outlined button group">
     <Button onClick={OnButtonClickAddPriceCola}>+</Button>
     <Button disabled>{priceCola.cost}</Button>
     <Button onClick={OnButtonClickReducePriceCola}>-</Button>
   </ButtonGroup>
   <Button onClick={OnButtonClickAddCola}>{priceCola.text}</Button>
   </Grid>

            </Grid>
            </Grid>
            <Grid container >
            <Grid item xs={3}></Grid>
            <Grid item xs={6} className={classes.button}>
            <Button 
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={addCoworking}
           
          >
            Create Ad
          </Button>
          </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
            </Grid >
          </Paper>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        
      </Grid>
    </div>
    </div>
  );
  }

export default AddNewCoworking;