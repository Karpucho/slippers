import React from 'react';
import { IconButton, ListItem, Typography } from "@material-ui/core";
import { Close } from "@mui/icons-material/";

//{removeFromOrder, id, name, price, numberOfProdd}

function CartItems({products}) {

  console.log(products);


  return (
    <ListItem>
      <p>rsdfghjklhghfdghjkkgjfhdgj</p>
    {/* <Typography
        variant="body1"
    >
        {name} {price}руб x{quantity}
    </Typography>
    <IconButton
        onClick={() => removeFromOrder(id)}
    >
        <Close />
    </IconButton> */}
</ListItem>
  );
}

export default CartItems;
