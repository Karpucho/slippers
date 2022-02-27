import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

function Profile(props) {
  const {user} = useSelector(state => state.user)
  console.log('user selector', user);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    const body = {
      email: data.email,
      password: data.password,
      role: data.role,
    };
    dispatch({ type: "FETCH_UPDATE_USER", payload: body });
    // console.log(body);
  };

  return (
    <>
      <div>
        <h1>Ваш личный кабинет</h1>
        <h3>Ваши заказы</h3>
        <h3>Изменить профиль</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3> Изменить данные</h3>
        <label>
          Сменить роль
          <input
            type="text"
            {...register("role", {
              required: "Введите имя",
              minLength: {
                value: 2,
                message: "role не должны быть короче 2 символов",
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.role && <p>{errors?.role?.message || "Eror!"}</p>}
        </div>
        <label>
          Обновить email
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
        </div>
        <button type="submit">Изменить свои данные</button>
      </form>
    </>
  );
}

export default Profile;
