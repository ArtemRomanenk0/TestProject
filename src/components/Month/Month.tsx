import dayjs, { Dayjs } from 'dayjs'

import 'dayjs/locale/ru'

import updateLocale from 'dayjs/plugin/updateLocale'
import styles from './StyleFileName.module.scss'
import { testFunc } from '../Days/Day'
import { useState } from 'react'

export const MonthData = () => {
  dayjs.extend(updateLocale)

  dayjs.updateLocale('ru', {
    weekdaysMin: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  })

  const [months, setMonths] = useState(0)

  const handleChangeMonth = (e: any) => {
    setMonths(e)
  }

  return (
    <div className={styles.grid}>
      <div>
        <select
          onChange={(e) => {
            handleChangeMonth(e.target.value)
          }}
        >
          {dayjs.months().map((index: string, idx: number) => (
            <option key={index} value={idx}>
              {index}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className={styles.week}>
          {dayjs.weekdaysMin().map((name: string) => (
            <div key={name} className={styles.week}>
              {name}
            </div>
          ))}
        </div>
        <div className={styles.day}>
          {testFunc(2024, months).map((date: any, index: any) =>
            date ? (
              <div className={styles.day} key={index}>
                {dayjs(date).date()}
              </div>
            ) : (
              <div className={styles.day} key={index} />
            )
          )}
        </div>
      </div>
    </div>
  )
}
