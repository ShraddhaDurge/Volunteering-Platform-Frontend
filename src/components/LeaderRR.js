import React, {useEffect, useState} from 'react';
import {Grid, Box, AppBar, Toolbar, Typography, IconButton, Paper, Card, CardContent, Avatar, Checkbox, Button, makeStyles, FormGroup, FormControlLabel} from '@material-ui/core';
import {ArrowBack, Home, Menu } from '@material-ui/icons';
import {Formik, Form, Field } from 'formik';
import logo from './logo.jpg';
import icon from './HH-icon.ico';
import axios from 'axios';
import Homebar from "./Homebar";
import Footer from './Footer';

const LeaderRR = () => {
    const paperStyle = {padding:'10px 25px', height:'auto', width:'auto', margin:'15px 20px', border:' black'}
    const gridStyle = {margin:'3px auto', padding:'5px auto'}
    const headStyle = {margin:'0', fontFamily:'sans-serif', color:'#8A2BE2'}
    const btnStyle = {margin:'8px 0'}
    const logoStyle = {height:98, width:128}
    const iconStyle = {height:45, width:45}
    const formStyle = {textAlign:'center'}

    const [eventRR, setEventRR] = useState([])
    const event = "Past event RR"
    useEffect(() => {
        axios.get('http://localhost:8081/account/events/getEventsList/false/Weekend event')
        //('http://localhost:8081/account/events/getEvents/'.concat('/isFutureEvent').concat('future'))
        //(`http://localhost:8081/account/events/getEventsList/isFutureEvent${future}/eventTypes${event}`)
        .then(response => {
            console.log(response)
            console.log(response.data[0].event_id)
            setEventRR(response.data)
        })
        .catch(error => {
            if(error.response.status===400 || error.response.status===401) {
                console.log(error.response.data.message)
            }
            else {
                console.log("Oop! Something went wrong")
            }
        })
    },[event])

    

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        large: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        homeButton: {
            marginRight: theme.spacing(5),
        },
        button:{
            color:"primary",
            '&:hover':{
                backgroundColor:"#2471A3",
            },
            marginTop:"8px"
        }
    }));

    const classes = useStyles();

    return (
        <Box>
            <Homebar/>

        <Grid style={gridStyle}>
            
            
                <Grid align='center'>
                    <br />
                    <center> 

                             <Typography variant='h5' style={{color:"textSecondary"}} >Rewards and Recognition</Typography>
                              </center>
                    
                </Grid>
                
                {eventRR.map((postOne)=>(
                
                <Formik >
                    {(props) => (
                        
                        <Form style={formStyle}>
                            
                            <Paper style={paperStyle} elevation={15}>
                                
                                        <p align="left">
                                        <center>
                                        <Typography variant='h6' style={{color:"#2E2EFE"}} >{postOne.name}</Typography>
                                        </center>   
                                            <br />
                                            <b> Participant(s): </b>
                                            
                                            <div className={classes.root}>
                                                <Card >
                                                    <CardContent>
                                                        <Avatar src="/broken-image.jpg" className={classes.large} />
                                                        <Typography>
                                                            Participant1
                                                        </Typography>
                                                    </CardContent>
                                                    <Checkbox color='primary' inputProps = {{'aria-label': 'uncontrolled-checkbox'}} />
                                                </Card>

                                                <Card>
                                                    <CardContent>
                                                        <Avatar src="/broken-image.jpg" className={classes.large} />
                                                        
                                                        <Typography>
                                                            Participant2
                                                        </Typography>
                                                    </CardContent>
                                                    <Checkbox color='primary' inputProps = {{'aria-label': 'uncontrolled-checkbox'}} />
                                                </Card>
                                                
                                                <Card>
                                                    <CardContent>
                                                        <Avatar src="/broken-image.jpg" className={classes.large} />
                                                        <Typography>
                                                            Participant3
                                                        </Typography>
                                                    </CardContent>
                                                    <Checkbox color='primary' inputProps = {{'aria-label': 'uncontrolled-checkbox'}} />
                                                </Card>
                                            </div>                    
                                        </p>
                                        <Button style={btnStyle} align='right' type='submit' color='primary' variant="contained">Nominate</Button>
                                    
                                
                            </Paper>

                        </Form>
                    )}
                </Formik>
            ))}
        
    </Grid>
<Footer/>
    </Box>

    )
}

export default LeaderRR;