import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function Profile(props) {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    changeProfile,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  
  return (
    <>
      <div>
        <h1>Ваш личный кабинет</h1>
        <h3>Ваши заказы</h3>
        <h3>Изменить профиль</h3>
      </div>
      <form onSubmit={changeProfile}>
        <h3> Зарегься чтобы мы доставили тапочки</h3>
        <label>
          Name
          <input
            type="text"
            {...register("name", {
              required: "Введите имя",
              minLength: {
                value: 2,
                message: "Имя не должны быть короче 2 символов",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.name && <p>{errors?.name?.message || "Eror!"}</p>}
        </div>
        <label>
          Email
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.email && (
            <p>{errors?.email?.message || "Введите действительную почту"}</p>
          )}
        </div>
        <label>
          Задайте пароль
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
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
}

export default Profile;
