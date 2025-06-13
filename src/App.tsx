import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "./components/theme-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ThemeToggle />
    </ThemeProvider>
  )
}

export default App