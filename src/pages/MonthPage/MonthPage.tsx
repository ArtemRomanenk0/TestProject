import { MonthData } from 'components/Month/Month'
import routeMonth from './routes'
import './styles.scss'

export const MonthPage = () => {
  return (
    <div className='DP'>
      <MonthData/>
    </div>
  )
}

export { routeMonth }
