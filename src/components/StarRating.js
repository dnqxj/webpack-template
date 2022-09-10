import React from "react";
import { FaStar } from 'react-icons/fa'

// 点击事件在每个小星星上监听，而触发的是父级上定义的函数（循环时，指定的参数及方法）
const Star = ({ selected = false, onSelect = f => f}) => <FaStar color={selected ? "red" : "grey" } onClick={onSelect} />

const createArray = length => [...Array(length)]

// 打造成了一个纯组件：不含状态的函数组件
export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = f => f}) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  )
}