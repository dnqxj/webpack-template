// 顺序归并函数执行
export const compose = (...fns) => (arg) => fns.reduce((res, fn) => fn(res), arg)
  