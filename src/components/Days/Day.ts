import dayjs from 'dayjs'

import 'dayjs/locale/ru'
import arraySupport from 'dayjs/plugin/arraySupport'
import duration from 'dayjs/plugin/duration'
import updateLocale from 'dayjs/plugin/updateLocale'

dayjs.extend(duration)
dayjs.extend(updateLocale)
dayjs.extend(arraySupport)

const daysInWeek = 7
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5]

const Month = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
}

export const isLeapYear = (year: number) => {
  return !(year % 4 || (!(year % 100) && year % 400))
}

export const getDaysInMonth = (date: number | any) => {
  const month = dayjs(date).get('month')
  const year = dayjs(date).get('year')
  const dayInMonth = daysInMonth[month]

  if (isLeapYear(year) && month === Month.February) {
    return dayInMonth + 1
  } else {
    return dayInMonth
  }
}

export const getDayOfWeek = (date: number | any) => {
  const dayOfWeek = dayjs(date).day()
  return dayOfWeek
}

export const getMonthDate = (year: number, month: number) => {
  const result: any = []
  const date = dayjs([year, month])
  const daysInMonths = getDaysInMonth(date)
  const monthStartsOn = getDayOfWeek(date)

  let day = 1

  for (let i = 0; i < (daysInMonths + monthStartsOn) / daysInWeek; i++) {
    result[i] = []

    for (let j = 0; j < daysInWeek; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonths) {
        result[i][j] = undefined
      } else {
        let days = day++
        result[i][j] = dayjs([year, month, days])
      }
    }
  }

  return result
}
