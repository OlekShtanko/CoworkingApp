import React,{useState,useEffect} from "react"
import { Redirect } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import axios from "axios"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, RadialBarChart, RadialBar} from 'recharts';
import {TableContainer,Table,TableHead, TableRow, TableCell,TableBody,withStyles, ButtonGroup,Button,Container, Box,TextField,FormControlLabel,RadioGroup,Radio} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  paperUser: {
    padding: theme.spacing(2),
    background:"#F7B968"
  },
  paperFactory: {
    padding: theme.spacing(2),
    background:"#5CD562"
  },
  paperQuality: {
    padding: theme.spacing(2),
    background:"#54AAED"
  },
  text:{
    marginLeft:50,
    fontSize:24
  },
  number:{
    marginLeft:40,
    fontSize:32
  },
 
}));
const ChartPage=({props})=> {
  const classes = useStyles();

  const [BestFact, setBestFact] = useState([{
    Id1:1,
    Id2:2,
    Id3:3,
    Id4:4,
    Id5:5,
    quality1:0,
    quality2:0,
    quality3:0,
    quality4:0,
    quality5:0,
    
  }])
  const [PersFact, setPersFact] = useState([{
    name: '1-10',
    name: '11-20',
    name: '21-40',
    name: '41-60',
    name: '61-99',
    name: '100-199',
    name: '200+',
    с1:0,
    с2:0,
    с3:0,
    с4:0,
    с5:0,
    с6:0,
    с7:0,
  }])
  const [WorstFact, setWorstFact] = useState([{
    Id1:1,
    Id2:2,
    Id3:3,
    Id4:4,
    Id5:5,
    quality1:0,
    quality2:0,
    quality3:0,
    quality4:0,
    quality5:0,
  }])
  const style = {
    top: 0,
    left: 350,
    lineHeight: '24px',
  };
  const [TotalUsers,setTotalUsers]= useState(0);
  const [TotalMarkers,setTotalMarkers]= useState(0);
  const [AvarageAirQuality,setAvarageAirQuality]= useState(0);
  const renderBestBarChart = (
    <BarChart width={800} height={350} data={BestFact}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 120, backgroundColor: '#ccc' }} />
      <Legend width={100} wrapperStyle={{ top: 40, left: 80, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="airQuality" fill="#2DBF1E" barSize={30} />
    </BarChart>
    
  );
  const renderWorstBarChart = (
    <BarChart width={800} height={350} data={WorstFact}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 120, backgroundColor: '#ccc' }} />
      <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="airQuality" fill="#E53D2C" barSize={30} />
    </BarChart>
  )
  

  useEffect(()=>{
    axios
     .get(
      `http://localhost:5000/api/AllMarkers/Best`).then(response => {
         setBestFact([{name: response.data[0].id, airQuality:response.data[0].airQuality},{name: response.data[1].id, airQuality:response.data[1].airQuality},{name: response.data[2].id, airQuality:response.data[2].airQuality},{name: response.data[3].id, airQuality:response.data[3].airQuality},{name: response.data[4].id, airQuality:response.data[4].airQuality}])
     })
     axios
     .get(
      `http://localhost:5000/api/AllMarkers/Worst`).then(response => {
         setWorstFact([{name: response.data[0].id, airQuality:response.data[0].airQuality},{name: response.data[1].id, airQuality:response.data[1].airQuality},{name: response.data[2].id, airQuality:response.data[2].airQuality},{name: response.data[3].id, airQuality:response.data[3].airQuality},{name: response.data[4].id, airQuality:response.data[4].airQuality}])
     })
     axios
     .get(
      `http://localhost:5000/api/AllMarkers/CircleData`).then(response => {
         setPersFact([{name: '1-10', uv:response.data[0],fill: '#13FF00'},{name: '11-20', uv:response.data[1],fill: '#90F71C'},{name: '21-40', uv:response.data[2],fill: '#C2FA10'},{name: '41-60', uv:response.data[3],fill: '#E4FF00'},{name: '61-99', uv:response.data[4],fill: '#FFD100'},{name: '100-199', uv:response.data[5],fill: '#FF7800'},{name: '200+', uv:response.data[6],fill: '#FF7800'}])
     })
     axios
     .get(
      `http://localhost:5000/api/Admin/TotalUsers`).then(response => {
         setTotalUsers(response.data)
     })
     axios
     .get(
      `http://localhost:5000/api/Admin/TotalMarkers`).then(response => {
         setTotalMarkers(response.data)
     })
     axios
     .get(
      `http://localhost:5000/api/Admin/AvarageAirQuality`).then(response => {
         setAvarageAirQuality(response.data)
     })
   },[])

 
   return(
    <div className={classes.root}>
    <Grid container spacing={3}>
 
      <Grid item xs={12} sm={6}>
    <Paper className={classes.paper}><Box className={classes.head} mx="auto">1</Box>{renderBestBarChart}</Paper>
      </Grid>
      <Grid item xs={12} sm={6} >
    <Paper className={classes.paper}><Box className={classes.head} mx="auto">1 </Box>{renderWorstBarChart}</Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
    <Paper className={classes.paperUser}> <AccountCircleIcon fontSize='large' color='primary'></AccountCircleIcon><a className={classes.text}>1</a><a className={classes.number}>{TotalUsers}</a></Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
    <Paper className={classes.paperFactory}><LocationSearchingIcon fontSize='large' color='primary'></LocationSearchingIcon><a className={classes.text}>1</a><a className={classes.number}>{TotalMarkers}</a></Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
    <Paper className={classes.paperQuality}><WbCloudyIcon fontSize='large' color='primary'></WbCloudyIcon><a className={classes.text}>1</a><a className={classes.number}>{AvarageAirQuality}</a></Paper>
      </Grid>
      <Grid item xs> 
        </Grid>

    <Grid item xs>  
        </Grid>
    </Grid>
  </div>
  
  );
}

export default ChartPage;