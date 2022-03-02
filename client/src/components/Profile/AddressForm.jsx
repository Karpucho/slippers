import React from 'react';
import { Container, Typography, Grid, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";


function AddressForm(props) {
  const dispatch = useDispatch();

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
    dispatch();
    // console.log(body);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <TextField
      margin="normal"
      type="text"
      {...register("name", {
        minLength: {
          value: 2,
          message: "name не должны быть короче 2 символов",
        },
      })}
      required
      fullWidth
      id="name"
      label="Укажите ФИО для "
      autoComplete="name"
      autoFocus
    />
    <div style={{ height: 40 }}>
      {errors?.name && <p>{errors?.name?.message || "введи норм имя!"}</p>}
    </div>
    <TextField
      margin="normal"
      type="text"
      {...register("", {
        minLength: {
          value: 2,
          message: "name не должны быть короче 2 символов",
        },
      })}
      required
      fullWidth
      id="name"
      label="Введите свое имя"
      autoComplete="name"
      autoFocus
    />
    <div style={{ height: 40 }}>
      {errors?.name && <p>{errors?.name?.message || "введи норм имя!"}</p>}
    </div>
    <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Изменить свои данные
          </Button>
    </form>
  );
}

export default AddressForm;

