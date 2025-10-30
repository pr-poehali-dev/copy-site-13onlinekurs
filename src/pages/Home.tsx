import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { storeData } from '@/data/storeData';
import { ProductCard } from '@/components/ProductCard';
import { useState } from 'react';
import { ProductModal } from '@/components/ProductModal';
import { Product } from '@/types/store';

export default function Home() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const newArrivals = storeData.products
    .filter((p) => p.new_arrival)
    .slice(0, 4);

  const bestSellers = storeData.products
    .sort((a, b) => b.reviews_count - a.reviews_count)
    .slice(0, 4);

  const categories = storeData.filters.categories.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm">
                Новая коллекция 2024
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {storeData.store_info.name}
              </h1>
              <p className="text-xl text-muted-foreground">
                {storeData.store_info.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate('/shop')}>
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/shop')}
                >
                  Новинки
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="overflow-hidden">
                    <img
                      src={storeData.products[0]?.image_url}
                      alt="Fashion 1"
                      className="w-full h-48 object-cover"
                    />
                  </Card>
                  <Card className="overflow-hidden">
                    <img
                      src={storeData.products[1]?.image_url}
                      alt="Fashion 2"
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <Card className="overflow-hidden">
                    <img
                      src={storeData.products[2]?.image_url}
                      alt="Fashion 3"
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                  <Card className="overflow-hidden">
                    <img
                      src={storeData.products[3]?.image_url}
                      alt="Fashion 4"
                      className="w-full h-48 object-cover"
                    />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Популярные категории
            </h2>
            <p className="text-muted-foreground">
              Найдите идеальную одежду для любого случая
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="cursor-pointer overflow-hidden group hover:shadow-lg transition-all"
                onClick={() => navigate('/shop')}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name="ShoppingBag" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} товаров
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">Новинки</h2>
              <p className="text-muted-foreground">
                Свежие поступления этого сезона
              </p>
            </div>
            <Button variant="outline" onClick={() => navigate('/shop')}>
              Смотреть все
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                Бестселлеры
              </h2>
              <p className="text-muted-foreground">
                Самые популярные товары по отзывам покупателей
              </p>
            </div>
            <Button variant="outline" onClick={() => navigate('/shop')}>
              Смотреть все
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-sm text-muted-foreground">
                  Бесплатная доставка от 5000 ₽
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="RotateCcw" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Возврат 14 дней</h3>
                <p className="text-sm text-muted-foreground">
                  Легкий возврат без лишних вопросов
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Гарантия качества</h3>
                <p className="text-sm text-muted-foreground">
                  100% оригинальные товары
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
