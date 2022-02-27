import React from 'react';
import { Snackbar } from "@material-ui/core"
// import { Alert } from '@material-ui'

function Snac(props) {
  return (
    <Snackbar
            open={props.isOpen}
            onClose={props.handleClose}
            autoHideDuration={3000}
        >
            {/* <Alert
                severity="success"
            >Товар добавлен в корзину!</Alert> */}
        </Snackbar>
  );
}

export default Snac;
