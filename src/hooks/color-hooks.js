import React, { createContext, useState, useContext } from "react"
import colorData from '@/data/color-data.json'
import { v4 } from 'uuid'

const ColorContext = createContext()

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData)

  const addColor = (title, color) => 
    setColors([
      {
        id: v4(),
        rating: 0,
        title,
        color
      },
      ...colors
    ])

  const rateColor = (id, rating) =>
    setColors(
      colors.map(color => (color.id === id ? { ...color, rating } : color ))
    )

  const removeColor = id => setColors(colors.filter(color => color.id !== id))

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  )
}


// 消费者的导出，本来是子级中使用时获取，直接导出了
export const useColors = () => useContext(ColorContext)
