import dayjs, { Dayjs } from 'dayjs'

import 'dayjs/locale/ru'

import updateLocale from 'dayjs/plugin/updateLocale'
import styles from './StyleFileName.module.scss'
import { testFunc } from '../Days/Day'
export const YearData = () => {
  dayjs.extend(updateLocale)

  dayjs.updateLocale('ru', {
    weekdaysMin: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  })

  return (
    <div className={styles.grid}>
      {dayjs.months().map((index: string, month: number) => (
        <div className=''>
          <div key={index}>{index} </div>
          <div className={styles.week}>
            {dayjs.weekdaysMin().map((name: string, idx: number) => (
              <div key={name} className={styles.week}>
                {name}
              </div>
            ))}
          </div>
          <div className={styles.day}>
            {testFunc(2024, month).map((date: any, index: any) =>
              date ? (
                <div className={styles.day} key={index}>
                  {dayjs(date).date()}
                </div>
              ) : (
                <div className={styles.seal} key={index} />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
