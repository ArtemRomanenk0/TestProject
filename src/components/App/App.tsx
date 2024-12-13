import {AppContent} from 'components/AppContent/AppContent'
import { BrowserRouter } from 'react-router-dom'


export  const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

