import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Grid, Menu, MenuItem } from '@mui/material';
import {makeStyles, ThemeProvider}  from '@mui/styles';
import { useNavigate } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';


const theme = createTheme();

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 2,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 35,
    padding: '0 22px',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
  },
  barColor: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.9)",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(9),
    marginTop: theme.spacing(12),
    color: 'white',
  }
});

function NavBar(props) {
  const navigate = useNavigate();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
<ThemeProvider theme={theme}>
<AppBar  className={classes.barColor} position='fixed'>
     <Container fixed>
        <Toolbar>
        <IconButton      
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} edge="start" color="inherit" aria-label="menu">
          <MenuIcon mr={10}/>
        </IconButton>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>  {navigate('/home');handleClose()}}>Женские</MenuItem>
        <MenuItem onClick={()=>  {navigate('/');handleClose()}}>Мужские</MenuItem>
        <MenuItem onClick={()=>  {navigate('/');handleClose()}}>Подросток</MenuItem>
        <MenuItem onClick={()=>  {navigate('/');handleClose()}}>Личный кабинет</MenuItem>
        
        <MenuItem onClick={()=>  {navigate('/');handleClose()}}>Инфо</MenuItem>
        <MenuItem onClick={()=>  {navigate('/');handleClose()}}>Оптом</MenuItem>
      </Menu>
      <Typography variant="h5" className={classes.title}>Tapcomania</Typography>
         <Box m={3}>
           <Button onClick={() => navigate('/')} color="inherit" variant="outlined">log in</Button>
         </Box>
         <Button  onClick={() => navigate('/signup')} color="inherit" variant="outlined">sign up</Button>
        </Toolbar>
     </Container>
    </AppBar>
</ThemeProvider>
  );
}

export default NavBar;
{/* <div>
<ul>
  <li>
    <Link to="/">Домой</Link>
  </li>
  <li>
    <Link to="/signup">Зарегистрироваться</Link>
  </li>
  <li>
    <Link to="/signin">Войти</Link>
  </li>
  <li>
    <Link to="/logout">Выйти</Link>
  </li>
</ul>
</div> */}
