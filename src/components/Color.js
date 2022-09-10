import React from "react";
import StarRating from './StarRating'
import { FaTrash } from "react-icons/fa"
import { useColors } from '@/hooks/color-hooks'

export default function Color({ id, title, color, rating }) {
  // 通过 useColors() 能轻易获取到 对数据的操作，这个上下文已经在包裹在<App /> 上了，并传入了 value
  const { rateColor, removeColor } = useColors()

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color}}></div>
      <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)} />
    </section>
  )
}