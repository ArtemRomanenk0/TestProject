import dayjs from 'dayjs'
import routeMain from './routes'
import './styles.scss'

import { YearData } from 'components/Year/Year'


export const MainPage = () => {
  

  return (
    <div className='MP'>
      <YearData />
    </div>
  )
}

export { routeMain }
