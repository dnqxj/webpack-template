import { compose } from '@/utils/index'

const fun1 = (x) => x * x
const fun2 = (x) => x + 1

const res = compose(fun1, fun2)(5)
console.log(res)
