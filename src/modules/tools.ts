

/**
 * 开发、生产环境的区分函数
 * @param devValue => 开发环境返回的参数
 * @param ProValue => 生产环境返回的参数
 */
const devPro = (devValue: any, ProValue: any) => {
  if(process && process.env && process.env.NODE_ENV) {
    if(process.env.NODE_ENV === 'development') {
      return typeof devValue === 'function' ? devValue() : devValue
    }else {
      return typeof ProValue === 'function' ? ProValue() : ProValue
    }
  }
}

/** 
 * 防抖
 * @param fn 事件触发的操作
 * @param delay 多少毫秒内连续触发事件，不会执行
 * @param immediate 返回函数的执⾏结果。
*/
const debounce = (fn: () => {}, delay: number = 0, immediate: boolean = false) => {
  let timer
  let result
  return function (...args) {
    if (timer) {clearTimeout(timer)}

    if (immediate) {
      if (timer) {
        timer = setTimeout(() => (timer = null), delay)
      } else {
        result = fn.apply(this, args)
        console.log(result, 'aaaaaaa')
        return result
      }
    } else {
      timer = setTimeout(() => fn.apply(this, args), delay)
    }
  }
}

/**
 * 判断类型
 * @param type 
 * @returns string
 */
const type = (type) => {
  return Object.prototype.toString
    .call(type)
    .split(' ')[1]
    .split(']')[0]
    .toLocaleLowerCase()
}

/**
 * 浏览器的各种存储
 * @param name 存储名：localStorage、sessionStorage
 * @param key 键名
 * @param value 必须是对象
 * @returns void
 */
export const storage = (name = 'session', key: string, value: object): void => {
  if (key === 'remove') {
    return window[name].removeItem(value)
  } else if (key === 'clear') {
    return window[name].clear()
  } else if (value) {
    return window[name].setItem(`dinert-${key}`, JSON.stringify(value))
  } else {
    return JSON.parse(window[name].getItem(`dinert-${key}`))
  }
}


export default {
  devPro,
  debounce,
  type,
  storage
}