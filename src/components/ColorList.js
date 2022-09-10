import React from "react"
import Color from "./Color"
import { useColors } from "@/hooks/color-hooks"

export default function ColorList() {
  // 整个color-data 数据相关逻辑，已集合放到color-hooks 中，现在从中直接拿到上下文，外部已使用Provider包裹
  const { colors } = useColors()
  if(!colors.length) return <div>No Colors Listed.</div>
  return (
    <div className="color-list">
      {
        colors.map(color => <Color key={color.id} {...color} />)
      }
    </div>
  )
}