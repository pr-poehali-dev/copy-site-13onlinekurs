import { useState, useMemo } from 'react';
import { storeData } from '@/data/storeData';
import { Product, PriceRange } from '@/types/store';
import { ProductCard } from '@/components/ProductCard';
import { Filters } from '@/components/Filters';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { ProductModal } from '@/components/ProductModal';

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange | null>(null);
  const [inStock, setInStock] = useState(false);
  const [newArrivals, setNewArrivals] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...storeData.products];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    if (selectedCategories.length > 0) {
      products = products.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedSizes.length > 0) {
      products = products.filter((p) =>
        p.sizes.some((size) => selectedSizes.includes(size))
      );
    }

    if (selectedColors.length > 0) {
      products = products.filter((p) =>
        p.colors.some((color) => selectedColors.includes(color))
      );
    }

    if (selectedBrands.length > 0) {
      products = products.filter((p) => selectedBrands.includes(p.brand));
    }

    if (selectedPriceRange) {
      products = products.filter(
        (p) =>
          p.price >= selectedPriceRange.min && p.price <= selectedPriceRange.max
      );
    }

    if (inStock) {
      products = products.filter((p) => p.in_stock);
    }

    if (newArrivals) {
      products = products.filter((p) => p.new_arrival);
    }

    switch (sortBy) {
      case 'price_asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'new':
        products.sort((a, b) => (b.new_arrival ? 1 : 0) - (a.new_arrival ? 1 : 0));
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
      default:
        products.sort((a, b) => b.reviews_count - a.reviews_count);
    }

    return products;
  }, [
    searchQuery,
    sortBy,
    selectedCategories,
    selectedSizes,
    selectedColors,
    selectedBrands,
    selectedPriceRange,
    inStock,
    newArrivals,
  ]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleSizeChange = (sizeId: string) => {
    setSelectedSizes((prev) =>
      prev.includes(sizeId)
        ? prev.filter((id) => id !== sizeId)
        : [...prev, sizeId]
    );
  };

  const handleColorChange = (colorId: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorId)
        ? prev.filter((id) => id !== colorId)
        : [...prev, colorId]
    );
  };

  const handleBrandChange = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedBrands([]);
    setSelectedPriceRange(null);
    setInStock(false);
    setNewArrivals(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{storeData.store_info.name}</h1>
          <p className="text-muted-foreground">{storeData.store_info.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-4">
              <Filters
                selectedCategories={selectedCategories}
                selectedSizes={selectedSizes}
                selectedColors={selectedColors}
                selectedBrands={selectedBrands}
                selectedPriceRange={selectedPriceRange}
                inStock={inStock}
                newArrivals={newArrivals}
                onCategoryChange={handleCategoryChange}
                onSizeChange={handleSizeChange}
                onColorChange={handleColorChange}
                onBrandChange={handleBrandChange}
                onPriceRangeChange={setSelectedPriceRange}
                onInStockChange={setInStock}
                onNewArrivalsChange={setNewArrivals}
                onClearFilters={handleClearFilters}
              />
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Icon
                  name="Search"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <Input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <Icon name="SlidersHorizontal" size={20} className="mr-2" />
                      Фильтры
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Фильтры</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <Filters
                        selectedCategories={selectedCategories}
                        selectedSizes={selectedSizes}
                        selectedColors={selectedColors}
                        selectedBrands={selectedBrands}
                        selectedPriceRange={selectedPriceRange}
                        inStock={inStock}
                        newArrivals={newArrivals}
                        onCategoryChange={handleCategoryChange}
                        onSizeChange={handleSizeChange}
                        onColorChange={handleColorChange}
                        onBrandChange={handleBrandChange}
                        onPriceRangeChange={setSelectedPriceRange}
                        onInStockChange={setInStock}
                        onNewArrivalsChange={setNewArrivals}
                        onClearFilters={handleClearFilters}
                      />
                    </div>
                  </SheetContent>
                </Sheet>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {storeData.search_configuration.sort_options.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-4 text-sm text-muted-foreground">
              Найдено товаров: {filteredAndSortedProducts.length}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={setSelectedProduct}
                />
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-16">
                <Icon name="Package" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                <p className="text-muted-foreground mb-4">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
                <Button onClick={handleClearFilters} variant="outline">
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

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
