import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { storeData } from '@/data/storeData';
import { Category, Brand, Color, Size, PriceRange } from '@/types/store';
import Icon from '@/components/ui/icon';

interface FiltersProps {
  selectedCategories: string[];
  selectedSizes: string[];
  selectedColors: string[];
  selectedBrands: string[];
  selectedPriceRange: PriceRange | null;
  inStock: boolean;
  newArrivals: boolean;
  onCategoryChange: (categoryId: string) => void;
  onSizeChange: (sizeId: string) => void;
  onColorChange: (colorId: string) => void;
  onBrandChange: (brandId: string) => void;
  onPriceRangeChange: (range: PriceRange | null) => void;
  onInStockChange: (checked: boolean) => void;
  onNewArrivalsChange: (checked: boolean) => void;
  onClearFilters: () => void;
}

export const Filters = ({
  selectedCategories,
  selectedSizes,
  selectedColors,
  selectedBrands,
  selectedPriceRange,
  inStock,
  newArrivals,
  onCategoryChange,
  onSizeChange,
  onColorChange,
  onBrandChange,
  onPriceRangeChange,
  onInStockChange,
  onNewArrivalsChange,
  onClearFilters,
}: FiltersProps) => {
  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedSizes.length > 0 ||
    selectedColors.length > 0 ||
    selectedBrands.length > 0 ||
    selectedPriceRange !== null ||
    inStock ||
    newArrivals;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Фильтры</h2>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-primary hover:underline"
          >
            Сбросить все
          </button>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="inStock"
            checked={inStock}
            onCheckedChange={onInStockChange}
          />
          <Label htmlFor="inStock" className="cursor-pointer">
            В наличии
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="newArrivals"
            checked={newArrivals}
            onCheckedChange={onNewArrivalsChange}
          />
          <Label htmlFor="newArrivals" className="cursor-pointer">
            Новинки
          </Label>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-3">Категория</h3>
        <ScrollArea className="h-[200px]">
          <div className="space-y-2">
            {storeData.filters.categories.map((category: Category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => onCategoryChange(category.id)}
                />
                <Label
                  htmlFor={`category-${category.id}`}
                  className="cursor-pointer flex items-center gap-2 flex-1"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-auto">
                    {category.count}
                  </Badge>
                </Label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-3">Цена</h3>
        <div className="space-y-2">
          {storeData.filters.price_ranges.map((range: PriceRange) => (
            <div key={range.id} className="flex items-center space-x-2">
              <Checkbox
                id={`price-${range.id}`}
                checked={selectedPriceRange?.id === range.id}
                onCheckedChange={(checked) => {
                  onPriceRangeChange(checked ? range : null);
                }}
              />
              <Label htmlFor={`price-${range.id}`} className="cursor-pointer">
                {range.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-3">Размер</h3>
        <div className="flex flex-wrap gap-2">
          {storeData.filters.sizes.map((size: Size) => (
            <Badge
              key={size.id}
              variant={selectedSizes.includes(size.id) ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => onSizeChange(size.id)}
            >
              {size.name}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-3">Цвет</h3>
        <div className="flex flex-wrap gap-2">
          {storeData.filters.colors.map((color: Color) => (
            <div
              key={color.id}
              onClick={() => onColorChange(color.id)}
              className={`relative w-8 h-8 rounded-full border-2 cursor-pointer transition-all ${
                selectedColors.includes(color.id)
                  ? 'border-primary ring-2 ring-primary ring-offset-2'
                  : 'border-border hover:border-primary/50'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            >
              {selectedColors.includes(color.id) && (
                <Icon
                  name="Check"
                  size={16}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-3">Бренд</h3>
        <ScrollArea className="h-[150px]">
          <div className="space-y-2">
            {storeData.filters.brands.map((brand: Brand) => (
              <div key={brand.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand.id}`}
                  checked={selectedBrands.includes(brand.id)}
                  onCheckedChange={() => onBrandChange(brand.id)}
                />
                <Label htmlFor={`brand-${brand.id}`} className="cursor-pointer">
                  {brand.name}
                </Label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
