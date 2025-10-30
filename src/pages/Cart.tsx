import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { storeData } from '@/data/storeData';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const navigate = useNavigate();

  const getColorName = (colorId: string) => {
    return storeData.filters.colors.find((c) => c.id === colorId)?.name || colorId;
  };

  const getSizeName = (sizeId: string) => {
    return storeData.filters.sizes.find((s) => s.id === sizeId)?.name || sizeId;
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Icon
              name="ShoppingCart"
              size={80}
              className="mx-auto text-muted-foreground mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">Корзина пуста</h1>
            <p className="text-muted-foreground mb-8">
              Добавьте товары в корзину, чтобы оформить заказ
            </p>
            <Button onClick={() => navigate('/shop')} size="lg">
              Перейти в каталог
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Корзина ({getTotalItems()})</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                      <img
                        src={item.product.image_url}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold mb-1 line-clamp-2">
                            {item.product.name}
                          </h3>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div>Размер: {getSizeName(item.selectedSize)}</div>
                            <div>Цвет: {getColorName(item.selectedColor)}</div>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            removeItem(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor
                            )
                          }
                        >
                          <Icon name="Trash2" size={18} />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.selectedSize,
                                item.selectedColor,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                            disabled={item.quantity <= 1}
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.selectedSize,
                                item.selectedColor,
                                item.quantity + 1
                              )
                            }
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="font-bold text-lg">
                            {item.product.price * item.quantity} ₽
                          </div>
                          {item.quantity > 1 && (
                            <div className="text-xs text-muted-foreground">
                              {item.product.price} ₽ за шт.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Итого</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Товары ({getTotalItems()} шт.)
                    </span>
                    <span className="font-semibold">{getTotalPrice()} ₽</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>К оплате</span>
                    <span>{getTotalPrice()} ₽</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Оформить заказ
                </Button>

                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={() => navigate('/shop')}
                >
                  Продолжить покупки
                </Button>

                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Truck" size={16} />
                    <span>Бесплатная доставка от 5000 ₽</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="RotateCcw" size={16} />
                    <span>Возврат в течение 14 дней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" size={16} />
                    <span>Гарантия качества</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
