import Button from '@mui/material/Button';
import { styled } from '@mui/system';
export const colProducts = {
    width: '100%',
    height: 'auto',
  };

  export const cardProduct = {
    width: '100%',
    maxWidth: '218px',
    minHeight: '285px',
    height: 'auto',
    borderRadius: '10px',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    boxShadow: '0px 0px 24px -10px black'
  }

  export const imgProduct = {
    width: 'auto',
    height: '100%',
    maxHeight: '138px'
  }
  export const Montserrat = {
    fontFamily: 'Montserrat , sans-serif',
    fontWheight: '400',
    lineHeight: '1.3',
    fontSize: '16px',
  }
  export const MontserratSmall = {
    fontFamily: 'Montserrat , sans-serif',
    lineHeight: '1.3',
    fontWheight: '200',
    fontSize: '12px',
  }
  export const priceButton = {
    backgroundColor: '#373737',
    transition: '.5s ease-in-out',
    borderRadius: '5px',
    width: 'auto',
    fontFamily: 'Montserrat , sans-serif',
    fontSize: '15px',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkgray',
    },
  };

  export const buyBtn = {
    borderRadius: '0px 0px 10px 10px',
    width: '218px',
    height: '32px',
    bottom: '-7px',
    boxShadow: '0px 0px 24px -10px black'

  }

  export const sidebar = {
    maxWidth: '418px',
    width: '25%'
  }