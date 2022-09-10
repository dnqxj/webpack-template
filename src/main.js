import React, { createContext } from "react";
import { createRoot } from 'react-dom/client'
import App from './App'
// 直接导入样式
import "@/assets/styles/index.scss"
// vuex，的感觉，然后从 hooks中，color-hooks中定义分模块定义数据逻辑和接口就好了
import ColorProvider from '@/hooks/color-hooks'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
)