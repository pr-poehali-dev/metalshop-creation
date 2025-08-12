import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

export default function Index() {
  const products = [
    {
      id: 1,
      name: "Трубопроводная арматура",
      description: "Профессиональные фитинги и клапаны для коммунальных систем",
      price: "от 2 500 ₽",
      image: "/img/bb881f97-ff47-4e06-88b4-91c60cc22d43.jpg",
      category: "Арматура"
    },
    {
      id: 2,
      name: "Крепежные системы",
      description: "Промышленные кронштейны и крепеж для инженерных систем",
      price: "от 890 ₽",
      image: "/img/76af99e1-f9f1-43d0-a62c-d6a2cb853109.jpg",
      category: "Крепеж"
    },
    {
      id: 3,
      name: "Металлические решетки",
      description: "Усиленные панели и сетки для промышленного строительства",
      price: "от 4 200 ₽",
      image: "/img/ed93fd58-d1f6-4ac4-84c5-40c3b0904dd7.jpg",
      category: "Решетки"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300">
                <Icon name="Wrench" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">МеталлПром</h1>
                <p className="text-sm text-gray-600">Металлоизделия для ЖКХ</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="relative text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">Каталог</a>
              <a href="#about" className="relative text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">О нас</a>
              <a href="#delivery" className="relative text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">Доставка</a>
              <a href="#contacts" className="relative text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">Контакты</a>
            </nav>
            <Button className="hover:shadow-hover transition-all duration-300 hover:scale-105">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-gray-700 to-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Металлоизделия
              <span className="block text-3xl md:text-5xl mt-2 opacity-90">для ЖКХ</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Профессиональные решения для коммунального хозяйства. Качество, надежность, быстрая доставка.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-bounce-gentle">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary hover:shadow-hover transition-all duration-300 hover:scale-105">
                <Icon name="Catalog" fallback="Grid3X3" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 hover:shadow-hover transition-all duration-300 hover:scale-105">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Получить консультацию
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Оставьте заявку</DialogTitle>
                    <DialogDescription>
                      Наш специалист свяжется с вами в течение 15 минут
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Комментарий</Label>
                      <Textarea id="message" placeholder="Опишите вашу задачу..." />
                    </div>
                  </div>
                  <Button className="w-full">Отправить заявку</Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Каталог продукции
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Широкий ассортимент металлоизделий для всех задач коммунального хозяйства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-hover transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer animate-fade-in-up">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{product.category}</Badge>
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full hover:shadow-hover transition-all duration-300 hover:scale-105">
                        <Icon name="Eye" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>{product.name}</DialogTitle>
                        <DialogDescription>{product.description}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
                        <div className="flex justify-between items-center">
                          <Badge variant="secondary">{product.category}</Badge>
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                        </div>
                        <p className="text-gray-600">
                          Профессиональное оборудование для коммунального хозяйства. Качество подтверждено сертификатами и многолетним опытом эксплуатации.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          В корзину
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="Phone" size={16} className="mr-2" />
                          Заказать звонок
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-bounce-gentle">
            <Button size="lg" variant="outline" className="hover:shadow-hover transition-all duration-300 hover:scale-105">
              <Icon name="Eye" size={20} className="mr-2" />
              Посмотреть весь каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-gray-600">Сертифицированная продукция от проверенных производителей</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставим в любую точку России в кратчайшие сроки</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Опыт</h3>
              <p className="text-gray-600">Более 15 лет на рынке металлоизделий для ЖКХ</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300">
                <Icon name="HeadphonesIcon" fallback="Headphones" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Поддержка</h3>
              <p className="text-gray-600">Профессиональная консультация по выбору продукции</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                О компании МеталлПром
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы специализируемся на поставке качественных металлоизделий для коммунального хозяйства. 
                Наша компания работает с ведущими производителями и предлагает широкий ассортимент продукции 
                для решения любых задач в сфере ЖКХ.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-gray-600">Довольных клиентов</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <p className="text-gray-600">Лет на рынке</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-gray-600">Товаров в каталоге</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <p className="text-gray-600">Положительных отзывов</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <Icon name="Building" size={64} className="mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">Надежный партнер для ЖКХ</h3>
              <p className="text-lg opacity-90">
                Обеспечиваем предприятия коммунального хозяйства качественными металлоизделиями 
                для бесперебойной работы инфраструктуры городов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Доставка и оплата
            </h2>
            <p className="text-lg text-gray-600">
              Удобные способы доставки и оплаты для вашего комфорта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <CardTitle>Способы доставки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Truck" size={20} className="text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Доставка по городу</h4>
                    <p className="text-sm text-gray-600">От 500 ₽, при заказе от 10 000 ₽ - бесплатно</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Package" size={20} className="text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Доставка в регионы</h4>
                    <p className="text-sm text-gray-600">Транспортными компаниями по всей России</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Самовывоз</h4>
                    <p className="text-sm text-gray-600">Бесплатно со склада в Москве</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="CreditCard" size={24} className="text-white" />
                </div>
                <CardTitle>Способы оплаты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CreditCard" size={20} className="text-secondary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Банковские карты</h4>
                    <p className="text-sm text-gray-600">Visa, MasterCard, МИР</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="FileText" size={20} className="text-secondary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Безналичный расчет</h4>
                    <p className="text-sm text-gray-600">Для юридических лиц по счету</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Banknote" size={20} className="text-secondary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Наличные</h4>
                    <p className="text-sm text-gray-600">При получении или на складе</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Контакты
            </h2>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-lg font-medium text-primary mb-1">+7 (495) 123-45-67</p>
              <p className="text-sm text-gray-600">Пн-Пт: 9:00-18:00</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-lg font-medium text-primary mb-1">info@metallprom.ru</p>
              <p className="text-sm text-gray-600">Ответим в течение часа</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-lg font-medium text-primary mb-1">г. Москва</p>
              <p className="text-sm text-gray-600">ул. Промышленная, 15</p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="mr-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Wrench" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">МеталлПром</h3>
                  <p className="text-sm text-gray-400">Металлоизделия для ЖКХ</p>
                </div>
              </div>
              <p className="text-gray-400">
                Надежный поставщик качественных металлоизделий для коммунального хозяйства.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Трубопроводная арматура</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Крепежные системы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Металлические решетки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Все товары</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#delivery" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сертификаты</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@metallprom.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва, ул. Промышленная, 15</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МеталлПром. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}