import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Grid, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material';
import {makeStyles, ThemeProvider}  from '@mui/styles';
import { useNavigate } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey, yellow } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const theme = createTheme();

const useStyles = makeStyles({
  setColor: {
    grey: {
      main: grey[900],
    },
  },
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
    color: 'black',
    flexGrow: 1,
  },
  barColor: {
    background: 'linear-gradient(45deg, #FFFFFF 30%, #FFFFFF 90%)',
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(40),

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
  },
  buttons: {
    color: '#FFFFFF',
  },
  menu: {
    color: '#FFFFFF',
  },
  badge: {
    color: yellow[800]
  },
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.30),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      height: '2ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const [anchor, setAnchor] = React.useState(null);
  
  const profileOpen = Boolean(anchor);
  const Click = (event) => {
    setAnchor(event.currentTarget);
  };
  const Close = () => {
    setAnchor(null);
  };

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const dialogClickOpen = () => {
    setDialogOpen(true);
  }
  const dialogClickClose = () => {
    setDialogOpen(false);
  }

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
        onClick={handleClick} edge="start" color={classes.setColor.grey} aria-label="menu">
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
        <MenuItem onClick={()=>  {navigate('/products');handleClose()}}>Все товары</MenuItem>
        <MenuItem onClick={()=>  {navigate('/');handleClose()}}>Женские</MenuItem>
        <MenuItem onClick={()=>  {navigate('/');handleClose()}}>Мужские</MenuItem>
        <MenuItem onClick={()=>  {navigate('/');handleClose()}}>Подросток</MenuItem>
        
        <MenuItem onClick={()=>  {navigate('/');handleClose()}}>Инфо</MenuItem>
        <MenuItem onClick={()=>  {navigate('/');handleClose()}}>Оптом</MenuItem>
      </Menu>
      <Typography variant="h5" className={classes.title}>Tapcomania</Typography>
         {/* <Box m={3}>
           <Button className={classes.buttons} onClick={() => navigate('/signin')} color="inherit" variant="outlined">log in</Button>
         </Box>
         <Button  onClick={() => navigate('/signup')} color="inherit" variant="outlined">sign up</Button> */}








          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        <Tooltip title="Account settings">
          
          <IconButton
            onClick={Click}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={profileOpen ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={profileOpen ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}><Avatar /> </Avatar>

          </IconButton>
        </Tooltip>
        <IconButton aria-label="cart">
                <StyledBadge badgeContent={1} color="primary">
                  <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
      </Box>
      <Menu
        anchorEl={anchor}
        id="account-menu"
        open={profileOpen}
        onClose={Close}
        onClick={Close}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <HomeIcon color="disabled" /> */}
        <MenuItem onClick={() => {handleClose();dialogClickOpen()}}>
          <div> Войти</div>
        </MenuItem>
        <MenuItem>
          <Avatar /> <div onClick={() => {navigate('/profile');handleClose()}}> Мой аккаунт</div>
        </MenuItem>
        <Divider />
        {/* <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Настройки
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Выйти
        </MenuItem>
      </Menu>
        </Toolbar>
     </Container>
     <Dialog open={dialogOpen} onClose={dialogClickClose} arial-labelledby="from-dialog-title">
        <DialogTitle id="from-dialog-title">Войти</DialogTitle>
        <DialogContent>
          <DialogContentText>Авторизация</DialogContentText>
          <TextField 
          autoFocus
          margin="dense"
          id="name"
          label="Email Adresse"
          type="email"
          fillWidth
          autocomplete="off"
          />
          <TextField 
          autocomplete="off"
          autoFocus
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fillWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogClickClose} color="inherit" variant="outlined">Авторизоваться</Button>
          <Button onClick={dialogClickClose} color="inherit" variant="outlined">Закрыть</Button>
        </DialogActions>
     </Dialog>
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