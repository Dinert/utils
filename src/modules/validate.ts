import tools from './tools'

/**
 * 非负浮点型
 * @param value string
 * @returns boolean
 */
const onlyFloat = (value: number) => {
  const strValue = String(value)
  return !/^\d+(\.\d+)?$/.test(strValue)
}

/**
 * 仅限数字
 * @param value number
 * @returns boolean
 */
const onlyNumber = (value: number) => {
  const strValue = String(value)
  return !/^[0-9]*$/.test(strValue)
}

/**
 * 非0正整数
 * @param value number
 * @returns boolean
 */
const onlyPositiveNumber = (value: number) => {
  const strValue = String(value)
  return !/^[0-9]*$/.test(strValue)
}

/**
 * 英文
 * @param value number
 * @returns boolean
 */
const onlyLetter = (value: string) => {
  return !/^[A-Za-z]+$/.test(value)
}

/**
 * 英文加数字
 * @param value number
 * @returns boolean
 */
const onlyLetterAndNumber = (value: string) => {
  return !/^[A-Za-z0-9]+$/.test(value)
}

/**
 * 邮箱
 * @param value number
 * @returns boolean
 */
const onlyEmail = (value: string) => {
  return !/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)
}

/**
 * 手机
 * @param value number
 * @returns boolean
 */
const onlyPhone = (value: string) => {
  return !/^1[3|4|5|8][0-9]\d{4,8}$/.test(value)
}

/**
 * 只允许大小写中英文、数字、_、中英文括号
 * @param value number
 * @returns boolean
 */
const validInput = (value: string) => {
  return !/^[\u4E00-\u9FA5A-Za-z0-9_（）()]+$/.test(value)
}

/**
 * 只允许大小写中英文、数字、_ 4-6
 * @param value number
 * @returns boolean
 */
const userName = (value: string) => {
  return !/^[A-Za-z0-9_]{4,16}$/.test(value)
}

/**
 * 只允许大小写中英文、数字、_
 * @param value number
 * @returns boolean
 */
const password = (value: string) => {
  return !/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,20}$/.test(value)
}

/**
 * 判断是否对象
 * @param value object
 * @returns boolean
 */
const isObject = (value: Object): boolean => {
  return tools.type(value) === 'object'
}

/**
 * 判断是否数组
 * @param value object
 * @returns boolean
 */
const isArray = (value: any[]): boolean => {
  return tools.type(value) === 'array'
}

/**
 * 判断是否为空
 * @param value any
 * @returns boolean
 */
const isEmpty = (value: any): boolean => {
  if(!value || value === true) {
    return true
  }
  if(tools.type(value) === 'object') {
    return JSON.stringify(value) === '{}'
  }else if(tools.type(value) === 'array') {
    return value.length === 0
  }
  return false
}



export default {
  onlyFloat,
  onlyNumber,
  onlyPositiveNumber,
  onlyLetter,
  onlyLetterAndNumber,
  onlyEmail,
  onlyPhone,
  validInput,
  userName,
  password,
  isObject,
  isArray,
  isEmpty
}