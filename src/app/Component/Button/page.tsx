 import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material';
 
interface CounterProps {
  count : number,
  setCount : React.Dispatch <React.SetStateAction<number>>;
  handleIncrement : () => void;
  handledecrement : () => void;
}
 function page({count, setCount, handleIncrement, handledecrement}: CounterProps) {
   return (
    <>
      <Box
      sx={{
        display: 'flex',justifyContent : 'center'
      }}>
      <Button variant="outlined" color="primary" onClick={handleIncrement}>
        +
      </Button>
      <Typography variant="h6" color="initial">{count}</Typography>
      <Button variant="outlined" color="primary" onClick={handledecrement}>
        -
      </Button>
      </Box>
    </>
   )
 }
 
 export default page