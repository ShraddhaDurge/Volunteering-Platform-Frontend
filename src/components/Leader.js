import Homebar from "./Homebar";
import logo from './logo.jpg';
import { makeStyles } from '@material-ui/core/styles';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import {useHistory } from 'react-router-dom';
import { Paper , Button, List, ListItem, ListItemIcon, ListItemText, Typography, Grid, Card, CardContent,CardActionArea,Box } from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';
import Chart from './Chart'
import Footer from './Footer';
import Addevents from './Addevents';
import Certificates from './Certificates';

const useStyles = makeStyles({
    root: {
      marginLeft:'0px',
    },
    card:{
        //width:350,
        borderRadius:'30px',
        backgroundColor:"white",
        // '&:hover':{
        //     backgroundColor:"#EBF5FB",
        // },
        button:{
    color:"primary",
    // '&:hover':{
    //     backgroundColor:"#2471A3",
    // },
    marginTop:"8px"},

    },
    gridItem: {
      border: '1px solid lightgray',
        borderRadius: '20px',
        backgroundColor: 'white'
    },
    grid: {
      margin: 5
    }
  });


const Leader = () => {
    const paperStyle={padding :'20px 20px',width:800, height:580, margin:"30px auto"}
    const classes = useStyles();
    const gridStyle={ margin:'3px auto', padding:'5px auto'}
    const Home= ()  =>{
        history.push('/apphome');
    };
    let history=useHistory()
return(
    <Box m={3}>
    <Homebar />
    <center>

             <Typography variant='h4' color="textSecondary"  align="center">LeaderBoard</Typography>

              <p style={{ height: "30px", width: "1200px", padding: "5px", borderRadius: "5px", color:"darkgoldenrod" }}>
              By Danzel Washington  -  <strong><i> Man gives you the award but god gives you the reward </i></strong>
            </p>
            </center>

    <Box m={3} p={2}>
    <Typography gutterBottom variant="h6" color="secondary" align="center">
              Rewards and Recognitions
   </Typography>
    <Grid container spacing={1} className={classes.grid}>
    {/* <Paper variant="outlined">
    */}
                    <Grid item xs={6} className={classes.gridItem}>
                    <Typography gutterBottom variant="body1" color="textSecondary" align="center" onClick={()=>{history.push('/LeaderRR');}}>
                              Nominate Volunteers
                    </Typography>

                    </Grid>
                    <Grid item xs={6} className={classes.gridItem}>
                    <Typography gutterBottom variant="body1" color="textSecondary" align="center" onClick={()=>{history.push('/Certificates');}}>
                              Send Certificates
                    </Typography>
                    </Grid>

    {/* </Paper> */}
            {/* <Card  className={classes.card}>
              <CardContent>
              </CardContent>
            <CardActionArea onClick={()=>{history.push('/LeaderRR');}}>

                    <ListItem alignItems='center'>
                      <ListItemIcon ><EmojiPeopleRoundedIcon /></ListItemIcon>
                      <ListItemText>
                      <Typography gutterBottom variant="h6" component="h1">
                      Nominate Volunteers
                    </Typography>
                      </ListItemText>
                    </ListItem> */}

                  {/* </CardActionArea>
                  <CardActionArea onClick={()=>{history.push('/Certificates');}}>
                  <CardContent>

                    <ListItem alignItems='center'>
                      <ListItemIcon ><CardGiftcardIcon /></ListItemIcon>
                      <ListItemText>
                      <Typography gutterBottom variant="h6" component="h1">
                      Send Certificates
                    </Typography>
                      </ListItemText>
                    </ListItem>

                  </CardContent>
                  </CardActionArea>
            </Card> */}


        <Grid container spacing={2} className={classes.grid}>

        <Grid item xs={12}>
          <Paper variant="outlined"  style={{borderRadius:"30px"}}>
          <Typography gutterBottom variant="h6" color="secondary" align="center">Analytics</Typography>
              <Chart />
              </Paper>
            {/* <CardActionArea onClick={()=>{history.push('/Chart');}}>
                  <CardContent>

                    <ListItem alignItems='center'>
                      <ListItemIcon ><HourglassEmptyIcon /></ListItemIcon>
                      <ListItemText>
                      <Typography gutterBottom variant="h6" component="h1">
                      Hours Spent
                    </Typography>
                      </ListItemText>
                    </ListItem>

                  </CardContent>
                  </CardActionArea> */}
        </Grid>
        </Grid>
    </Grid>

  
</Box>
    <Footer/>
    </Box>
);




    }
    export default Leader;