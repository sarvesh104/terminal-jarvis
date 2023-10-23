import React from 'react';
import { Box, Stack } from '@mui/material';
import PageWidth from './Container';


const cardData = [
    {
        image: '/images/icon1.png',
        price: '₹ 23,009',
        percentage: '10%',
        subtitle: 'Current Market price for Card 1',
    },
    {
        image: '/images/icon2.png',
        price: '₹ 30,500',
        percentage: '10%',
        subtitle: 'Current Market price for Card 2',
    },
    {
        image: '/images/icon3.png',
        price: '₹ 18,750',
        percentage: '-13%',
        subtitle: 'Current Market price for Card 3',
    },
    ,
    {
        image: '/images/icon4.png',
        price: '₹ 18,750',
        percentage: '-12%',
        subtitle: 'Current Market price for Card 3',
    },
    ,
    {
        image: '/images/icon5.png',
        price: '₹ 18,750',
        percentage: '2%',
        subtitle: 'Current Market price for Card 3',
    },


];

const Kpicard = () => {
    return (
        <PageWidth sx={{ flexDirection: "row" }}>
            {cardData.map((card, index) => (
                <Stack
                    key={index}
                    sx={{
                        padding: "20px 30px",
                        border: "1px solid grey",
                        display: "flex",
                        justifyContent: "space-between",
                        borderRadius: "10px",
                        marginRight: "20px"
                    }}
                >
                    <Box sx={{ marginBottom: "20px" }}>
                        <img src={card.image} alt={`Card ${index + 1}`} />
                    </Box>

                    <Box sx={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>

                        <Box sx={{ fontSize: "20px", fontWeight: "600", paddingRight: "20px" }}>{card.price}</Box>
                        <Box sx={{ fontSize: "15px" }}>
                            {card.percentage}
                        </Box>
                    </Box>


                    <Box sx={{ color: "#A2A7AE" }}>
                        {card.subtitle}
                    </Box>
                </Stack>
            ))}
        </PageWidth>
    );
};

export default Kpicard;














// import React from 'react';
// import { Box, Stack } from '@mui/material';
// import PageWidth from './Container';
// import icon1 from "../images/icon1.png"

// const Kpicards = () => {
//     return (
//         <>

//             <PageWidth>

//                 <Stack sx={{ padding: "20px 30px", border: "1px solid grey", display: "flex", justifyContent: "space-between", borderRadius: "10px" }}>
//                     <Box sx={{ marginBottom: "20px" }}>
//                         <img src={icon1} />
//                     </Box>

//                     <Box sx={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>
//                         ₹ 23,009
//                     </Box>
//                     <Box sx={{ color: "#A2A7AE", }}>
//                         Current Market price
//                     </Box>
//                 </Stack>
//             </PageWidth>
//         </>
//     )
// }

// export default Kpicards