import dayjs, { Dayjs } from 'dayjs'

import 'dayjs/locale/ru'

import updateLocale from 'dayjs/plugin/updateLocale'
import { untilsDayDataFind } from '../../shared/untild/untilsDayDataFind'
import styles from './StyleDay.module.scss'

export const DayData = () => {
  dayjs.extend(updateLocale)

  const b: string | any = dayjs.updateLocale('ru', {})

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
            {untilsDayDataFind(2024, month).map((date: Dayjs | null, index: number) =>
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
      ))}
    </div>
  )
}
