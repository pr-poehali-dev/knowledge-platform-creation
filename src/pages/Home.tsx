import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface HomeProps {
  onNavigate: (page: 'home' | 'courses' | 'knowledge' | 'profile' | 'quiz') => void;
}

export function Home({ onNavigate }: HomeProps) {
  const stats = [
    { label: 'Пройдено курсов', value: '12', icon: 'BookCheck', color: 'text-primary' },
    { label: 'Часов обучения', value: '156', icon: 'Clock', color: 'text-secondary' },
    { label: 'Получено сертификатов', value: '8', icon: 'Award', color: 'text-accent' },
    { label: 'Текущий рейтинг', value: '4.8', icon: 'Star', color: 'text-yellow-500' },
  ];

  const recentCourses = [
    { id: 1, title: 'Основы веб-разработки', progress: 75, lessons: 24, completed: 18 },
    { id: 2, title: 'JavaScript продвинутый', progress: 45, lessons: 32, completed: 14 },
    { id: 3, title: 'React и современный фронтенд', progress: 60, lessons: 28, completed: 17 },
  ];

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Добро пожаловать на платформу!</h1>
          <p className="text-muted-foreground text-lg">Продолжайте обучение и достигайте новых высот</p>
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
                Продолжить обучение
              </CardTitle>
              <CardDescription>Ваши активные курсы</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {course.completed} из {course.lessons} уроков пройдено
                      </p>
                    </div>
                    <span className="text-2xl font-bold text-primary">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              ))}
              <Button onClick={() => onNavigate('courses')} className="w-full" size="lg">
                <Icon name="BookOpen" className="mr-2" size={20} />
                Все курсы
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" className="text-accent" />
                  Цель недели
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Пройти 5 уроков</span>
                      <span className="font-semibold">3/5</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Еще 2 урока до достижения цели!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Zap" />
                  Пройди тест
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 opacity-90">
                  Проверь свои знания по последним пройденным темам
                </p>
                <Button onClick={() => onNavigate('quiz')} variant="secondary" className="w-full">
                  Начать тестирование
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Lightbulb" className="text-yellow-500" />
              Рекомендации для вас
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'TypeScript для начинающих', category: 'Программирование', duration: '8 часов' },
                { title: 'UI/UX дизайн основы', category: 'Дизайн', duration: '6 часов' },
                { title: 'Алгоритмы и структуры данных', category: 'Программирование', duration: '12 часов' },
              ].map((rec, index) => (
                <div key={index} className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-3 flex items-center justify-center">
                    <Icon name="BookOpen" size={40} className="text-primary" />
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
