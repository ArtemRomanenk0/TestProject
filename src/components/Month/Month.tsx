import dayjs, { Dayjs } from 'dayjs'

import 'dayjs/locale/ru'

import updateLocale from 'dayjs/plugin/updateLocale'
import './styles.scss'
import { getMonthDate } from '../Days/Day'
import { useState } from 'react'

export const MonthData = () => {
  dayjs.extend(updateLocale)

  const b: string | any = dayjs.updateLocale('ru', {})
  console.log(b)
  // const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  const [months, setMonths] = useState(0)

  const handleChangeMonth = (e: any) => {
    setMonths(e)
  }

  return (
    <div >
      <select
        onChange={(e) => {
          handleChangeMonth(e.target.value)
        }}
      >
        {b.months.s.map((index: string, idx: number) => (
          <option key={index} value={idx}>
            {index}
          </option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            {b.weekdaysMin.map((name: string) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {getMonthDate(2024, months).map((week: any, index: any) => (
            <tr key={index} className='week'>
              {week.map((date: any, index: any) =>
                date ? <td key={index}>{dayjs(date).date()}</td> : <td key={index} />
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
