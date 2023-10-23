import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Typography } from '@mui/material';
import { Edit, Check } from '@mui/icons-material';
import stocksData from './stocksData.json';
import PageWidth from './common/Container';
import Stack from '@mui/material/Stack';
import bmark from "./images/bookmark.png";


function StocksTable() {
  const [stocks, setStocks] = useState(stocksData);

  const handleHoldClick = (stockId) => {
    setStocks((prevStocks) =>
      prevStocks.map((stock) =>
        stock.id === stockId ? { ...stock, isHold: true } : stock
      )
    );
  };

  const handleSellClick = (stockId) => {
    setStocks((prevStocks) =>
      prevStocks.map((stock) =>
        stock.id === stockId ? { ...stock, isHold: false } : stock
      )
    );
  };

  return (
    <>


      <PageWidth>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{}}>Stock Details</TableCell>
                <TableCell sx={{}}>Buy Price</TableCell>
                <TableCell sx={{}}>Quantity</TableCell>
                <TableCell sx={{}}>Record Date</TableCell>
                <TableCell sx={{}}>Fundamental</TableCell>
                <TableCell sx={{}}>Sentiment</TableCell>
                <TableCell sx={{}}>Price Production</TableCell>
                <TableCell sx={{ textAlign: "center" }}>RMS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stocks.map((stock) => (
                <TableRow key={stock.id}>
                  <TableCell >
                    <Stack>
                      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "15px" }}>
                          ITC
                        </Typography>
                        <Box>
                          <Button sx={{ border: "1px solid grey", color: "grey", borderRadius: "50px", marginRight: "5px" }}>
                            <Typography sx={{ fontSize: "8px", padding: "1px 10px" }}>Large Cap</Typography>
                          </Button>
                          <Button sx={{ border: "1px solid grey", color: "grey", borderRadius: "50px" }}>
                            <Typography sx={{ fontSize: "8px", padding: "1px 10px" }}>Industrials</Typography>
                          </Button>


                        </Box>

                        <Box>
                          <img src={bmark} width="15px" />
                        </Box>
                      </Box>
                      <Box sx={{ fontSize: "18px", fontWeight: "600" }}>{stock.name}</Box>

                      <Box sx={{ display: "flex", marginTop: "20px" }}>

                        <Box sx={{ fontSize: "15px", fontWeight: "600" }}>
                          ₹ 163005
                        </Box>
                        <Box sx={{ paddingLeft: "30px", fontSize: "15px" }}>
                          5,00,000 units
                        </Box>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell >${stock.buyPrice.toFixed(2)}</TableCell>
                  <TableCell >{stock.quantity}</TableCell>
                  <TableCell >{stock.recordDate}</TableCell>
                  <TableCell >{stock.fundamental}</TableCell>
                  <TableCell >{stock.sentiment}</TableCell>
                  <TableCell >{stock.priceProduction}</TableCell>
                  <TableCell sx={{
                    marginTop: "50px",
                    display: "flex",
                    flexDirection: "column-reverse",
                    alignItems: "center",
                  }}>
                    {stock.isHold ? (
                      <Button
                        onClick={() => handleSellClick(stock.id)}
                        variant="outlined"
                        color="secondary"
                      // startIcon={<Check />}
                      >
                        Mark Sold
                      </Button>
                    ) : (
                      <Button sx={{ marginBottom: "30px" }}
                        onClick={() => handleHoldClick(stock.id)}
                        variant="outlined"
                        color="primary"
                      // startIcon={<Edit />}
                      >
                        Hold
                      </Button>
                    )}
                    {stock.isHold ? <span style={{ color: "red", fontSize: "20px" }}>Sell</span> : null}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PageWidth>

    </>
  );
}

export default StocksTable;















