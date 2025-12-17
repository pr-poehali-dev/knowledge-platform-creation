import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export function Profile() {
  const certificates = [
    { id: 1, title: 'Основы веб-разработки', date: '15 янв 2025', grade: 'Отлично' },
    { id: 2, title: 'JavaScript ES6+', date: '28 дек 2024', grade: 'Хорошо' },
    { id: 3, title: 'Git и контроль версий', date: '10 дек 2024', grade: 'Отлично' },
    { id: 4, title: 'Адаптивная верстка', date: '02 дек 2024', grade: 'Отлично' },
  ];

  const skills = [
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 75, category: 'Frontend' },
    { name: 'React', level: 60, category: 'Frontend' },
    { name: 'TypeScript', level: 45, category: 'Frontend' },
    { name: 'Node.js', level: 50, category: 'Backend' },
    { name: 'SQL', level: 40, category: 'Backend' },
  ];

  const achievements = [
    { icon: 'Award', title: 'Первый курс', description: 'Завершить первый курс', unlocked: true },
    { icon: 'Target', title: 'Целеустремленный', description: 'Пройти 10 курсов', unlocked: true },
    { icon: 'Flame', title: 'Постоянство', description: 'Учиться 30 дней подряд', unlocked: false },
    { icon: 'Star', title: 'Отличник', description: 'Получить 5 отличных оценок', unlocked: false },
    { icon: 'Trophy', title: 'Чемпион', description: 'Войти в топ-10 учеников', unlocked: false },
    { icon: 'Zap', title: 'Быстрый старт', description: 'Пройти 5 тестов за неделю', unlocked: true },
  ];

  const activityData = [
    { month: 'Окт', hours: 12 },
    { month: 'Ноя', hours: 18 },
    { month: 'Дек', hours: 24 },
    { month: 'Янв', hours: 30 },
  ];

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Avatar className="w-32 h-32">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary text-primary-foreground text-4xl">ИИ</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-3xl font-bold mb-1">Иван Иванов</h1>
                  <p className="text-muted-foreground">student@edu.ru</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="default" className="text-sm">
                    <Icon name="Trophy" size={14} className="mr-1" />
                    Топ-50 учеников
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Icon name="Flame" size={14} className="mr-1" />
                    Стрик 12 дней
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    С нами с октября 2024
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {[
                    { label: 'Курсов пройдено', value: '12', icon: 'BookCheck' },
                    { label: 'Часов обучения', value: '156', icon: 'Clock' },
                    { label: 'Сертификатов', value: '8', icon: 'Award' },
                    { label: 'Средний балл', value: '4.8', icon: 'Star' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                      <Icon name={stat.icon} size={20} className="mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-accent" />
                  Навыки и прогресс
                </CardTitle>
                <CardDescription>Ваше развитие по направлениям</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Code" size={18} className="text-blue-500" />
                      Frontend
                    </h4>
                    <div className="space-y-3">
                      {skills.filter(s => s.category === 'Frontend').map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{skill.name}</span>
                            <span className="font-semibold">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Database" size={18} className="text-green-500" />
                      Backend
                    </h4>
                    <div className="space-y-3">
                      {skills.filter(s => s.category === 'Backend').map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{skill.name}</span>
                            <span className="font-semibold">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart" className="text-primary" />
                  Активность
                </CardTitle>
                <CardDescription>Часов обучения за последние месяцы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between gap-4 h-48">
                  {activityData.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-primary/20 rounded-t-lg relative" style={{ height: `${(item.hours / 30) * 100}%` }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary to-secondary rounded-t-lg flex items-start justify-center pt-2">
                          <span className="text-white text-xs font-semibold">{item.hours}ч</span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.month}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" className="text-accent" />
                  Сертификаты
                </CardTitle>
                <CardDescription>{certificates.length} получено</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {certificates.map((cert) => (
                  <div key={cert.id} className="p-3 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Medal" size={20} className="text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm leading-tight mb-1">{cert.title}</h4>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{cert.date}</span>
                          <Badge variant={cert.grade === 'Отлично' ? 'default' : 'secondary'} className="text-xs">
                            {cert.grade}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать все
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Trophy" className="text-primary" />
                  Достижения
                </CardTitle>
                <CardDescription>
                  {achievements.filter(a => a.unlocked).length} из {achievements.length}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
                        achievement.unlocked
                          ? 'bg-accent/10 border-accent cursor-pointer hover:scale-105'
                          : 'bg-muted/30 border-muted opacity-40'
                      }`}
                      title={achievement.description}
                    >
                      <Icon
                        name={achievement.icon}
                        size={24}
                        className={achievement.unlocked ? 'text-accent' : 'text-muted-foreground'}
                      />
                      <span className="text-xs font-medium mt-2 text-center leading-tight">
                        {achievement.title}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
