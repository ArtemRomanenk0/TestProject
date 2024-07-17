import dayjs, { Dayjs } from 'dayjs'

import 'dayjs/locale/ru'

import updateLocale from 'dayjs/plugin/updateLocale'
import './styles.scss'
import { testFunc } from '../Days/Day'

export const TestData = () => {
  dayjs.extend(updateLocale)

  const b: string | any = dayjs.updateLocale('ru', {})


  return (
    <div className='grid-container'>
      {b.months.s.map((index: string, month: number) => (
        <div className=''>
          <div key={index}>{index} </div>
          <div className='test'>
            {b.weekdaysMin.map((name: string) => (
              <div key={name} className='test'>
                {name}
              </div>
            ))}
          </div>
          <div className='sss'>
            {testFunc(2024, month).map((date: any, index: any) =>
              date ? (
                <div className='sss' key={index}>
                  {dayjs(date).date()}
                </div>
              ) : (
                <div className='sss' key={index} />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
