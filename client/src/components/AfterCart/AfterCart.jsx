import React from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material'

function AfterCart() {


  return (
    <Box mr={3}>
    <Dialog style={{align:"center"}} >
        <DialogContent  align="center">
          <DialogTitle>
          Отзывы
          </DialogTitle>
      <DialogContentText style={{maxWidth: '80%'}} maxWidth="xs">
        Выполните автоизацию или регистрацию,
        <br />
        чтобы ставить оценки и писать отзывы.
        <br />
        <Button style={{marginTop: '30px'}} color="inherit" variant="outlined">Войти или создать аккаунт</Button>
      </DialogContentText>
        </DialogContent>
        
     </Dialog>
    </Box>
  );
}

export default AfterCart;
