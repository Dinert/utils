/**
 * 风向转文字
 * @param num number 
 * @returns string
 */
const degToCompass = (num: number): string => {
  let newNum = 0
  let directionText = ''
  if ((num >= 348.76 && num <= 360) || (num >= 0 && num <= 11.25)) {
    directionText = '北风'
  } else if (num >= 11.26 && num <= 33.75) {
    newNum = 45 - num
    directionText = '东北偏北' + newNum.toFixed(1) + '°'
  } else if (num >= 33.76 && num <= 56.25) {
    directionText = '东北风'
  } else if (num >= 56.26 && num <= 78.75) {
    newNum = num - 45
    directionText = '东北偏东' + newNum.toFixed(1) + '°'
  } else if (num >= 78.76 && num <= 101.25) {
    directionText = '东风'
  } else if (num >= 101.26 && num <= 123.75) {
    newNum = 135 - num
    directionText = '东南偏东' + newNum.toFixed(1) + '°'
  } else if (num >= 123.76 && num <= 146.25) {
    directionText = '东南风'
  } else if (num >= 146.26 && num <= 168.75) {
    newNum = num - 135
    directionText = '东南偏南' + newNum.toFixed(1) + '°'
  } else if (num >= 168.76 && num <= 191.25) {
    directionText = '南风'
  } else if (num >= 191.26 && num <= 213.75) {
    newNum = 225 - num
    directionText = '西南偏南' + newNum.toFixed(1) + '°'
  } else if (num >= 213.76 && num <= 236.25) {
    directionText = '西南风'
  } else if (num >= 236.26 && num <= 258.75) {
    newNum = num - 225
    directionText = '西南偏西' + newNum.toFixed(1) + '°'
  } else if (num >= 258.76 && num <= 281.25) {
    directionText = '西风'
  } else if (num >= 281.26 && num <= 303.75) {
    newNum = 315 - num
    directionText = '西北偏西' + newNum.toFixed(1) + '°'
  } else if (num >= 303.76 && num <= 326.25) {
    directionText = '西北风'
  } else if (num >= 326.26 && num <= 348.75) {
    newNum = num - 315
    directionText = '西北偏北' + newNum.toFixed(1) + '°'
  }
  return directionText
}

export default {
  degToCompass
}