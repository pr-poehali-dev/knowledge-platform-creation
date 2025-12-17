import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Page = 'home' | 'courses' | 'knowledge' | 'profile' | 'quiz';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isAuthenticated: boolean;
}

export function Sidebar({ currentPage, onNavigate, isAuthenticated }: SidebarProps) {
  const menuItems = [
    { id: 'home' as Page, label: 'Главная', icon: 'Home' },
    { id: 'courses' as Page, label: 'Обучение', icon: 'GraduationCap' },
    { id: 'knowledge' as Page, label: 'База знаний', icon: 'BookOpen' },
    { id: 'profile' as Page, label: 'Профиль', icon: 'User' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="ChefHat" className="text-primary-foreground" size={24} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">HoReCa Academy</h1>
            <p className="text-xs text-sidebar-foreground/60">Обучение для ресторанов</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={currentPage === item.id ? 'secondary' : 'ghost'}
            className={`w-full justify-start gap-3 ${
              currentPage === item.id 
                ? 'bg-sidebar-accent text-primary' 
                : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
            }`}
            onClick={() => onNavigate(item.id)}
          >
            <Icon name={item.icon} size={20} />
            <span>{item.label}</span>
          </Button>
        ))}
      </nav>

      {isAuthenticated && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sidebar-accent/50 cursor-pointer transition-colors">
            <Avatar className="w-10 h-10">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground">МС</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Мария Смирнова</p>
              <p className="text-xs text-sidebar-foreground/60 truncate">Управляющая</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}