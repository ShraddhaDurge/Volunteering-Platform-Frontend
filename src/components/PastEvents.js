import React, {useEffect, useState} from 'react';
import {Grid, Paper, Box, Card, CardContent, Button, Typography, makeStyles} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//import logo from './logo.jpeg';
import wkndevnt1 from './weekend.jpg';

import moment from 'moment';
import axios from 'axios';
import {useHistory } from 'react-router-dom';
import Homebar from "./Homebar";
import Footer from './Footer';

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1)
        },
    },
    card:{
        backgroundColor:"#D6EAF8",
        '&:hover':{
            backgroundColor:"#EBF5FB",
        }
    },
    button:{
        color:"primary",
        '&:hover':{
            backgroundColor:"#2471A3",
        },
        marginTop:"8px"
    },
    carouselCaption:{

            backgroundOpacity:0.05,

    }
}));



const PastEvents = (props) => {
    const imgStyle = {height:'460px', width:'600px'}
    const headStyle = {margin:'0', fontFamily:'serif', color:'blue'}
    const btnStyle = {margin:'8px 0'}
    const logoStyle = {height:98, width:128}
    //const imgStyle = {height:'100px', width:'180px'}

    let history = useHistory();


    /*const handleChange = () => {
        props.history.push('/home)')
    }*/

    const [pevent, setPevent] = useState([])
    const event = "Past event"
    const Home = () => {
        history.push('/apphome');
    };
    useEffect(() => {
        axios.get('http://localhost:8081/account/events/getEventsList/false/Weekend event')
        //('http://localhost:8081/account/events/getEvents/'.concat('/isFutureEvent').concat('past'))
        //(`http://localhost:8081/account/events/getEventsList/isFutureEvent${past}/eventTypes${event}`)
        .then(response => {
            console.log(response)
            console.log(response.data[0].event_id)
            setPevent(response.data)
        })
        .catch(err=>{
            console.log(err)

        })
    },[event])

    //Carousel
    //const [index, setIndex] = useState(0)

    const classes = useStyles();
    return(
        <Box>
            <Homebar />

            <Box align="center">
                <center>
                    <Typography variant='h5' style={{color:"#2E2EFE"}} >Past Events</Typography>
                </center>
            </Box>



        <div className={classes.root} style={{ width: 'auto', padding: 10}} >
            <Paper style={{height:'75%', borderRadius:'10px', padding:'10'}} variant="outlined" >


                    <Grid >
                        <Carousel  interval={10000} position="absolute" variant="dark" style={{ marginRight:'5px', marginLeft:'5px'}}>
                        {pevent.map((post)=>(
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={`data:image/png;base64,${post.image}`}
                                    style={imgStyle}
                                    alt="HH-Event"
                                />
                                <Carousel.Caption >
                                    <h3 style={{color:"black"}} >
                                        {post.name}
                                    </h3>
                                    <p align="left" style={{color:"black"}} >
                                        Venue: {post.venue}
                                        <br />
                                        Date: {moment(post.start_time).format('MMMM Do YYYY')}
                                        <br />
                                        About: {post.description}
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                                            ))}
                        </Carousel>
                    </Grid>


            </Paper>
            &nbsp;
            <Paper style={{height:'75%', borderRadius:'10px', padding:'15'}} variant="outlined" >
                <Typography align="center" variant="h4" style={{fontColor:"primary", fontFamily:"Gabriola"}}>
                    <b> Our  Volunteers'  Thoughts  on  Helping  Hands </b>
                </Typography>

                <div className={classes.root}>
                    <Paper style={{ padding:'5px', borderRadius:'12px'}} elevation={5}>
                        <Typography align="center" style={{wordWrap:"break-word"}} >
                            <br />
                            Really enjoy volunteering through Helping Hands. When a little of your time and the simplest acts can make someone's day better, it is one of the most rewarding things
                            <br />
                            <center>
                                <AccountCircleIcon />
                            </center>
                            <br />
                        </Typography>
                    </Paper>

                    <Paper style={{ padding:'5px', borderRadius:'12px'}} elevation={5}>
                        <Typography align="center" style={{wordWrap:"break-word"}} >
                            <br />
                            If you are looking for an authentic volunteering experience among people who work passionately for the causes they believe in, then this is the place to be
                            <br />
                            <center>
                                <AccountCircleIcon />
                            </center>
                            <br />
                        </Typography>
                    </Paper>

                    <Paper style={{ padding:'5px', borderRadius:'12px'}} elevation={5}>
                        <Typography align="center" style={{wordWrap:"break-word"}} >
                            <br />
                            I got to experience so many elements of volunteering since joining HelpingHands, It was a genuinely enriching experience. Even besides that, I was unaware just how much fun I would have!
                            <br />
                            <center>
                                <AccountCircleIcon />
                            </center>
                            <br />
                        </Typography>
                    </Paper>

                </div>

            </Paper>
        </div>

            <Footer/>
        </Box>
    )
}

export default PastEvents;