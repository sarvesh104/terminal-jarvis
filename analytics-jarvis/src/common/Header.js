import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import logo from "../images/logo1.png";
import house from "../images/houselogo.png";
import PageWidth from "../common/Container";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DownArrowIcon from '../images/downarrow.png'; // Import your down arrow image

const Header = () => {
  const [anchorElFSTP, setAnchorElFSTP] = useState(null);
  const [anchorElJarvisCells, setAnchorElJarvisCells] = useState(null);
  const [anchorElMore, setAnchorElMore] = useState(null);

  const handleOpenFSTP = (event) => {
    setAnchorElFSTP(event.currentTarget);
  };

  const handleOpenJarvisCells = (event) => {
    setAnchorElJarvisCells(event.currentTarget);
  };

  const handleOpenMore = (event) => {
    setAnchorElMore(event.currentTarget);
  };

  const handleCloseFSTP = () => {
    setAnchorElFSTP(null);
  };

  const handleCloseJarvisCells = () => {
    setAnchorElJarvisCells(null);
  };

  const handleCloseMore = () => {
    setAnchorElMore(null);
  };

  const renderDropdownFSTP = (
    <Popover
      open={Boolean(anchorElFSTP)}
      anchorEl={anchorElFSTP}
      onClose={handleCloseFSTP}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      {/* Dropdown content here */}
      <Box width={1440} height={60} bgcolor="white">
        {/* Add your FSTP dropdown content here */}
        FSTP Dropdown
      </Box>
    </Popover>
  );

  const renderDropdownJarvisCells = (
    <Popover
      open={Boolean(anchorElJarvisCells)}
      anchorEl={anchorElJarvisCells}
      onClose={handleCloseJarvisCells}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      {/* Dropdown content here */}
      <Box width={1440} height={60} bgcolor="white">
        {/* Add your Jarvis Cells dropdown content here */}
        Jarvis Cells Dropdown
      </Box>
    </Popover>
  );

  const renderDropdownMore = (
    <Popover
      open={Boolean(anchorElMore)}
      anchorEl={anchorElMore}
      onClose={handleCloseMore}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      {/* Dropdown content here */}
      <Box width={1440} height={60} bgcolor="white">
        {/* Add your "More" dropdown content here */}
        More Dropdown
      </Box>
    </Popover>
  );

  return (
    <div>
      <PageWidth
        sx={{ marginBottom: "64px", flexDirection: "row", maxWidth: "1500px" }}
      >
        <Grid
          container
          style={{
            display: "flex",
            height: "64px",
            marginRight: "10px",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Grid xs={2} sx={{ marginTop: "20px" }}>
            <Box>
              <img src={logo} width="150px" height="50" />
            </Box>
          </Grid>

          <Grid xs={1} sx={{ display: "flex" }}>
            <Box sx={{ padding: "2px 4px" }}>
              <img src={house} width="16px" height="16px" />
            </Box>
            <Box sx={{ color: "#5C5C5C" }}>Dashboard</Box>
          </Grid>
          <Grid xs={1} sx={{ display: "flex" }}>
            <Box sx={{ padding: "2px 4px" }}>
              <img src={house} width="16px" height="16px" />
            </Box>
            <Box sx={{ color: "#5C5C5C" }}>Holdings</Box>
          </Grid>
          <Grid xs={1} sx={{ display: "flex" }}>
            <Box sx={{ padding: "2px 4px" }}>
              <img src={house} width="16px" height="16px" />
            </Box>
            <Box sx={{ color: "#5C5C5C" }}>Backtest</Box>
          </Grid>

          <Grid xs={1} sx={{ display: "flex" }}>
            <Box sx={{ padding: "2px 4px" }}>
              <img
                src={house}
                width="20px"
                height="20px"
                onClick={handleOpenFSTP}
              />
            </Box>
            <Box sx={{ color: "#5C5C5C" }}>FSTP</Box>
            <Box sx={{ paddingLeft:"5px" }}>
              {anchorElFSTP ? (
                <ExpandLessIcon fontSize="large" color="primary" />
              ) : (
                <img
                  src={DownArrowIcon}
                  width="20px"
                  height="20px"
                  onClick={handleOpenMore}
                />
              )}
            </Box>
          </Grid>

          <Grid xs={1} sx={{ display: "flex" }}>
            <Box sx={{ padding: "2px 4px" }}>
              <img
                src={house}
                width="16px"
                height="16px"
                onClick={handleOpenJarvisCells}
              />
            </Box>
            <Box sx={{ color: "#5C5C5C" }}>Jarvis Cells</Box>

            <Box sx={{ paddingLeft:"5px" }}>
              {anchorElJarvisCells ? (
                <ExpandLessIcon fontSize="large" color="primary" />
              ) : (
                <img
                  src={DownArrowIcon}
                  width="20px"
                  height="20px"
                  onClick={handleOpenMore}
                />
              )}
            </Box>
          </Grid>

          <Grid xs={1} sx={{ display: "flex" }}>
            <Box sx={{ paddingRight:"5px" }}>
              <img
                src={house}
                width="16px"
                height="16px"
                onClick={handleOpenMore}
              />
            </Box>
            <Box sx={{ color: "#5C5C5C" }}>More</Box>

            <Box sx={{ paddingLeft:"5px" }}>
              {anchorElMore ? (
                <ExpandLessIcon fontSize="large" color="#858585" />
              ) : (
                <img
                  src={DownArrowIcon}
                  width="20px"
                  height="20px"
                  onClick={handleOpenMore}
                />
              )}
            </Box>
          </Grid>
        </Grid>

        <Grid container md={4} spacing={1} style={{ backgroundColor: "green", display: "flex", justifyContent: "center", height:"70px"}}>
          <Grid item xs={1} sx={{marginRight:"20px"}}>
            <>flag drop down</>
          </Grid>
          <Grid item xs={1} sx={{marginRight:"20px"}}>
            <>save icon</>
          </Grid>
          <Grid item xs={1} sx={{marginRight:"20px"}}>
            <>logout icon</>
          </Grid>
          <Grid item xs={1} sx={{marginRight:"20px"}}>
            <>avatar of logged user</>
          </Grid>
        </Grid>

        {renderDropdownFSTP}
        {renderDropdownJarvisCells}
        {renderDropdownMore}
      </PageWidth>
    </div>
  );
};

export default Header;


// import { yellow } from '@mui/material/colors';
// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import PageWidth from './Container';
// import logo from "../images/logo1.png";
// import house from "../images/houselogo.png";

// const Header = () => {
//     return (
//         <div >
//             <PageWidth sx={{marginBottom:"64px",flexDirection:"row", maxWidth:"1500px",}} >
//                 <Grid container  style={{ display: "flex",height:"64px", marginRight:"10px",justifyContent:"space-evenly", alignItems:"center"}}>
// <Grid xs={2} sx={{marginTop:"20px"}} >
//     <Box><img src={logo} width="150px" height="50" /></Box>
// </Grid>

// <Grid  xs={1} sx={{display:"flex",}} >
//     <Box sx={{padding:"2px 4px"}} >
//         <img src={house} width="16px" height="16px"/>
//     </Box>
//     <Box sx={{color:"#5C5C5C",}}>
//     Dashboard
//     </Box>
// </Grid>
// <Grid  xs={1} sx={{display:"flex",}} >
//     <Box sx={{padding:"2px 4px"}} >
//         <img src={house} width="16px" height="16px"/>
//     </Box>
//     <Box sx={{color:"#5C5C5C",}}>
//     Holdings
//     </Box>
// </Grid>
// <Grid  xs={1} sx={{display:"flex",}} >
//     <Box sx={{padding:"2px 4px"}} >
//         <img src={house} width="16px" height="16px"/>
//     </Box>
//     <Box sx={{color:"#5C5C5C",}}>
//     Backtest
//     </Box>
// </Grid>
//                     <Grid  xs={1} sx={{display:"flex",}} >
//                         <Box sx={{padding:"2px 4px"}} >
//                             <img src={house} width="20px" height="20px"/>
//                         </Box>
//                         <Box sx={{color:"#5C5C5C",}}>
//                         FSTP
//                         </Box>
//                     </Grid>
//                     <Grid  xs={1} sx={{display:"flex", width:""}} >
//                         <Box sx={{padding:"2px 4px"}} >
//                             <img src={house} width="16px" height="16px"/>
//                         </Box>
//                         <Box sx={{color:"#5C5C5C"}}>
//                         Jarvis Cells
//                         </Box>
//                     </Grid>
//                     <Grid  xs={1} sx={{display:"flex",}} >
//                         <Box sx={{padding:"2px 4px"}} >
//                             <img src={house} width="16px" height="16px"/>
//                         </Box>
//                         <Box sx={{color:"#5C5C5C",}}>
//                         More
//                         </Box>
//                     </Grid>

//                 </Grid>

                // <Grid container md={4} spacing={1} style={{ backgroundColor: "green", display: "flex", justifyContent: "center", height:"70px"}}>
                //     <Grid item xs={1} sx={{marginRight:"20px"}}>
                //         <>flag  drop down</>
                //     </Grid>
                //     <Grid item xs={1} sx={{marginRight:"20px"}}>
                //         <>save icon</>
                //     </Grid>
                //     <Grid item xs={1} sx={{marginRight:"20px"}}>
                //         <>logout icon</>
                //     </Grid>
                //     <Grid item xs={1} sx={{marginRight:"20px"}}>
                //         <>avtar of logged user</>
                //     </Grid>
                // </Grid>
//             </PageWidth>

//         </div>
//     )
// }

// export default Header;
