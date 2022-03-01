
import React from 'react';
import { Paper, Container, FormControl, Typography, Box, Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import {makeStyles, ThemeProvider}  from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import Advertising from '../Advertising/Advertising';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import brands from './brand.png'
import Input from '@mui/material/Input';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import slide1 from "./thaiPhoto.jpeg"


const ariaLabel = { 'aria-label': 'description' };
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


const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+7(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};



function Info(props) {

  const [values, setValues] = React.useState({
    textmask: '()',
    numberformat: '1320',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      
      <Paper className={classes.mainFeaturesPost} style={{backgroundImage: `url(${slide1})`, marginTop: '62px'}}>
      <Container maxWidth="md">
        <div className={classes.overlay}/>
        <Grid container>
          <Grid item md={6}>
  
            <div className={classes.mainFeaturesPostContent}>
              <Typography component="h1" color="inherit" variant="h3" gutterBottom>
                Tapcomania
              </Typography>
              <Typography component="h5"variant="h5" color="inherit" paragraph>
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
    <main>
     <div>
        <Container style={{marginTop: '30px'}} maxWidth="md">
        <Typography variant='h6' align="center" color="textSecondary" paragraph>
          
        УВАЖАЕМЫЕ ЛЮБИТЕЛИ КАЧЕСТВЕННОЙ ОБУВИ!
      <br />
      Мы всегда ждём Вас в нашем магазине по адресу: 
      <Typography variant='h6' align="center" color="textPrimary">
      г. Краснодар, улица Вишняковой 144, Т.Ц. Гранд Паркинг №2, магазин № 13.
      </Typography>


          </Typography >
<Box style={{display: 'flex', flexDirection: 'row', marginTop: '30px'}}>
          <YMaps>
  <Map
    style={{width:'580px', height:'400px'}}
    defaultState={{
      center: [45.021155, 38.999504],
      zoom: 16,
      controls: ['zoomControl', 'fullscreenControl'],
    }}
    modules={['control.ZoomControl', 'control.FullscreenControl']}
  >
    <Placemark
      modules={['geoObject.addon.balloon']}
      defaultGeometry={[45.021155, 38.999504]}
      properties={{
        balloonContentBody:
          'This is balloon loaded by the Yandex.Maps API module system',
      }}
    />
  </Map>
</YMaps>
<Box ml={3} style={{display: 'flex',flexDirection: 'column', justifyContent:"space-between"}}>
  <Typography pb={3} variant='h5' color="textSecondary">
    Для связи
  </Typography>
  <Input   placeholder="Имя" inputProps={ariaLabel} />
  {console.log(ariaLabel)}
  <br />
  <FormControl  variant="standard">
        {/* <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel> */}
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
      <br />
  <Input  placeholder="E-mail" inputProps={ariaLabel} />
  <br />
  <TextField style={{ minWidth: '300px', maxWidth: '700px'}}
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          rows={3}
          placeholder="Сообщение"
          // defaultValue="Default Value"
        />
  
  </Box>
</Box>
{/* <Typography variant='h5' style={{marginTop: '60px'}} align="center" color="textSecondary" gutterBottom>
            Наши контакты:
          </Typography> */}
          <Typography variant='h5' style={{marginTop: '60px'}} align="center" color="textPrimary" gutterBottom>
          Телефоны:
          <br />
          8-918-123-33-03 Дмитрий ( оптово-розничные продажи )
          <br />
          8-918-43-93-769 Сергей ( оптовые продажи )
          <br />
          E-mail:
          <br />
          tapkomania23@yandex.ru
          </Typography>
            <hr style={{width:'70%', marginTop: '60px'}} />
          <Typography variant='h5' style={{marginTop: '60px'}} align="center" color="textSecondary" gutterBottom>
          Наши торговые марки:
          </Typography>
          {/* <div style={{marginTop: '10px', marginBottom: '50px', maxWidth: "50px"}}>
            <img src={brands} alt="" />
          </div> */}
          <Typography variant='h6' align="center" color="textPrimary">
          Sahab & Gambol & Cania (Thailand)
          </Typography>
          <Typography variant='h6' align="center" color="textSecondary" paragraph>
Обувь этих марок обладает отличными характеристиками и незаменима для повседневного использования, как в поездке на курорт, так и в городской среде, и даже в качестве домашних тапочек. Высококачественные материалы с высоким содержанием натурального каучука придают этой обуви оптимальную эластичность и прочность. Продукция славится среди потребителей тем, что носится по несколько сезонов, не боится воды, хорошо подходят для пляжа, бассейна, дома и повседневной эксплуатации, оставаясь при этом удобной и красивой.
Новинки коллекции Sahab & Gambol & Cania 2021 порадуют Вас яркими и стильными моделями, а ассортимент приятно удивит.
Теперь Вы можете заказать обувь Сахаб, Гэмбол или Кания оптом и в                                      розницу от надежного поставщика на Юге России !
      Приятных покупок !
          </Typography>
          <div>
          <Grid container spacing={2} justify="center">
              <Grid>
              {/* <Button variant="outlined" color="inherit">
                О нас
              </Button> */}
              </Grid>
            </Grid>
          </div>
        </Container>
     </div>
  </main>

</ThemeProvider>
  );
}

