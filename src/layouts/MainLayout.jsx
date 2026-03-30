import Navbar from '../components/Navbar'

function MainLayout({ children, theme, setTheme }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout