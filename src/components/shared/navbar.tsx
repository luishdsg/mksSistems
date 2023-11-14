import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { BsCart4 } from "react-icons/bs";
import { Button, alpha, styled } from '@mui/material';
import '../../assets/MKS.svg'
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const NavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <svg width="88" height="30" viewBox="0 0 88 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.4 29L31.36 0.999998H27.08L16.16 19.56L5.04 0.999998H0.76V29H5.72V10.68L14.92 25.8H17.24L26.44 10.44L26.48 29H31.4ZM58.4831 29H64.5631L52.0831 13.52L63.8431 0.999998H58.0031L44.1631 15.36V0.999998H38.9631V29H44.1631V21.84L48.6031 17.28L58.4831 29ZM76.1978 29.4C83.8778 29.4 87.5178 25.56 87.5178 21.08C87.5178 10.8 70.9178 14.68 70.9178 8.72C70.9178 6.6 72.6778 4.92 76.9978 4.92C79.4378 4.92 82.1978 5.64 84.7178 7.12L86.3578 3.08C83.9178 1.48 80.3978 0.599998 77.0378 0.599998C69.3578 0.599998 65.7578 4.44 65.7578 8.96C65.7578 19.36 82.3978 15.4 82.3978 21.44C82.3978 23.52 80.5578 25.08 76.1978 25.08C72.7578 25.08 69.1978 23.8 66.9578 22L65.1578 26.04C67.4778 28.04 71.8378 29.4 76.1978 29.4Z" fill="white" />
            </svg>
            <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.12 15.1C8.58 15.1 10.16 13.38 10.16 11.4C10.16 6.32 1.42 8.8 1.42 4.6C1.42 3.06 2.64 1.8 5.36 1.8C6.62 1.8 8.04 2.18 9.2 2.98L9.58 2.16C8.5 1.38 6.9 0.899999 5.36 0.899999C1.92 0.899999 0.4 2.64 0.4 4.62C0.4 9.78 9.14 7.26 9.14 11.46C9.14 12.98 7.9 14.2 5.1 14.2C3.22 14.2 1.44 13.44 0.48 12.44L0.0200001 13.2C1.04 14.32 3.04 15.1 5.12 15.1ZM13.8075 2.02C14.2675 2.02 14.6275 1.66 14.6275 1.2C14.6275 0.76 14.2675 0.4 13.8075 0.4C13.3475 0.4 12.9875 0.779999 12.9875 1.22C12.9875 1.66 13.3475 2.02 13.8075 2.02ZM13.3075 15H14.3075V4.56H13.3075V15ZM21.1623 15.08C23.8223 15.08 25.2823 13.92 25.2823 12.22C25.2823 8.24 18.3623 10.46 18.3623 7.32C18.3623 6.2 19.2623 5.36 21.3023 5.36C22.4223 5.36 23.5623 5.66 24.4423 6.3L24.9023 5.5C24.0823 4.88 22.6423 4.48 21.3223 4.48C18.6823 4.48 17.3623 5.76 17.3623 7.34C17.3623 11.44 24.2823 9.2 24.2823 12.24C24.2823 13.42 23.4023 14.2 21.2023 14.2C19.6623 14.2 18.2423 13.62 17.4423 12.94L16.9823 13.74C17.8023 14.5 19.4423 15.08 21.1623 15.08ZM32.8331 13.64C32.4131 14.02 31.8331 14.22 31.2131 14.22C29.9331 14.22 29.2731 13.48 29.2731 12.14V5.42H32.5931V4.56H29.2731V2.28H28.2731V4.56H26.3531V5.42H28.2731V12.24C28.2731 14 29.2731 15.08 31.1131 15.08C31.8931 15.08 32.7331 14.84 33.2531 14.34L32.8331 13.64ZM44.5108 9.74C44.5108 6.64 42.3908 4.48 39.5308 4.48C36.6708 4.48 34.5308 6.68 34.5308 9.78C34.5308 12.88 36.7508 15.08 39.9108 15.08C41.4908 15.08 42.9308 14.5 43.8508 13.38L43.2708 12.72C42.4708 13.7 41.2508 14.18 39.9308 14.18C37.4308 14.18 35.6108 12.5 35.5108 10.02H44.4908C44.4908 9.92 44.5108 9.82 44.5108 9.74ZM39.5308 5.36C41.7508 5.36 43.3908 6.98 43.5308 9.24H35.5308C35.6908 6.96 37.3108 5.36 39.5308 5.36ZM60.6044 4.48C58.5844 4.48 57.0644 5.48 56.3844 7C55.8244 5.34 54.4444 4.48 52.5644 4.48C50.6644 4.48 49.2444 5.34 48.5644 6.8V4.56H47.6044V15H48.6044V9.44C48.6044 6.96 50.0644 5.38 52.4244 5.38C54.4644 5.38 55.6844 6.62 55.6844 8.98V15H56.6844V9.44C56.6844 6.96 58.1444 5.38 60.5044 5.38C62.5444 5.38 63.7644 6.62 63.7644 8.98V15H64.7644V8.9C64.7644 5.98 63.1244 4.48 60.6044 4.48ZM72.4134 4.48C70.7934 4.48 69.2734 5.04 68.2334 5.96L68.7334 6.68C69.5934 5.9 70.8934 5.36 72.3334 5.36C74.3734 5.36 75.4334 6.4 75.4334 8.34V9.18H71.8534C68.9534 9.18 67.9534 10.52 67.9534 12.1C67.9534 13.88 69.3734 15.08 71.7134 15.08C73.5334 15.08 74.8134 14.34 75.4734 13.14V15H76.4334V8.38C76.4334 5.8 74.9934 4.48 72.4134 4.48ZM71.8534 14.26C70.0134 14.26 68.9534 13.42 68.9534 12.06C68.9534 10.86 69.7134 9.96 71.8734 9.96H75.4334V11.92C74.8334 13.42 73.6134 14.26 71.8534 14.26ZM83.1936 15.08C85.8536 15.08 87.3136 13.92 87.3136 12.22C87.3136 8.24 80.3936 10.46 80.3936 7.32C80.3936 6.2 81.2936 5.36 83.3336 5.36C84.4536 5.36 85.5936 5.66 86.4736 6.3L86.9336 5.5C86.1136 4.88 84.6736 4.48 83.3536 4.48C80.7136 4.48 79.3936 5.76 79.3936 7.34C79.3936 11.44 86.3136 9.2 86.3136 12.24C86.3136 13.42 85.4336 14.2 83.2336 14.2C81.6936 14.2 80.2736 13.62 79.4736 12.94L79.0136 13.74C79.8336 14.5 81.4736 15.08 83.1936 15.08Z" fill="white" />
            </svg>

          </Typography>
          <Search>
            <Button variant="contained" className="w-100 d-flex justify-content-between align-items-center">
              <BsCart4 /> 0
            </Button>
          </Search>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
