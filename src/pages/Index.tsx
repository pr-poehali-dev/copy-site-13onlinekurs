import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import NeuralBackground from '@/components/NeuralBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <NeuralBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-sm font-medium bg-primary/20 text-primary border-primary/30">
                  🚀 Частный практический интенсив
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    НЕЙРОСЕТИ 2025:
                  </span>
                  <br />
                  <span className="text-foreground">ДЛЯ БИЗНЕСА, КАРЬЕРЫ</span>
                  <br />
                  <span className="text-accent">И ДОХОДА</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Без глупых заданий и теории — только практические кейсы. Научитесь использовать ИИ для реальных задач и увеличения дохода.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-lg text-muted-foreground">Старт: 20 января 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-lg text-muted-foreground">7 дней практического обучения</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-lg text-muted-foreground">Осталось 21 место</span>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
                    <span className="text-sm text-primary font-medium">🎁 БОНУС ЗА РЕГИСТРАЦИЮ!</span>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground line-through">15 000 ₽</div>
                      <div className="text-4xl font-bold text-primary">2 990 ₽</div>
                    </div>
                    <div className="w-px h-16 bg-primary/20"></div>
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground">Скидка</div>
                      <div className="text-2xl font-bold text-accent">80%</div>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="w-full text-lg font-bold py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                  ЗАПИСАТЬСЯ НА ИНТЕНСИВ
                </Button>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  ⏰ Скидка действует только до 15 января
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/2335e96f-ac5d-424f-a1f0-af4368375f17.jpg" 
                  alt="Нейросети для бизнеса" 
                  className="w-full h-auto rounded-3xl shadow-2xl border border-primary/20"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-y border-red-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-red-400">
              У ВАС БОЛЬШЕ НЕТ ВЫБОРА. УЧИТЬСЯ РАБОТЕ С НЕЙРОСЕТЯМИ ИЛИ НЕТ
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Уже сейчас нейросети заменяют сотни профессий. В ближайшие 2 года ИИ кардинально изменит рынок труда. 
              Те, кто освоит нейросети сейчас — станут востребованными специалистами. 
              Остальные — рискуют потерять работу и доходы.
            </p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">ПОЧЕМУ ЧТО С ПОМОЩЬЮ НЕЙРОСЕТЕЙ ВЫ СМОЖЕТЕ:</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6">
                  <img 
                    src="/img/e90f3a65-cd3c-4659-a370-4fe0de929f33.jpg" 
                    alt="AI Chip" 
                    className="w-20 h-20 object-cover rounded-2xl icon-3d"
                  />
                </div>
                <CardTitle className="text-xl text-primary">Подготовиться заранее для сферы соцсети</CardTitle>
                <CardDescription className="text-muted-foreground">
                  на месяц за 30 минут — создание контента, автоматизация постов, анализ аудитории
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-secondary/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6">
                  <img 
                    src="/img/e3591367-62ca-442a-886d-060a0bc4cef6.jpg" 
                    alt="Data Visualization" 
                    className="w-20 h-20 object-cover rounded-2xl icon-3d"
                  />
                </div>
                <CardTitle className="text-xl text-secondary">Создать за минуты контент</CardTitle>
                <CardDescription className="text-muted-foreground">
                  который другие делают часами — тексты, изображения, видео, презентации
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-accent/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center icon-3d">
                    <Icon name="TrendingUp" className="text-accent" size={32} />
                  </div>
                </div>
                <CardTitle className="text-xl text-accent">Разработать маркетинговые стратегии</CardTitle>
                <CardDescription className="text-muted-foreground">
                  которые приносят результат — анализ конкурентов, создание УТП, настройка рекламы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center icon-3d">
                    <Icon name="Code" className="text-primary" size={32} />
                  </div>
                </div>
                <CardTitle className="text-xl text-primary">Автоматизировать бизнес-процессы</CardTitle>
                <CardDescription className="text-muted-foreground">
                  проектов, чат-боты, автоответчики, системы аналитики — всё работает за вас
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-secondary/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center icon-3d">
                    <Icon name="MessageSquare" className="text-secondary" size={32} />
                  </div>
                </div>
                <CardTitle className="text-xl text-secondary">Зарабатывать от 100,000 рублей</CardTitle>
                <CardDescription className="text-muted-foreground">
                  в месяц на продаже ИИ-услуг — создание чат-ботов, автоматизация, консалтинг
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-accent/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center icon-3d">
                    <Icon name="Shield" className="text-accent" size={32} />
                  </div>
                </div>
                <CardTitle className="text-xl text-accent">Жить спокойно в эпоху ИИ</CardTitle>
                <CardDescription className="text-muted-foreground">
                  зная, что ваши навыки всегда будут востребованы и принесут стабильный доход
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Not Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-900/20 to-orange-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">И ДЛЯ ЭТОГО НЕ НУЖНЫ:</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="border border-yellow-500/20 bg-card/30 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="X" className="text-yellow-400" size={24} />
                </div>
                <h3 className="font-bold text-yellow-400 mb-2">ОПЫТ ПРОГРАММИРОВАНИЯ</h3>
                <p className="text-sm text-muted-foreground">Работаем через готовые интерфейсы и API</p>
              </CardContent>
            </Card>

            <Card className="border border-yellow-500/20 bg-card/30 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="X" className="text-yellow-400" size={24} />
                </div>
                <h3 className="font-bold text-yellow-400 mb-2">ТЕХНИЧЕСКИЕ ЗНАНИЯ</h3>
                <p className="text-sm text-muted-foreground">Всё объясняем простыми словами</p>
              </CardContent>
            </Card>

            <Card className="border border-yellow-500/20 bg-card/30 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="X" className="text-yellow-400" size={24} />
                </div>
                <h3 className="font-bold text-yellow-400 mb-2">БОЛЬШОЙ СТАРТОВЫЙ КАПИТАЛ</h3>
                <p className="text-sm text-muted-foreground">Начните с бесплатных инструментов</p>
              </CardContent>
            </Card>

            <Card className="border border-yellow-500/20 bg-card/30 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="X" className="text-yellow-400" size={24} />
                </div>
                <h3 className="font-bold text-yellow-400 mb-2">МНОГО ВРЕМЕНИ</h3>
                <p className="text-sm text-muted-foreground">Всего 1-2 часа в день</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-8 py-6 hover:scale-105 transition-transform">
              ХОЧУ НА БЕСПЛАТНЫЙ МАРАФОН И ПОМОЖТЬ ЗАРАБАТЫВАТЬ С ПОМОЩЬЮ ИИ
            </Button>
          </div>
        </div>
      </section>

      {/* How to Figure Out Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">КАК В ЭТОМ ВСЁМ РАЗОБРАТЬСЯ?!</h2>
            <p className="text-xl text-muted-foreground">
              Я вам скажем, традиционный подход к изучению нейросетей не работает!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border border-primary/20 bg-card/30 backdrop-blur-sm mb-12">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                    <img 
                      src="https://cdn.poehali.dev/files/fe1c91cb-c68e-4c0e-b3b4-36284215fcea.png" 
                      alt="Дамир Халилов" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      СПОКОЙНО! <br/>
                      С ВАМИ ДАМИР ХАЛИЛОВ
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      ПОКАЗ ПОШУК ЕДИ ГОТОВЫЕ ПРОЦЕНТЫ
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-green-400" size={16} />
                        <span>Вот уже два года я изучаю и тестирую нейросети для решения бизнес-задач</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-green-400" size={16} />
                        <span>Помогаю предпринимателям внедрить ИИ в бизнесе</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-green-400" size={16} />
                        <span>Веду корпоративные обучения по нейросетям</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">ЗАПИСАТЬСЯ НА ИНТЕНСИВ</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Заполните форму и получите доступ к материалам курса
            </p>
            
            <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" className="text-lg p-6 bg-background/50" />
                    <Input placeholder="Email" type="email" className="text-lg p-6 bg-background/50" />
                  </div>
                  <Input placeholder="Номер телефона" type="tel" className="text-lg p-6 bg-background/50" />
                  
                  <div className="bg-muted/30 rounded-lg p-6 text-left">
                    <h3 className="font-semibold mb-3 text-primary">🎁 Вы получите:</h3>
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
                  
                  <Button size="lg" className="w-full text-lg font-bold py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                    ЗАПИСАТЬСЯ ЗА 2 990 ₽
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

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">НЕ УПУСТИТЕ ВОЗМОЖНОСТЬ</h2>
          <p className="text-xl mb-8 text-white/90">
            Интенсив стартует 20 января. Осталось всего 21 место!
          </p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">15</div>
              <div className="text-sm text-white/75">дней</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">7</div>
              <div className="text-sm text-white/75">часов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">42</div>
              <div className="text-sm text-white/75">минуты</div>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="text-lg font-bold px-8 py-6 bg-white text-primary hover:scale-105 transition-transform">
            ЗАПИСАТЬСЯ СЕЙЧАС
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;