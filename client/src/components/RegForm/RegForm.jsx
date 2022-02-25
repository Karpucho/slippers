import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function RegForm(props) {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    const body = {
      email: data.email,
      password: data.password,
      role: data.role,
    };
// console.log(body, 'БОДИ');
    const response = await fetch('http://localhost:5000/api/registration', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    }).then(data => data.json())
      .catch(console.error)

    dispatch({type: "FETCH_CREATE_USER", payload: response.userData})
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3> Зарегься чтобы мы доставили тапочки</h3>
   
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
      <div style={{ height: 20 }}>
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
      <div style={{ height: 20 }}>
        {errors?.password && (
          <p>{errors?.password?.message || "Введите корректный пароль"}</p>
        )}
      </div>
      <label>
      role
        <input
          type="text"
          {...register("role", {
            required: true,
            minLength: {
              value: 2,
              message: "Имя не должны быть короче 2 символов",
            },
          })}
        />
      </label>
      <div style={{ height: 20 }}>
        {errors?.role && <p>{errors?.role?.message || "Eror!"}</p>}
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

// function RegForm(props) {
  
//   const inputEmail = useRef();
//   const inputPassword = useRef();
//   const inputRole = useRef();

//   const navigate = useNavigate();

//   function register(event) {
//     event.preventDefault();
//     const user = {
//       email: inputEmail.current.value,
//       password: inputPassword.current.value,
//       role: inputRole.current.value,
//     }
//     fetch('http://localhost:5000/api/registration',
//     {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include',
//       body: JSON.stringify(user),
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(console.error())

//     navigate('/')

//   }

//   return (
//     <form>

//         <input ref={inputEmail} placeholder='email'/>
//         <input ref={inputPassword} placeholder='password'/>
//         <input ref={inputRole} placeholder='role'/>

//         <button onClick={register}>Рега</button>

//     </form>
//   );
// }

export default RegForm;
