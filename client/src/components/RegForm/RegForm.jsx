import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function RegForm(props) {
  // const inputName = useRef();
  // const inputEmail = useRef();
  // const inputPassword = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    console.log(body);
    
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error());
  };

  // const navigate = useNavigate();

  // function register(event) {
  //   event.preventDefault();
  //   const user = {
  //     name: inputName.current.value,
  //     email: inputEmail.current.value,
  //     password: inputPassword.current.value,
  //   }
  //   fetch('http://localhost:4000/registration',
  //   {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     credentials: 'include',
  //     body: JSON.stringify(user),
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(console.error())

  //   navigate('/')

  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3> Зарегься чтобы мы доставили тапочки</h3>
      <label>
        First Name
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

    // <form>

    //     <input ref={inputName} placeholder='name'/>
    //     <input ref={inputEmail} placeholder='email'/>
    //     <input ref={inputPassword} placeholder='password'/>
    //     <button onClick={register}>Рега</button>

    // </form>
  );
}

export default RegForm;
