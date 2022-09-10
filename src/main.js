import React from "react";
import { createRoot } from 'react-dom/client'
import Menu from "./components/Menu"
import data from "./data/recipes.json"
// 直接导入样式
import "@/assets/styles/index.scss"


const container = document.getElementById('root')
const root = createRoot(container)

root.render(<Menu recipes={data} />)