import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  Интенсив 2025
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
                  Нейросети 2025:<br />
                  <span className="text-primary">Для бизнеса, карьеры и дохода</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Освойте ИИ-технологии будущего за 7 дней и увеличьте свой доход до 300%
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Calendar" className="text-primary" size={20} />
                  <span className="text-lg">Старт: 20 января 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-primary" size={20} />
                  <span className="text-lg">7 дней интенсивного обучения</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" className="text-primary" size={20} />
                  <span className="text-lg">Осталось 47 мест</span>
                </div>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">Стоимость:</span>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">15 000 ₽</div>
                    <div className="text-3xl font-bold text-primary">2 990 ₽</div>
                  </div>
                </div>
                <Button size="lg" className="w-full text-lg font-semibold">
                  Записаться на интенсив
                </Button>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Скидка действует только до 15 января
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/a85b207a-8cd4-48b7-b695-c3c965123e3e.jpg" 
                  alt="Нейросети для бизнеса" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Что вы получите на интенсиве</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Практические навыки работы с нейросетями, которые принесут реальный доход
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brain" className="text-primary" size={24} />
                </div>
                <CardTitle>ChatGPT для бизнеса</CardTitle>
                <CardDescription>
                  Научитесь использовать ChatGPT для автоматизации рутинных задач и увеличения продуктивности в 5 раз
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Image" className="text-secondary" size={24} />
                </div>
                <CardTitle>ИИ для креатива</CardTitle>
                <CardDescription>
                  Создавайте уникальные изображения, видео и контент с помощью Midjourney, DALL-E и других ИИ-инструментов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-accent" size={24} />
                </div>
                <CardTitle>Монетизация навыков</CardTitle>
                <CardDescription>
                  5 способов заработка на ИИ-навыках: от фриланса до запуска собственного ИИ-продукта
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Code" className="text-primary" size={24} />
                </div>
                <CardTitle>Автоматизация процессов</CardTitle>
                <CardDescription>
                  Настройте ИИ-помощников для вашего бизнеса и сократите время на повторяющиеся задачи
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" className="text-secondary" size={24} />
                </div>
                <CardTitle>Чат-боты и помощники</CardTitle>
                <CardDescription>
                  Создайте ИИ-чат-бота для своего бизнеса за 1 день без программирования
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-accent" size={24} />
                </div>
                <CardTitle>Безопасность и этика</CardTitle>
                <CardDescription>
                  Работайте с ИИ безопасно: защита данных, этические принципы и правовые аспекты
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Программа интенсива</h2>
            <p className="text-xl text-muted-foreground">
              7 дней практического обучения с домашними заданиями
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                day: 1,
                title: "Введение в нейросети",
                description: "Основы ИИ, обзор популярных инструментов, первые практические задания"
              },
              {
                day: 2,
                title: "ChatGPT и текстовые ИИ",
                description: "Промпт-инжиниринг, создание контента, автоматизация текстовых задач"
              },
              {
                day: 3,
                title: "Визуальные нейросети",
                description: "Midjourney, DALL-E, Stable Diffusion - создание изображений для бизнеса"
              },
              {
                day: 4,
                title: "ИИ для видео и аудио",
                description: "Создание видеоконтента, озвучка, монтаж с помощью нейросетей"
              },
              {
                day: 5,
                title: "Автоматизация бизнес-процессов",
                description: "Интеграция ИИ в рабочие процессы, создание автоматических воронок"
              },
              {
                day: 6,
                title: "Создание ИИ-продуктов",
                description: "Разработка чат-ботов, ИИ-сервисов, настройка под конкретные задачи"
              },
              {
                day: 7,
                title: "Монетизация и масштабирование",
                description: "Стратегии заработка, поиск клиентов, построение ИИ-бизнеса"
              }
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {item.day}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-base mt-1">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Записаться на интенсив</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Заполните форму и получите доступ к материалам курса
            </p>
            
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" className="text-lg p-6" />
                    <Input placeholder="Email" type="email" className="text-lg p-6" />
                  </div>
                  <Input placeholder="Номер телефона" type="tel" className="text-lg p-6" />
                  
                  <div className="bg-muted/50 rounded-lg p-6 text-left">
                    <h3 className="font-semibold mb-3">Вы получите:</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-accent" size={16} />
                        <span>Доступ к 7 урокам интенсива</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-accent" size={16} />
                        <span>Практические домашние задания</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-accent" size={16} />
                        <span>Чек-листы и шаблоны для работы</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="text-accent" size={16} />
                        <span>Сертификат о прохождении курса</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full text-lg font-semibold py-6">
                    Записаться за 2 990 ₽
                  </Button>
                  
                  <p className="text-sm text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Отзывы участников</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят выпускники наших курсов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                role: "Предприниматель",
                text: "За месяц после курса увеличила прибыль на 40% благодаря автоматизации с помощью ChatGPT"
              },
              {
                name: "Михаил Сидоров", 
                role: "Маркетолог",
                text: "Теперь создаю креативы для соцсетей за 10 минут вместо нескольких часов"
              },
              {
                name: "Елена Кузнецова",
                role: "Фрилансер",
                text: "Запустила собственный ИИ-сервис и зарабатываю 150k в месяц"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Не упустите возможность</h2>
          <p className="text-xl mb-8 opacity-90">
            Интенсив стартует 20 января. Осталось всего 47 мест!
          </p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold">15</div>
              <div className="text-sm opacity-75">дней</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">7</div>
              <div className="text-sm opacity-75">часов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">42</div>
              <div className="text-sm opacity-75">минуты</div>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="text-lg font-semibold px-8 py-6">
            Записаться сейчас
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;