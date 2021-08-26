import React, { useEffect } from 'react';
import { Grid, Typography,Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import logo from './logo.jpg';
import explore from './explore.jpeg';
import opp from './opp.jpeg';
// import AppBar from '@material-ui/core/AppBar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import HomeIcon from '@material-ui/icons/Home';
// import Toolbar from '@material-ui/core/Toolbar';
// import { positions } from '@material-ui/system';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import axios from 'axios';
import {useState} from 'react';
import {Route, useHistory } from 'react-router-dom';
// import DashboardIcon from '@material-ui/icons/Dashboard';
import Homebar from "./Homebar";
import Footer from "./Footer";


const imgstyle = {
  margin: '10px 10px'
}
const useStyles = makeStyles((theme) => ({
  root: {
    minwidth:200,
    backgroundColor:"#D6EAF8",

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  homeButton: {
    marginLeft: theme.spacing(143),
  },
  media: {
    height: 140,
    /*minwidth:200,
    alignItems:'center'*/

  }
}));



	export default function ButtonAppBar() {

    const dataInfo=JSON.parse(localStorage.getItem("myInfo"))
      const id=dataInfo.id
      const [count,setCount]=useState(0);
     useEffect(()=>{

      {

      axios.get(`http://localhost:8081/account/events/getEventParticipated/${id}`)
     .then((response) => {
       console.log(response.data.events);
        var ct = response.data.eventsCount;
        setCount(ct);
      })
    };
  })







  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);};


    let history = useHistory();



  return (




      <Box >
       <Homebar/>

{/* <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <DashboardIcon/>
    </IconButton>

    <Typography variant="h6" className={classes.title}>
      Dashboard
    </Typography>
	<IconButton edge="end" padding="20px"  className={classes.homeButton} color="inherit" aria-label="menu" onClick={()=>{history.push("/home");}}  >
      <HomeIcon />
    </IconButton>
	<div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="contained" color="primary">
        Hello {dataInfo.firstname},
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={()=>{history.push("/login");}}>Logout</MenuItem>
      </Menu>
    </div>

  </Toolbar>
</AppBar> */}



	<br/>

	{/* <center><h2>Welcome {dataInfo.firstname},</h2></center> */}
    <center>

         <Typography variant='h5' style={{color:"textSecondary"}} >Dashboard</Typography>
          </center>
	<br/>
	  <center>
      <Box m={3}>
		 <center>
        <Grid container spacing={5} direction="row"
  justifyContent="center"
  alignItems="center">

          <Grid item xs={12} sm={6} md={3}>

            <Card className={useStyles.root}>
              <CardActionArea onClick={()=>{history.push("/EventsRegistered");}} style={{backgroundColor:"#D6EAF8"}}>

                <img src={opp} alt="oppurtunities Registered" width='80%' height='200' style={imgstyle} />

                <CardContent>
                <Button variant="contained" color="secondary">

                {count}

                </Button>
                  <Typography gutterBottom variant="h6" component="h1" color="primary"  >
                    Opportunities Registered
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={useStyles.root}>
              <CardActionArea onClick={()=>{history.push("/apphome");}} style={{backgroundColor:"#D6EAF8"}}>
               <img src={explore} alt="explore" width='80%' height='200' style={imgstyle} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h1" color="primary">
                    <br/>
                  Explore Opportunities
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          
          
        </Grid>
		</center>
       </Box>
       
       
       <Footer/>
       {/* <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
      <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
      <BottomNavigationAction label="YouTube" icon={<YouTubeIcon />} />
    </BottomNavigation> */}

	   </center>
      
      
       </Box>

  )
}