
import { DayData } from 'components/Day/Day'
import routeDay from './routes'
import './styles.scss'

export const DayPage = () => {
  return (
    <div className='TP'>
      <DayData/>
    </div>
  )
}

export { routeDay }
