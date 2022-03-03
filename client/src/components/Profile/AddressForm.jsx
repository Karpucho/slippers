import React from "react";
import { Container, Typography, Grid, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

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
      name: data.name,
      address: data.address,
      phone: data.phone,
    };
    dispatch({type:'FETCH_ORDER_SEND', payload:body});
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        type="text"
        {...register("name", {
          minLength: {
            value: 3,
            message: "ФИО не должны быть короче 3 символов",
          },
        })}
        required
        fullWidth
        id="name"
        label="Укажите ФИО для получения посылки"
        autoComplete="name"
        autoFocus
      />
      <div style={{ height: 40 }}>
        {errors?.name && (
          <p>{errors?.name?.message || "введи действительное имя!"}</p>
        )}
      </div>
      <TextField
        margin="normal"
        type="text"
        {...register("Почтовый адрес доставки", {
          minLength: {
            value: 2,
            message: "Введите действительный адрес доставки",
          },
        })}
        required
        fullWidth
        id="address"
        label="Почтовый адрес доставки"
        autoComplete="address"
        autoFocus
      />
      <div style={{ height: 40 }}>
        {errors?.address && (
          <p>
            {errors?.address?.message ||
              "Введите действительный адрес доставки!"}
          </p>
        )}
      </div>
      <TextField
        margin="normal"
        type="text"
        {...register("phone", {
          minLength: {
            value: 11,
            message: "номер телефона не может быть меньше 11",
          },
        })}
        required
        fullWidth
        id="phone"
        label="введи действительный телефон для связи!"
        autoComplete="phone"
        autoFocus
      />
      <div style={{ height: 40 }}>
        {errors?.phone && (
          <p>
            {errors?.phone?.message ||
              "введи действительный телефон для связи!"}
          </p>
        )}
      </div>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Сохранить
      </Button>
    </form>
  );
}

export default AddressForm;
