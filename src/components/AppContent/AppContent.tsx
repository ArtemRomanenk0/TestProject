import { TestPage, routeMain as routeTestPage } from 'pages/TestPage/TestPage'
import { DayPage, routeMain as routeDayPage } from 'pages/DayPage/DayPage'
import { MainPage, routeMain as routeMainPage } from 'pages/MainPage/MainPage'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Sidebar } from 'shared/mui/material/sidebar'

export const AppContent = () => {
  return (
    <div className='mainWrapper'>
      <Sidebar />
      <main>
        <Routes>
          <Route path={routeMainPage()} element={<MainPage />} />
          <Route path={routeDayPage()} element={<DayPage />} />
          <Route path={routeTestPage()} element={<TestPage />} />
          <Route path='/' element={<Navigate replace to={routeMainPage()} />} />
        </Routes>
      </main>
    </div>
  )
}
