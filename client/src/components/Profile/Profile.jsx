import { Container, Typography, Grid, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// import Cart from '../Cart/Cart'

function Profile(props) {
  const theme = createTheme();

  const { user } = useSelector((state) => state.usersReducer?.user.userData);
  console.log("user selector profile", user);
  // const {userProducts} = useSelector(state => state.usersReducer?.userProducts)
  // console.log('userproducts selector profile', userProducts);
  // const {favoriteProducts} = useSelector(state => state.favoriteProducts)
  // console.log('favoriteProducts selector profile', favoriteProducts);

  const dispatch = useDispatch();
  const id = user.id;
  // console.log('userId', id);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    const body = {
      email: data.email,
      password: data.password,
      role: data.role,
    };
    dispatch({
      type: "FETCH_UPDATE_USER",
      payload: {
        body,
        id,
      },
    });
    // console.log(body);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">Личный кабинет </Typography>
          </Grid>
        </Grid>
        <div>
          <h3>Список избранных товаров</h3>
          {/* {favoriteProducts ? (
            favoriteProducts?.map((product, el) => product.id )
          )
          : <p>Список избранных товаров пуст</p>
          } */}
          {/* <h3>История покупок</h3>
        {userProducts ? (
          userProducts?.map((product, el) => {
            return ( 
              <Cart key={product.id} product={product}  />
            );
          })
        ) : 
        (<p>Пустая корзина</p>) 
      }  */}
          <Grid container spacing={3}>
            <Grid item s={8}>
              <Typography component="h1" variant="h6">Изменить свой профиль </Typography>
            </Grid>
          </Grid>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="normal"
            defaultValue={user?.email}
            type="text"
            {...register("role", {
              minLength: {
                value: 2,
                message: "role не должны быть короче 2 символов",
              },
            })}
            required
            fullWidth
            id="role"
            label="Ваша текущая роль"
            autoComplete="role"
            autoFocus
          />
          <div style={{ height: 40 }}>
            {errors?.role && <p>{errors?.role?.message || "Eror!"}</p>}
          </div>
          <TextField
            margin="normal"
            defaultValue={user?.email}
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            required
            fullWidth
            id="email"
            label="Ваша текущая электронная почта"
            autoComplete="email"
            autoFocus
          />
          <div style={{ height: 40 }}>
            {errors?.email && (
              <p>{errors?.email?.message || "Введите нормальную почту"}</p>
            )}
          </div>

          {/* <label>
          Изменить пароль
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 5,
                message: "Пароль должен содержать не менее 5 символов",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.password && (
            <p>{errors?.password?.message || "Введите корректный пароль"}</p>
          )}
        </div> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Изменить свои данные
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
}

export default Profile;
