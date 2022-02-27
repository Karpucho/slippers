import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import {makeStyles, ThemeProvider}  from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme();

const useStyles = makeStyles({
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

function Advertising(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <Paper className={classes.mainFeaturesPost} style={{backgroundImage: `url(http://source.unsplash.com/random)`}}>
    <Container maxWidth="md">
      <div className={classes.overlay}/>
      <Grid container>
        <Grid item md={6}>

          <div className={classes.mainFeaturesPostContent}>
            <Typography component="h1" color="inherit" variant="h3" gutterBottom>
              Tapcomania
            </Typography>
            <Typography component="h5" color="inherit" paragraph>
              Оптово-розничная продажа домашней и летней обуви
                           по всей России !
            </Typography>
            <Button variant="outlined" color="inherit">
              О нас
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
   </Paper>
   </ThemeProvider>
  );
}

export default Advertising;
