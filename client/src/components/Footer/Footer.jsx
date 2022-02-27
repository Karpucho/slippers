import React from 'react';
import { Typography, BottomNavigation, BottomNavigationAction } from '@mui/material'
import {makeStyles, ThemeProvider}  from '@mui/styles';
import {  LocalActivity } from '@mui/icons-material/'

const useStyles = makeStyles({
  root: {
    borderRadius: 2,
    color: 'white',
  },
});



function Footer(props) {

  const classes = useStyles();

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <div style={{ marginTop: '4%' }}>
      <footer>
        <Typography variant="h6" align="center">
          Footer
        </Typography>
        <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
        >
          <BottomNavigationAction
          lable="Recents"
          value="recents"
          // icon={<RestoreIcon/>}
          />
                    <BottomNavigationAction
          lable="Recents"
          value="recents"
          // icon={<FavoriteIcon/>}
          />
                    <BottomNavigationAction
          lable="Recents"
          value="recents"
          // icon={<LocationOnIcon/>}
          />
                    <BottomNavigationAction
          lable="Recents"
          value="recents"
          // icon={<Folder/>}
          />
        </BottomNavigation>
      </footer>
    </div>
  );
}

export default Footer;
