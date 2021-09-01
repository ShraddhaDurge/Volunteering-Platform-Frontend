import React from "react";
import { Grid, Typography, Button, Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import logo from './logo.jpg';
import webinar from './webinars.png';
import weekend from './weekend.jpg';
import art from './art&craft.jpg';
import food4thought from './food4thougth.png';
import social from './social.jpg';
import fund from './fund.jpg';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';

const imgstyle = {
  margin: '10px 100px'
}
// const useStyles = makeStyles({
//   root: {
//     marginLeft: '100px',},
//     card:{width: 400,
//     backgroundColor: "#D6EAF8",
//     '&:hover': {
//       backgroundColor: "#EBF5FB",
//   }},
//   media: {
//     height: 140,
//    },
// });
//const useStyles = makeStyles({
////  root: {
////    width:480,
////    alignItems:'center',
////    backgroundColor:"#D6EAF8",
////      '&:hover':{
////          backgroundColor:"#EBF5FB",
////      },
////  },
//  media: {
//    height: 140,
//    /*minwidth:200,
//    alignItems:'center'*/
//
//  },
//
//  root: {
//      display: 'flex',
//    },
//
//});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    width: '150%'
  },
  cover: {
    width: '40%',
    height: 200
  },

}));

// const useStyles = makeStyles({
//   root: {
//     marginLeft:'60px',
//   },
//   card:{
//       width:400,
//       backgroundColor:"#D6EAF8",
//       '&:hover':{
//           backgroundColor:"#EBF5FB",
//       },
//       button:{
//   color:"primary",
//   '&:hover':{
//       backgroundColor:"#2471A3",
//   },
//   marginTop:"8px"},
//       grid:{
//           align:'center',
//           alignItems:'center',
//       },

//   },
//   media: {
//         height: 140,
//       },
// });
const Home = () => {
  const classes = useStyles();
  let history = useHistory();
  //const classes = useStyles();
  const Past = () => {
    history.push('/PastEvents');
  };
  return (

    <Box m={5}>
      {/* <Box  align="center">
        <img src={logo} alt="logo" width='200' height='150' />
      </Box> */}

      <Box m={3}>

        <center>

<Typography variant='h4' color="textSecondary"  align="center">Event Board</Typography>

 <p style={{ height: "30px", width: "1200px", padding: "5px", borderRadius: "5px", color:"darkgoldenrod" }}>
 By Steve Maraboli  -  <strong><i> ~ A kind gesture can reach a wound that only compassion can heal </i></strong>
</p>
</center>
        <Box m={2}>
                <Grid container direction="column" justifyContent="flex-end" alignItems="flex-end">
                  <Grid item xs={12} sm={6} md={3} >
                    <Button type='submit' variant='contained' style={{backgroundColor:'#199bf1',color:'white'}} onClick={Past}>Past Events</Button>
                  </Grid>
                </Grid>
              </Box>
        {/* <Paper variant="outlined" style={{ width: "1150px", padding: "5px", borderRadius: "5px", marginTop: "20px" }}> */}
          <Grid container spacing={5} >
            <Grid item xs={12} sm={12} md={4} >

              <Card className={classes.root}>
                <CardActionArea onClick={()=>{history.push("/weekend");}}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={weekend}
                    title="Contemplative Reptile"
                  />
                  <CardContent  style={{backgroundColor:"#80DEEA"}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Weekend events
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>

            </Grid>

            <Grid item xs={12} sm={12} md={4} >

              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={webinar}
                    title="Contemplative Reptile"
                  />
                  <CardContent style={{backgroundColor:"#F48FB1"}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Webinar for NGO's
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} >

              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={food4thought}
                    title="Contemplative Reptile"
                  />
                  <CardContent style={{backgroundColor:"#Fbceb1"}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Food for thought
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>

            </Grid>
            <Grid item xs={12} sm={12} md={4} >

              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={art}
                    title="Contemplative Reptile"
                  />
                  <CardContent style={{backgroundColor:"#FFF59D"}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Art and craft
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>

            </Grid>

            <Grid item xs={12} sm={12} md={4} >

              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={social}
                    title="Contemplative Reptile"
                  />
                  <CardContent style={{backgroundColor:"#E5e4e2"}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Social Events
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>

            </Grid>
            <Grid item xs={12} sm={12} md={4} >

              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={fund}
                    title="Contemplative Reptile"
                  />
                  <CardContent style={{backgroundColor:"#82beb5"}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Fund Raising Events
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>

            </Grid>

          </Grid>
        {/* </Paper> */}
      </Box>


    </Box>

  )
}
export default Home;