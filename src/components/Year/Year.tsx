import dayjs, { Dayjs } from 'dayjs'

import 'dayjs/locale/ru'

import updateLocale from 'dayjs/plugin/updateLocale'
import './styles.scss'
import { getMonthDate } from '../Days/Day'

export const YearData = () => {
  dayjs.extend(updateLocale)

  const b: string | any = dayjs.updateLocale('ru', {})

  // const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

  return (
    <div className='container'>
      {b.months.s.map((index: string, idx: number) => (
        <div key={index}>
          {index}{' '}
          <table>
            <thead>
              <tr>
                {b.weekdaysMin.map((name: string) => (
                  <th key={name}>{name}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {getMonthDate(2024, idx).map((week: any, index: any) => (
                <tr key={index} className='week'>
                  {week.map((date: any, index: any) =>
                    date ? <td key={index}>{dayjs(date).date()}</td> : <td key={index} />
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
