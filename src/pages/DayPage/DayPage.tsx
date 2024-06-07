import { MonthData } from 'components/Month/Month'
import routeMain from './routes'
import './styles.scss'

export const DayPage = () => {
  return (
    <div className='DP'>
      <MonthData/>
    </div>
  )
}

export { routeMain }
