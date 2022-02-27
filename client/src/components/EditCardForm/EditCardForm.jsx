import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


function EditCardForm(props) {
  const { id } = useParams();
  // const navigate = useNavigate();
  const dispatch = useDispatch()
 
  useEffect(()=> {
    dispatch({ type: 'FETCH_CURRENT_PRODUCT', payload:id})
  }, [dispatch, id])

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    const body = {
      name: data.name,
      price: data.price,
      gender: data.gender,
      description:data.description,
      rating:data.rating
    };
    dispatch({ type: "FETCH_UPDATE_PRODUCT", payload: {
      item: body,
      id 
    }});

  return (
    <>
    <div>
      <h3>Изменить карточку</h3>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3> Изменить данные</h3>
      <label>
        Сменить роль
        <input
          type="text"
          {...register("name", {
            required: "Введите имя",
            minLength: {
              value: 2,
              message: "name товара  не должно быть короче 2 символов",
            },
          })}
        />
      </label>
      <div style={{ height: 40 }}>
        {errors?.name && <p>{errors?.name?.message || "Eror!"}</p>}
      </div>
      <label>
        Обновить price
        <input
          type="text"
          {...register("price", {
            required: true,
           })}
        />
      </label>
      <div style={{ height: 40 }}>
        {errors?.price && (
          <p>{errors?.price?.message || "Введите норм цену"}</p>
        )}
      </div>
      <label>
        Изменить gender
        <input
          type="text"
          {...register("gender", {
            required: true,
          })}
        />
      </label>
      <div style={{ height: 40 }}>
        {errors?.gender && (
          <p>{errors?.gender?.message || "Введите пол"}</p>
        )}
      </div>
      <label>
        Изменить description
        <input
          type="text"
          {...register("description", {
            required: true,
          })}
        />
      </label>
      <div style={{ height: 40 }}>
        {errors?.description && (
          <p>{errors?.description?.message || "Введите description"}</p>
        )}
      </div>
      <label>
        Изменить rating
        <input
          type="text"
          {...register("rating", {
            required: true,
          })}
        />
      </label>
      <div style={{ height: 40 }}>
        {errors?.rating && (
          <p>{errors?.rating?.message || "Введите description"}</p>
        )}
      </div>
      <button type="submit">Изменить свои данные</button>
    </form>
  </>
  );
};

export default EditCardForm;
