import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface CoursesProps {
  onNavigate: (page: 'home' | 'courses' | 'knowledge' | 'profile' | 'quiz') => void;
}

export function Courses({ onNavigate }: CoursesProps) {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: 'Основы веб-разработки',
      description: 'Изучите HTML, CSS и основы JavaScript для создания современных веб-сайтов',
      progress: 75,
      lessons: 24,
      completed: 18,
      duration: '40 часов',
      level: 'Начинающий',
      category: 'Программирование',
      instructor: 'Анна Петрова',
    },
    {
      id: 2,
      title: 'JavaScript продвинутый',
      description: 'Погрузитесь в асинхронное программирование, замыкания и прототипы',
      progress: 45,
      lessons: 32,
      completed: 14,
      duration: '60 часов',
      level: 'Средний',
      category: 'Программирование',
      instructor: 'Дмитрий Соколов',
    },
    {
      id: 3,
      title: 'React и современный фронтенд',
      description: 'Создавайте интерактивные приложения с React, hooks и state management',
      progress: 60,
      lessons: 28,
      completed: 17,
      duration: '50 часов',
      level: 'Средний',
      category: 'Программирование',
      instructor: 'Мария Иванова',
    },
    {
      id: 4,
      title: 'UI/UX Дизайн',
      description: 'Основы проектирования интерфейсов и пользовательского опыта',
      progress: 0,
      lessons: 20,
      completed: 0,
      duration: '35 часов',
      level: 'Начинающий',
      category: 'Дизайн',
      instructor: 'Ольга Смирнова',
    },
    {
      id: 5,
      title: 'Python для анализа данных',
      description: 'Pandas, NumPy и визуализация данных с Matplotlib',
      progress: 0,
      lessons: 26,
      completed: 0,
      duration: '45 часов',
      level: 'Средний',
      category: 'Data Science',
      instructor: 'Алексей Волков',
    },
  ];

  const activeCourses = courses.filter(c => c.progress > 0);
  const availableCourses = courses.filter(c => c.progress === 0);

  const renderCourseCard = (course: typeof courses[0]) => (
    <Card 
      key={course.id} 
      className="hover:shadow-lg transition-all cursor-pointer"
      onClick={() => setSelectedCourse(course.id)}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant={course.progress > 0 ? 'default' : 'secondary'}>
            {course.level}
          </Badge>
          <Badge variant="outline">{course.category}</Badge>
        </div>
        <CardTitle className="text-xl">{course.title}</CardTitle>
        <CardDescription className="content-text">{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Icon name="BookOpen" size={16} />
              <span>{course.lessons} уроков</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={16} />
              <span>{course.duration}</span>
            </div>
          </div>
          
          {course.progress > 0 && (
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Прогресс</span>
                <span className="font-semibold">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="User" size={16} />
            <span>{course.instructor}</span>
          </div>

          <Button className="w-full" variant={course.progress > 0 ? 'default' : 'outline'}>
            {course.progress > 0 ? 'Продолжить' : 'Начать курс'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Мои курсы</h1>
            <p className="text-muted-foreground text-lg">Управляйте своим обучением</p>
          </div>
          <Button size="lg" onClick={() => onNavigate('quiz')}>
            <Icon name="PlayCircle" className="mr-2" />
            Пройти тест
          </Button>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="active">
              <Icon name="Play" size={16} className="mr-2" />
              Активные ({activeCourses.length})
            </TabsTrigger>
            <TabsTrigger value="available">
              <Icon name="Library" size={16} className="mr-2" />
              Доступные ({availableCourses.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-6">
            {activeCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCourses.map(renderCourseCard)}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Icon name="BookOpen" size={64} className="text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    У вас пока нет активных курсов. Начните обучение!
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="available" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableCourses.map(renderCourseCard)}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Trophy" className="text-primary" />
              Достижения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: 'Award', label: 'Первый курс', completed: true },
                { icon: 'Target', label: '10 курсов', completed: true },
                { icon: 'Flame', label: '30 дней подряд', completed: false },
                { icon: 'Star', label: 'Отличник', completed: false },
              ].map((achievement, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center p-4 rounded-lg border ${
                    achievement.completed 
                      ? 'bg-accent/10 border-accent' 
                      : 'bg-muted/50 border-muted opacity-50'
                  }`}
                >
                  <Icon 
                    name={achievement.icon} 
                    size={32} 
                    className={achievement.completed ? 'text-accent' : 'text-muted-foreground'} 
                  />
                  <span className="text-sm font-medium mt-2 text-center">{achievement.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
