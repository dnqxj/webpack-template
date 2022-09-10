import React, { useState } from "react";
import { useInput } from "@/hooks/useInput";
import { useColors } from "@/hooks/color-hooks";


export default function AddColorForm() {
  const [titleProps, setTitle] = useInput("")
  const [colorProps, setColor] = useInput("#000000")
  // 直接从上下文状态管理中获取 addColor方法，直接调用即可修改数据，无需向上传递
  const { addColor } = useColors()

  const submit = e => {
    e.preventDefault()
    addColor(titleProps.value, colorProps.value)
    setTitle("")
    setColor("")
  }

  return (
    <form>
      <input {...titleProps}  type="text" placeholder="color title..." required />
      <input {...colorProps} type="color" required />
      <button onClick={submit}>ADD</button>
    </form>
  )
}