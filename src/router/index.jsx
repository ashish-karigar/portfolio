import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'

const createAppRouter = (theme, setTheme) =>
  createBrowserRouter([
    {
      path: '/',
      element: (
        <MainLayout theme={theme} setTheme={setTheme}>
          <Home theme={theme} />
        </MainLayout>
      ),
    },
  ])

export default createAppRouter