import { Product } from '@/types/store';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { storeData } from '@/data/storeData';
import { useToast } from '@/hooks/use-toast';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toast } = useToast();

  const getColorName = (colorId: string) => {
    return storeData.filters.colors.find((c) => c.id === colorId)?.name || colorId;
  };

  const getColorHex = (colorId: string) => {
    return storeData.filters.colors.find((c) => c.id === colorId)?.hex || '#000';
  };

  const getSizeName = (sizeId: string) => {
    return storeData.filters.sizes.find((s) => s.id === sizeId)?.name || sizeId;
  };

  const getBrandName = (brandId: string) => {
    return storeData.filters.brands.find((b) => b.id === brandId)?.name || brandId;
  };

  const getCategoryName = (categoryId: string) => {
    return (
      storeData.filters.categories.find((c) => c.id === categoryId)?.name ||
      categoryId
    );
  };

  const handleAddToCart = () => {
    if (!product.in_stock) {
      toast({
        title: 'Товар недоступен',
        description: 'К сожалению, этого товара нет в наличии',
        variant: 'destructive',
      });
      return;
    }

    addItem(product, selectedSize, selectedColor, quantity);
    toast({
      title: 'Добавлено в корзину',
      description: `${product.name} (${quantity} шт.) добавлен в корзину`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.discount > 0 && (
              <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                -{product.discount}%
              </Badge>
            )}
            {product.new_arrival && (
              <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600">
                Новинка
              </Badge>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>{getBrandName(product.brand)}</span>
                <span>•</span>
                <span>{getCategoryName(product.category)}</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Icon name="Star" size={18} fill="currentColor" />
                  <span className="font-semibold">{product.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews_count} отзывов)
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold">{product.price} ₽</span>
                {product.old_price && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      {product.old_price} ₽
                    </span>
                    <Badge variant="destructive">-{product.discount}%</Badge>
                  </>
                )}
              </div>

              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <Separator />

            <div>
              <label className="text-sm font-medium mb-2 block">
                Размер: {getSizeName(selectedSize)}
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Badge
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    className="cursor-pointer px-4 py-2"
                    onClick={() => setSelectedSize(size)}
                  >
                    {getSizeName(size)}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Цвет: {getColorName(selectedColor)}
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`relative w-10 h-10 rounded-full border-2 cursor-pointer transition-all ${
                      selectedColor === color
                        ? 'border-primary ring-2 ring-primary ring-offset-2'
                        : 'border-border hover:border-primary/50'
                    }`}
                    style={{ backgroundColor: getColorHex(color) }}
                    title={getColorName(color)}
                  >
                    {selectedColor === color && (
                      <Icon
                        name="Check"
                        size={20}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Количество</label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Icon name="Minus" size={16} />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Icon name="Plus" size={16} />
                </Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              {product.in_stock ? (
                <>
                  <Button
                    onClick={handleAddToCart}
                    size="lg"
                    className="w-full"
                  >
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Добавить в корзину
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Icon name="Check" size={16} />
                    <span>В наличии</span>
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <Badge variant="secondary" className="text-lg py-2 px-6">
                    Нет в наличии
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
