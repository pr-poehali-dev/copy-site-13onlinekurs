import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import NeuralBackground from '@/components/NeuralBackground';
import { useState, useEffect } from 'react';

const Index = () => {
  const [availableSpots, setAvailableSpots] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      setAvailableSpots(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      <NeuralBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-slide-in order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <Badge variant="secondary" className="text-xs sm:text-sm font-medium bg-green-500/20 text-green-400 border-green-500/30">
                  🎯 Бесплатный живой мастер-класс во Владивостоке
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    НЕЙРОСЕТИ
                  </span>
                  <br />
                  <span className="text-foreground">ДЛЯ БИЗНЕСА,</span>
                  <br />
                  <span className="text-accent">ПРОДВИЖЕНИЯ И ЗАРАБОТКА</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Никакого программирования и технических сложностей. Только практика.
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="Calendar" className="text-primary" size={16} />
                  </div>
                  <span className="text-base sm:text-lg text-muted-foreground">20 августа, 19:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="text-secondary" size={16} />
                  </div>
                  <span className="text-base sm:text-lg text-muted-foreground">Фактура, Владивосток</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="User" className="text-accent" size={16} />
                  </div>
                  <span className="text-base sm:text-lg text-muted-foreground">Ведущий — эксперт-практик Сергей Черников</span>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 sm:px-6 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-4">
                    <span className="text-xs sm:text-sm text-green-400 font-medium">🎁 БЕСПЛАТНОЕ УЧАСТИЕ</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">0 ₽</div>
                  <div className="text-sm text-muted-foreground">3 часа живого обучения + бонусы</div>
                </div>
                <Button 
                  size="lg" 
                  className="w-full text-base sm:text-lg font-bold py-4 sm:py-6 bg-gradient-to-r from-green-500 to-primary hover:scale-105 transition-transform"
                  onClick={() => window.open('https://forms.gle/yH8Qj44gbYAbWgfZ6', '_blank')}
                >
                  ЗАНЯТЬ СВОЕ МЕСТО
                </Button>
                <div className="mt-4 text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                    ⏰ Количество мест ограничено
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-red-400 transition-all duration-500 transform">
                      Осталось: <span className="text-lg animate-pulse">{availableSpots}</span> мест
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="relative z-10">
                <img 
                  src="/img/2335e96f-ac5d-424f-a1f0-af4368375f17.jpg" 
                  alt="Нейросети для бизнеса" 
                  className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl border border-primary/20"
                />
              </div>
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">ЗА 3 ЧАСА ЖИВОЙ ВСТРЕЧИ ВО ВЛАДИВОСТОКЕ ВЫ ПОЛУЧИТЕ:</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 sm:hover:scale-105">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 icon-3d">
                  <Icon name="Zap" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg sm:text-xl text-primary">Всё для уверенного старта</CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
                  в ChatGPT, Midjourney и ещё 7 актуальных нейросетях
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-secondary/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 sm:hover:scale-105">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-4 icon-3d">
                  <Icon name="FileText" className="text-secondary" size={24} />
                </div>
                <CardTitle className="text-lg sm:text-xl text-secondary">Готовые запросы</CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
                  для нейросетей под ваши задачи: от постов для соцсетей до разработки бизнес-стратегии
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-accent/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 sm:hover:scale-105">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-4 icon-3d">
                  <Icon name="DollarSign" className="text-accent" size={24} />
                </div>
                <CardTitle className="text-lg sm:text-xl text-accent">Понятный алгоритм заработка</CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
                  на нейросетях, который можно применить сразу после мастер-класса
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 sm:hover:scale-105 sm:col-span-2 lg:col-span-1">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 icon-3d">
                  <Icon name="Star" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg sm:text-xl text-primary">Лучшие кейсы</CardTitle>
                <CardDescription className="text-muted-foreground">
                  использования AI в бизнесе, маркетинге и творчестве
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Possibilities Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">ПРЕДСТАВЬТЕ, ЧТО ВЫ МОЖЕТЕ:</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Уже сегодня работа с нейросетями — это ключевой навык, который открывает новые возможности
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 sm:hover:scale-105">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="mx-auto mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center icon-3d">
                    <Icon name="Calendar" className="text-primary" size={24} />
                  </div>
                </div>
                <CardTitle className="text-lg sm:text-xl text-primary">Подготовить контент-план</CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
                  для всех соцсетей на месяц вперед за 20 минут
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-secondary/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 sm:hover:scale-105">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="mx-auto mb-4 sm:mb-6">
                  <img 
                    src="/img/e3591367-62ca-442a-886d-060a0bc4cef6.jpg" 
                    alt="Creative AI" 
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-2xl icon-3d"
                  />
                </div>
                <CardTitle className="text-lg sm:text-xl text-secondary">Создать яркие иллюстрации</CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
                  баннеры и креативы для рекламы или презентаций за минуты
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-accent/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center icon-3d">
                    <Icon name="Target" className="text-accent" size={32} />
                  </div>
                </div>
                <CardTitle className="text-xl text-accent">Разработать стратегию</CardTitle>
                <CardDescription className="text-muted-foreground">
                  маркетинговую презентацию или концепцию онлайн-продукта
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center icon-3d">
                    <Icon name="Settings" className="text-primary" size={32} />
                  </div>
                </div>
                <CardTitle className="text-xl text-primary">Автоматизировать продвижение</CardTitle>
                <CardDescription className="text-muted-foreground">
                  рекламу, контент-маркетинг, работу с личным брендом
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-secondary/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center icon-3d">
                    <Icon name="Banknote" className="text-secondary" size={32} />
                  </div>
                </div>
                <CardTitle className="text-xl text-secondary">Зарабатывать от 100 000 ₽</CardTitle>
                <CardDescription className="text-muted-foreground">
                  в месяц, оказывая AI-услуги клиентам
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-accent/20 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center icon-3d">
                    <Icon name="Users" className="text-accent" size={32} />
                  </div>
                </div>
                <CardTitle className="text-xl text-accent">Делегировать рутину</CardTitle>
                <CardDescription className="text-muted-foreground">
                  AI-ассистентам: продавцу, копирайтеру, дизайнеру, маркетологу
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Myths Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-orange-400">РАЗВЕЕМ ПОПУЛЯРНЫЕ МИФЫ:</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  myth: "Нужны навыки программирования",
                  reality: "Вся работа ведётся на обычном, «человеческом» языке. Нужен только правильный подход к созданию запросов (промтов)."
                },
                {
                  myth: "Нужно много времени", 
                  reality: "Любая задача решается в 10–15 раз быстрее, чем вручную."
                },
                {
                  myth: "Это дорого",
                  reality: "Абсолютно всё (от написания постов до создания видео) можно делать бесплатно."
                },
                {
                  myth: "Нужна большая команда",
                  reality: "Наоборот, вы соберёте собственную команду из AI-сотрудников, которым не нужно платить зарплату."
                }
              ].map((item, index) => (
                <Card key={index} className="border border-orange-500/20 bg-card/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="X" className="text-red-400" size={16} />
                      </div>
                      <div>
                        <h3 className="font-bold text-red-400 mb-2">{item.myth}</h3>
                        <div className="flex items-start gap-2">
                          <Icon name="Check" className="text-green-400 flex-shrink-0 mt-1" size={16} />
                          <p className="text-sm text-muted-foreground">{item.reality}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-64 h-64 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Lightbulb" className="text-orange-400" size={80} />
                </div>
                <h3 className="text-2xl font-bold text-orange-400 mb-4">РЕАЛЬНОСТЬ ПРОЩЕ</h3>
                <p className="text-muted-foreground">чем кажется на первый взгляд</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">КТО ВЕДЕТ МАСТЕР-КЛАСС?</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                    <img 
                      src="https://cdn.poehali.dev/files/d033ddc2-6adc-4956-aff3-238ed23148fa.png" 
                      alt="Сергей Черников" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-primary">
                      СЕРГЕЙ ЧЕРНИКОВ
                    </h3>
                    <p className="text-base sm:text-lg text-secondary mb-4">
                      Эксперт-практик по внедрению нейросетей в бизнес и маркетинг.<br/>
                      Основатель первого в России AI-агентства.
                    </p>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                        <span>Вот уже два года использую нейросети для решения всех своих задач — от упаковки бизнеса до изучения языков</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                        <span>Лично выполнил более 10 000 генераций в ChatGPT и других нейросетях</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                        <span>Моя авторская методика помогла сотням фрилансеров и предпринимателей оптимизировать работу и увеличить доход</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                        <span>На мастер-классе во Владивостоке поделюсь только работающими инструментами и личным опытом</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">ЧТО МЫ УСПЕЕМ ЗА 3 ЧАСА:</h2>
          </div>
          
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Быстрый старт в нейросетях",
                description: "Как освоить AI с нуля, даже если вы никогда с ним не работали"
              },
              {
                title: "Обзор ключевых нейросетей",
                description: "Разберем ChatGPT, YandexGPT, Midjourney, HeyGen и другие. Покажу, как ими пользоваться из России"
              },
              {
                title: "Искусство промт-инжиниринга",
                description: "Научимся составлять запросы так, чтобы нейросеть понимала вас с полуслова и давала идеальный результат"
              },
              {
                title: "Контент «под ключ»",
                description: "Создадим посты, сценарии для видео и визуал для ваших соцсетей прямо на мастер-классе"
              },
              {
                title: "Создание иллюстраций мирового уровня",
                description: "Пошаговый алгоритм работы в Midjourney для генерации картинок, которые цепляют"
              },
              {
                title: "Нейросети для бизнеса",
                description: "Готовые промты для маркетинга, продаж и автоматизации рутинных процессов"
              },
              {
                title: "Стратегия заработка",
                description: "Разберем 30+ способов монетизации навыков работы с AI и выберем тот, что подходит именно вам"
              },
              {
                title: "Интерактив",
                description: "Ответы на ваши вопросы вживую"
              }
            ].map((item, index) => (
              <Card key={index} className="border border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg lg:text-xl text-primary">{item.title}</CardTitle>
                      <CardDescription className="text-sm sm:text-base mt-1 sm:mt-2 text-muted-foreground">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-900/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">РЕГИСТРАЦИЯ НА МАСТЕР-КЛАСС</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8">
              Готовы получить самый востребованный навык 2025 года?
            </p>
            
            <Card className="border border-green-500/20 shadow-2xl bg-card/80 backdrop-blur-sm mb-6 sm:mb-8">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-4 sm:space-y-6">

                  
                  <div className="bg-green-500/10 rounded-lg p-4 sm:p-6 text-left border border-green-500/20">
                    <h3 className="font-semibold mb-3 text-green-400 text-sm sm:text-base">🎁 Что вы получаете:</h3>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={14} />
                        <span>Бесплатное участие в живом 3-часовом мастер-классе</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={14} />
                        <span>Возможность задать вопрос Сергею Черникову лично</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={14} />
                        <span>Бонус: Гайд «15 задач по созданию контента с помощью нейросетей»</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={14} />
                        <span>Нетворкинг с предпринимателями и специалистами Владивостока</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full text-base sm:text-lg font-bold py-4 sm:py-6 bg-gradient-to-r from-green-500 to-primary hover:scale-105 transition-transform"
                    onClick={() => window.open('https://forms.gle/yH8Qj44gbYAbWgfZ6', '_blank')}
                  >
                    ЗАПИСАТЬСЯ НА МАСТЕР-КЛАСС
                  </Button>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Нажимая на кнопку, я даю согласие на обработку персональных данных в соответствии с условиями Политики конфиденциальности и Оферты, а также на получение информационных рассылок.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-primary/20">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Icon name="Calendar" className="text-primary flex-shrink-0" size={20} />
                    <span className="text-sm sm:text-base"><strong>Когда:</strong> 20 августа, в 19:00</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                  <div className="flex items-start gap-2 sm:gap-4">
                    <Icon name="MapPin" className="text-secondary flex-shrink-0 mt-0.5 sm:mt-0" size={20} />
                    <span className="text-sm sm:text-base"><strong>Где:</strong> Фактура, Партизанский просп., 44, корп. 10</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Icon name="Users" className="text-green-400 flex-shrink-0" size={20} />
                    <span className="text-sm sm:text-base"><strong>Мест:</strong> 40</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 lg:py-10 bg-card/20 backdrop-blur-sm border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2025 Все права защищены<br/>
            ИП Черников Сергей Николаевич
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;