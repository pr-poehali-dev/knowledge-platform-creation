import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export function Knowledge() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'service',
      title: 'Сервис и гостеприимство',
      icon: 'Users',
      color: 'text-blue-500',
      articles: [
        { title: 'Основы этикета официанта', views: 2134, updated: '2 дня назад' },
        { title: 'Как работать с трудными гостями', views: 1890, updated: '1 неделю назад' },
        { title: 'Стандарты обслуживания за столом', views: 3103, updated: '3 дня назад' },
        { title: 'Правила приема заказов', views: 1567, updated: '5 дней назад' },
      ],
    },
    {
      id: 'kitchen',
      title: 'Кухня и приготовление',
      icon: 'ChefHat',
      color: 'text-orange-500',
      articles: [
        { title: 'Техника безопасности на кухне', views: 4321, updated: '1 день назад' },
        { title: 'HACCP: основные принципы', views: 2876, updated: '4 дня назад' },
        { title: 'Современные техники приготовления', views: 3134, updated: '1 неделю назад' },
      ],
    },
    {
      id: 'bar',
      title: 'Бар и напитки',
      icon: 'Wine',
      color: 'text-purple-500',
      articles: [
        { title: 'Классические коктейли: рецепты', views: 2678, updated: '2 дня назад' },
        { title: 'Винная карта: как составить', views: 3345, updated: '1 неделю назад' },
        { title: 'Сочетание вина с блюдами', views: 2923, updated: '3 дня назад' },
      ],
    },
    {
      id: 'management',
      title: 'Управление и администрирование',
      icon: 'Briefcase',
      color: 'text-slate-500',
      articles: [
        { title: 'Управление персоналом ресторана', views: 3521, updated: '1 день назад' },
        { title: 'Контроль закупок и склада', views: 2234, updated: '5 дней назад' },
        { title: 'Финансовый учет в ресторане', views: 2856, updated: '2 дня назад' },
      ],
    },
    {
      id: 'hotel',
      title: 'Отельное дело',
      icon: 'Hotel',
      color: 'text-cyan-500',
      articles: [
        { title: 'Стандарты уборки номеров', views: 1987, updated: '4 дня назад' },
        { title: 'Работа службы reception', views: 2432, updated: '1 неделю назад' },
        { title: 'Протоколы безопасности гостей', views: 1765, updated: '3 дня назад' },
      ],
    },
  ];

  const popularArticles = [
    { title: 'Техника безопасности на кухне', category: 'Кухня', views: 4321 },
    { title: 'Управление персоналом ресторана', category: 'Управление', views: 3521 },
    { title: 'Винная карта: как составить', category: 'Бар', views: 3345 },
  ];

  const filteredCategories = categories.map(cat => ({
    ...cat,
    articles: cat.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(cat => cat.articles.length > 0);

  return (
    <div className="p-8 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">База знаний</h1>
          <p className="text-muted-foreground text-lg">Материалы по HoReCa: от сервиса до управления</p>
        </div>

        <div className="relative">
          <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Поиск статей и материалов..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {searchQuery === '' ? (
              <Accordion type="single" collapsible className="space-y-4">
                {categories.map((category) => (
                  <AccordionItem key={category.id} value={category.id} className="border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Icon name={category.icon} className={category.color} size={24} />
                        <div className="text-left">
                          <h3 className="font-semibold text-lg">{category.title}</h3>
                          <p className="text-sm text-muted-foreground">{category.articles.length} статей</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {category.articles.map((article, index) => (
                          <div
                            key={index}
                            className="p-3 hover:bg-accent/50 rounded-lg cursor-pointer transition-colors group"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium group-hover:text-primary transition-colors content-text">
                                  {article.title}
                                </h4>
                                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Icon name="Eye" size={14} />
                                    {article.views}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Icon name="Clock" size={14} />
                                    {article.updated}
                                  </span>
                                </div>
                              </div>
                              <Icon name="ChevronRight" className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="space-y-4">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category) => (
                    <Card key={category.id}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Icon name={category.icon} className={category.color} size={20} />
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {category.articles.map((article, index) => (
                          <div
                            key={index}
                            className="p-3 hover:bg-accent/50 rounded-lg cursor-pointer transition-colors"
                          >
                            <h4 className="font-medium content-text">{article.title}</h4>
                            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Icon name="Eye" size={14} />
                                {article.views}
                              </span>
                              <span>{article.updated}</span>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <Icon name="SearchX" size={64} className="text-muted-foreground mb-4" />
                      <p className="text-muted-foreground text-center">
                        По вашему запросу ничего не найдено
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-primary" />
                  Популярное
                </CardTitle>
                <CardDescription>Самые читаемые статьи</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm leading-tight mb-1 content-text">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-xs">{article.category}</Badge>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" size={12} />
                            {article.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" className="text-primary" />
                  Новые материалы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Каждую неделю мы добавляем новые статьи и обновляем существующие
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Bell" size={16} className="text-primary" />
                  <span>Подпишитесь на уведомления</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}