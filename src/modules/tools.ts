

/**
 * 开发、生产环境的区分函数
 * @param { any } 开发的值
 * @param { any } 生产的值
 * @returns { any } 返回
 */
const devPro = (devValue: any, ProValue: any) => {
    if(process.env.NODE_ENV === 'development') {
      return typeof devValue === 'function' ? devValue() : devValue
    }else {
      return typeof ProValue === 'function' ? ProValue() : ProValue
    }
}

/** 
 * 防抖
 * @param { Function } 事件触发的操作
 * @param {number} 多少毫秒内连续触发事件，不会执行
 * @param {boolean} 返回函数的执⾏结果。
 * @returns {*}
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
 * @param {any} 
 * @returns {string}
 */
export const type = (type: any) => {
  return Object.prototype.toString
    .call(type)
    .split(' ')[1]
    .split(']')[0]
    .toLocaleLowerCase()
}

/**
 * 浏览器的各种存储
 * @param {string} 存储名：localStorage、sessionStorage
 * @param {string} 键名
 * @param {object} 必须是对象
 * @returns {void}
 */
const storage = (name: string = 'session', key: string, value: object): void => {
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

/**
 * 获取唯一ID
 * @returns {String}
 */
const getUuid = () => {
  var s = []
  var hexDigits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4'
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = '-'
  let uuid = s.join('')
  return uuid
}


export default {
  devPro,
  debounce,
  type,
  storage,
  getUuid
}