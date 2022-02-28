import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CartItems from "../CartItems/CartItems";


export default function Test() {

  const { cartProducts } = useSelector(state => state.cartReducer);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const [state, setState] = React.useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: '500px' }}
      role="presentation"
      // onClickAway={toggleDrawer(anchor, false)}
    >
       <List sx={{width: '500px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Корзина" />
                </ListItem>
                <Divider />

                {!cartProducts.length ? (
                    <ListItem>Корзина пуста!</ListItem>
                ) : (
                    <>
                    {cartProducts.map((orders) => {
                      if (orders.numberOfItems) {
                        return <CartItems key={uuidv4()} 
                        orders={orders} />
                      }})}

                    <Divider />
                    <ListItem>
                        {/* <Typography sx={{fontWeight: 700}}>
                            Общая стоимость:{' '}
                            {cartProducts.reduce((acc, item) => {
                            return acc + item.price * item.numberOfItems;
                            }, 0)}{' '}
                            рублей.
                        </Typography> */}
                    </ListItem>
                    </>
                )}
            </List>

    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
          <IconButton aria-label="cart">
                <StyledBadge badgeContent={19} color="primary">
                  <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
