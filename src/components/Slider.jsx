import React, { useState } from "react"
import Slide from "./Slide"
import styles from "./Slider.module.scss"

function Slider(props) {
  const slideData = props.slideData
  const [current, setCurrent] = useState(0)

  const handleSlideClick = () => {}

  return (
    <div className={styles.slider}>
      <ul className={styles.sliderWrapper}>
        {slideData.map(slide => {
          return (
            <Slide
              key={slide.index}
              slide={slide}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          )
        })}
      </ul>
    </div>
  )
}
export default Slider
