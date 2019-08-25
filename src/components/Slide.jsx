import React, { useRef } from "react"
import styles from "./Slide.module.scss"

function Slide(props) {
  const current = props.current
  const index = props.slide.index

  console.log(current, index)
  const headline = props.slide.headline
  const button = props.slide.button
  const slideRef = useRef()

  const handleMouseMove = e => {
    const el = slideRef.current
    const r = el.getBoundingClientRect()

    el.style.setProperty("--x", e.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty("--y", e.clientY - (r.top + Math.floor(r.height / 2)))
  }

  const handleMouseLeave = e => {
    slideRef.current.style.setProperty("--x", 0)
    slideRef.current.style.setProperty("--y", 0)
  }
  const handleSlideClick = () => {}
  const imageLoaded = e => {
    e.target.style.opacity = 1
  }

  const handleClassName = (current, index) => {
    let className = styles.slide
    if (current === index) {
      className += " " + styles.slideCurrent
    } else if (current - 1 === index) {
      className += " " + styles.slidePrevious
    } else if (current + 1 === index) {
      className += " " + styles.slideNext
    }
    return className
  }

  return (
    <div>
      <li
        ref={slideRef}
        className={handleClassName(current, index)}
        onClick={handleSlideClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.imageWrapper}>
          <img
            className={styles.slideImage}
            alt={props.slide.headline}
            src={props.slide.src}
            onLoad={imageLoaded}
          />
        </div>
        <article className={styles.slideContent}>
          <h2 className={styles.headline}>{headline}</h2>
          <button className={[styles.action, styles.btn].join(" ")}>
            {button}
          </button>
        </article>
      </li>
    </div>
  )
}
export default Slide
