import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface HomeProps {
  onNavigate: (page: 'home' | 'courses' | 'knowledge' | 'profile' | 'quiz') => void;
}

export function Home({ onNavigate }: HomeProps) {
  const stats = [
    { label: 'Обучено сотрудников', value: '24', icon: 'Users', color: 'text-primary' },
    { label: 'Часов обучения', value: '312', icon: 'Clock', color: 'text-secondary' },
    { label: 'Получено сертификатов', value: '18', icon: 'Award', color: 'text-accent' },
    { label: 'Средний балл команды', value: '4.7', icon: 'Star', color: 'text-yellow-600' },
  ];

  const activeTrainings = [
    { id: 1, title: 'Стандарты обслуживания гостей', progress: 75, employees: 8, completed: 6 },
    { id: 2, title: 'Винная карта и сомелье', progress: 45, employees: 4, completed: 2 },
    { id: 3, title: 'Техника безопасности на кухне', progress: 90, employees: 12, completed: 11 },
  ];

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Добро пожаловать в HoReCa Academy!</h1>
          <p className="text-muted-foreground text-lg">Управляйте обучением команды ресторана</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                <Icon name={stat.icon} className={stat.color} size={20} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" className="text-primary" />
                Активные программы обучения
              </CardTitle>
              <CardDescription>Текущие курсы для команды</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeTrainings.map((training) => (
                <div key={training.id} className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{training.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {training.completed} из {training.employees} сотрудников завершили
                      </p>
                    </div>
                    <span className="text-2xl font-bold text-primary">{training.progress}%</span>
                  </div>
                  <Progress value={training.progress} className="h-2" />
                </div>
              ))}
              <Button onClick={() => onNavigate('courses')} className="w-full" size="lg">
                <Icon name="GraduationCap" className="mr-2" size={20} />
                Все программы обучения
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" className="text-accent" />
                  План на месяц
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Обучить 10 сотрудников</span>
                      <span className="font-semibold">7/10</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Еще 3 сотрудника до достижения цели!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ClipboardCheck" />
                  Проверка знаний
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 opacity-90">
                  Проведите тестирование сотрудников по пройденным темам
                </p>
                <Button onClick={() => onNavigate('quiz')} variant="secondary" className="w-full">
                  Создать тест
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" />
              Рекомендуемые курсы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Управление конфликтами с гостями', category: 'Сервис', duration: '4 часа', icon: 'MessageSquare' },
                { title: 'Современные техники приготовления', category: 'Кухня', duration: '8 часов', icon: 'ChefHat' },
                { title: 'Барное дело и миксология', category: 'Бар', duration: '6 часов', icon: 'Wine' },
              ].map((rec, index) => (
                <div key={index} className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-3 flex items-center justify-center">
                    <Icon name={rec.icon} size={40} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1">{rec.title}</h4>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{rec.category}</span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {rec.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}