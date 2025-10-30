import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useCart } from '@/hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { storeData } from '@/data/storeData';

export const Header = () => {
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Icon name="ShoppingBag" size={28} className="text-primary" />
            <span className="text-xl font-bold">{storeData.store_info.name}</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => navigate('/')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => navigate('/shop')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Каталог
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => navigate('/cart')}
            >
              <Icon name="ShoppingCart" size={22} />
              {totalItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
