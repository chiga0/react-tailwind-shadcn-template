import { BrowserRouter } from 'react-router';
import { AppSidebar } from './components/app-sidebar';
import { SiteHeader } from './components/site-header';
import { ThemeProvider } from './components/theme-provider';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar';
import Pages from './pages';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <SiteHeader />
            <main className="flex flex-1 flex-col p-4">
              <Pages />
            </main>
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
