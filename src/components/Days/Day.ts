import dayjs from 'dayjs'

import { Dayjs } from 'dayjs'
import 'dayjs/locale/ru'
import arraySupport from 'dayjs/plugin/arraySupport'
import duration from 'dayjs/plugin/duration'
import updateLocale from 'dayjs/plugin/updateLocale'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(duration)
dayjs.extend(updateLocale)
dayjs.extend(arraySupport)
dayjs.extend(isLeapYear)
dayjs.extend(weekday)
dayjs.extend(localeData)

dayjs.locale('ru')




const calcGridLengthByMonth = (num: number) => {
  if (num % 7 === 0) {
    return num
  } else {
    return Math.ceil(num / 7) * 7
  }
}

const checkSunday = (num: number) => {
	if (num < 0) {
		return num = 6
	} else
	return num
}

export const testFunc = (year: number, month: number) => {
  const date = dayjs([year, month])
  const daysInMonths = dayjs(date).daysInMonth() //сколько дней в месяце, нужно для шифта
  const monthStartsOn = dayjs(date).day() //начало дня, нужно для шифта
  const correctMonthStartsOn = checkSunday(monthStartsOn - 1)
	const arrayLength = daysInMonths + correctMonthStartsOn 
console.log(correctMonthStartsOn)

  const test = Array.from(Array(calcGridLengthByMonth(arrayLength)), (day, index) =>
    index + 1 > correctMonthStartsOn && index < daysInMonths + correctMonthStartsOn
      ? dayjs([year, month, index + 1 - correctMonthStartsOn])
      : null
  )

  return test
}
