import React, {useState, useEffect} from "react"
import { Container, Typography, Paper, Grid } from '@mui/material';
import slide1 from "./slide1.jpeg"
import slide2 from "./slide2.jpeg"
// import slide3 from "../img/slide3.jpg"
// import slide4 from "../img/slide4.jpg"
// import slide5 from "../img/slide5.jpg"
import "./slider.css"

const img = [
  <img alt="" key={slide1} src={slide1} />,
  <img alt="" key={slide2} src={slide2} />,
  <img alt="" key={slide1} src={slide1} />,
  <img alt="" key={slide2} src={slide2} />,
  // <img key={slide3} src={slide3} />,
  // <img key={slide4} src={slide4} />,
  // <img key={slide5} src={slide5} />,
]


function Slider(props) {

  // Индекс текущего слайда
const [activeIndex, setActiveIndex] = useState(0);
 
// Хук Effect
useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
        // Меняем состояние
        setActiveIndex((current) => {
            // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === img.length - 1 ? 0 : current + 1
            // Возвращаем индекс
            return res
        })
    }, 3000)
    // Выключаем интервал
    return () => clearInterval()
}, [])
 
// Вычисляем индекс предыдущего слайда
const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// Вычисляем индекс следующего слайда
const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

  return (
    <></>
    // <Paper  style={{backgroundImage: `url(${img[prevImgIndex]})`}}>
    // <div className="slider">
    //     <div className="slider-img slider-img-prev"
    //             key={prevImgIndex}>
    //         {img[prevImgIndex]}
    //     </div>
    //     <div className="slider-img"
    //             key={activeIndex}>
    //         {img[activeIndex]}
    //     </div>
    //     <div className="slider-img slider-img-next"
    //             key={nextImgIndex}>
    //         {img[nextImgIndex]}
    //     </div>
    // </div>
    // </Paper>
  );
}

export default Slider;