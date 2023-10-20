import { yellow } from '@mui/material/colors';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PageWidth from './Container';
import logo from "../images/logo1.png";
import house from "../images/houselogo.png";

const Header = () => {
    return (
        <div >
            <PageWidth sx={{marginBottom:"64px",flexDirection:"row", maxWidth:"1500px",}} >
                <Grid container  style={{ display: "flex",height:"64px", marginRight:"10px",justifyContent:"space-evenly", alignItems:"center"}}>
                    <Grid xs={2} sx={{marginTop:"20px"}} >
                        <Box><img src={logo} width="150px" height="50" /></Box>
                    </Grid>

                    <Grid  xs={1} sx={{display:"flex",}} >
                        <Box sx={{padding:"2px 4px"}} >
                            <img src={house} width="16px" height="16px"/>
                        </Box>
                        <Box sx={{color:"#5C5C5C",}}>
                        Dashboard
                        </Box>
                    </Grid>
                    <Grid  xs={1} sx={{display:"flex",}} >
                        <Box sx={{padding:"2px 4px"}} >
                            <img src={house} width="16px" height="16px"/>
                        </Box>
                        <Box sx={{color:"#5C5C5C",}}>
                        Holdings
                        </Box>
                    </Grid>
                    <Grid  xs={1} sx={{display:"flex",}} >
                        <Box sx={{padding:"2px 4px"}} >
                            <img src={house} width="16px" height="16px"/>
                        </Box>
                        <Box sx={{color:"#5C5C5C",}}>
                        Backtest
                        </Box>
                    </Grid>
                    <Grid  xs={1} sx={{display:"flex",}} >
                        <Box sx={{padding:"2px 4px"}} >
                            <img src={house} width="20px" height="20px"/>
                        </Box>
                        <Box sx={{color:"#5C5C5C",}}>
                        FSTP
                        </Box>
                    </Grid>
                    <Grid  xs={2} sx={{display:"flex",}} >
                        <Box sx={{padding:"2px 4px"}} >
                            <img src={house} width="16px" height="16px"/>
                        </Box>
                        <Box sx={{color:"#5C5C5C"}}>
                        Jarvis Cells
                        </Box>
                    </Grid>
                    <Grid  xs={1} sx={{display:"flex",}} >
                        <Box sx={{padding:"2px 4px"}} >
                            <img src={house} width="16px" height="16px"/>
                        </Box>
                        <Box sx={{color:"#5C5C5C",}}>
                        Dashboard
                        </Box>
                    </Grid>
                    
                </Grid>

                <Grid container md={4} spacing={1} style={{ backgroundColor: "green", display: "flex", justifyContent: "space-around", height:"70px"}}>
                    <Grid item xs={1}>
                        <>xs=8</>
                    </Grid>
                    <Grid item xs={1}>
                        <>xs=4</>
                    </Grid>
                    <Grid item xs={1}>
                        <>xs=4</>
                    </Grid>
                    <Grid item xs={1}>
                        <>xs=8</>
                    </Grid>
                </Grid>
            </PageWidth>

        </div>
    )
}

export default Header;