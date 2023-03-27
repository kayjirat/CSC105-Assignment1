import React from "react";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import picf from '../assets/picf.png';

function Content() {
    return(
        <Grid container direction="column" justifyContent="flex-start" alignItems="center" pt={2}> 
            <Grid item xs={6}>
            <Box >
                <Typography variant="h4" sx={{ mb: 1 }}>Welcome to My Website</Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem 
                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. 
                Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Obcaecati ab ducimus nemo natus aspernatur iusto possimus necessitatibus neque voluptate, 
                dolore nostrum, eos delectus dolores repellat dolorem explicabo quas. Impedit, ut!
                </Typography>
            </Box>
            </Grid>
        
        <Grid item xs={6} >
            <Grid container spacing={2}>
                <Grid item sm={12} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="https://i.pinimg.com/736x/ed/b3/d5/edb3d553dc49afb6e4e84d41eeb342fe.jpg"
                            alt="cute samoyed"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cute Samoyed
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Samoyed, breed of working dog developed in Siberia, 
                                where its ancestors were kept by the Nenets (formerly Samoyed or Yurak) people as a sled dog.
                                </Typography>
                                </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sm={6} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="https://i.pinimg.com/originals/4f/81/4e/4f814ec276383bb9be4daa6bc5bddf0e.jpg"
                            alt="samoyed profile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Samoyed Profile
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Samoyed, breed of working dog developed in Siberia, 
                                where its ancestors were kept by the Nenets (formerly Samoyed or Yurak) people as a sled dog.
                                </Typography>
                                </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                    <Grid item sm={6} md={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://happyvalentinesday2020.online/pics/i.pinimg.com/originals/00/3d/62/003d62a450faf1964f750e4a21729965.jpg"
                                alt="samoyed portrait"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Samoyed Portrait
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Samoyed, breed of working dog developed in Siberia, 
                                where its ancestors were kept by the Nenets (formerly Samoyed or Yurak) people as a sled dog.
                                    </Typography>
                                    </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Content;

