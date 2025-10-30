import { Product } from '@/types/store';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { storeData } from '@/data/storeData';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const getColorHex = (colorId: string) => {
    return storeData.filters.colors.find(c => c.id === colorId)?.hex || '#000';
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!product.in_stock) {
      toast({
        title: "Товар недоступен",
        description: "К сожалению, этого товара нет в наличии",
        variant: "destructive"
      });
      return;
    }

    addItem(product, product.sizes[0], product.colors[0], 1);
    toast({
      title: "Добавлено в корзину",
      description: `${product.name} добавлен в корзину`
    });
  };

  return (
    <Card
      className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onProductClick(product)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {product.discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
            -{product.discount}%
          </Badge>
        )}
        
        {product.new_arrival && (
          <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">
            Новинка
          </Badge>
        )}

        {!product.in_stock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="secondary" className="text-lg py-2 px-4">
              Нет в наличии
            </Badge>
          </div>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Button
            onClick={handleAddToCart}
            disabled={!product.in_stock}
            className="w-full bg-white text-black hover:bg-white/90"
            size="sm"
          >
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            В корзину
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-sm line-clamp-2 flex-1">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center gap-1 text-yellow-500">
            <Icon name="Star" size={14} fill="currentColor" />
            <span className="text-xs text-muted-foreground">
              {product.rating} ({product.reviews_count})
            </span>
          </div>

          <div className="flex items-center gap-2">
            {product.colors.slice(0, 5).map((colorId) => (
              <div
                key={colorId}
                className="w-4 h-4 rounded-full border border-border"
                style={{ backgroundColor: getColorHex(colorId) }}
                title={storeData.filters.colors.find(c => c.id === colorId)?.name}
              />
            ))}
            {product.colors.length > 5 && (
              <span className="text-xs text-muted-foreground">
                +{product.colors.length - 5}
              </span>
            )}
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold">{product.price} ₽</span>
            {product.old_price && (
              <span className="text-sm text-muted-foreground line-through">
                {product.old_price} ₽
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
