import { Home, Inbox } from 'lucide-react';
import { NavLink, useMatch } from 'react-router';
import { ThemeToggle } from './theme-toggle';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from './ui/sidebar';

export const navItems = [
  {
    title: 'Home',
    icon: Home,
    url: '/',
  },
  {
    title: 'About',
    icon: Inbox,
    url: '/about',
  },
];

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const match = useMatch(location.pathname);
  console.log(match);

  return (
    <Sidebar {...props}>
      <SidebarHeader className="py-4 px-3">My Site</SidebarHeader>
      <SidebarContent className="px-3">
        {navItems.map((item) => (
          <SidebarMenuItem key={item.title} className="list-none">
            <SidebarMenuButton asChild isActive={match?.pathname === item.url}>
              <NavLink to={item.url} className={({ isActive }) => `${isActive ? 'active' : ''}`}>
                <item.icon />
                <span>{item.title}</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <div className="flex justify-end px-3 md:hidden">
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
