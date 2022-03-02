import React from 'react';
import { Typography, BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import {makeStyles, ThemeProvider}  from '@mui/styles';
import {  LocalActivity } from '@mui/icons-material/'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConnectionForm from '../ConnectionForm/ConnectionForm';

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
    <div  style={{ marginTop: '100px', paddingBottom: '2%',paddingTop: '50px' , backgroundColor: "rgba(219, 219, 219, 0.91)", paddingLeft: "50px"}}>
      <ConnectionForm/>
      <footer>
        {/* <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
        >
          <BottomNavigationAction
          lable="Recents"
          value="recents"
          icon={<CallIcon/>}
          />
                    <BottomNavigationAction
          lable="Recents"
          value="recents"
          icon={<EmailIcon/>}
          />
                    <BottomNavigationAction
          lable="Recents"
          value="recents"
          icon={<LocationOnIcon/>}
          />
        </BottomNavigation> */}
                <hr style={{marginTop: "50px",}} />
        <Box 
              sx={{
                // width: "auto",
                maxWidth: "1000px",
                // height: "auto",
                margin: "auto",
                paddingTop: "20px"
                // bgcolor: 'primary.dark',
                // '&:hover': {
                //   backgroundColor: 'primary.main',
                //   opacity: [0.9, 0.8, 0.7],
                // },
              }}
        >
        <Typography  align="left" color="textSecondary">
        Любое использование либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления допускается лишь с разрешения правообладателя и только со ссылкой на источник: tapkomania23.ru . Юридическая информация: ИП Кудрявцева Ирина Станиславовна ОГРНИП 304230925900039 ИНН 230900021505
        </Typography>
        </Box>
      </footer>
    </div>
  );
}

export default Footer;
