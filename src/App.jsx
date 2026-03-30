import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return <RouterProvider router={router(theme, setTheme)} />
}

export default App