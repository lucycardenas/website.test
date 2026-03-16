import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface CategoryPageProps {
  category: 'wheels' | 'cars' | 'engines';
}

export function CategoryPage({ category }: CategoryPageProps) {
  const categoryProducts = products.filter(p => p.category === category);
  
  const categoryTitles = {
    wheels: 'Wheels',
    cars: 'Cars',
    engines: 'Engines'
  };

  const categoryDescriptions = {
    wheels: 'Precision-engineered wheels designed for performance and style',
    cars: 'Exceptional vehicles that combine luxury with cutting-edge technology',
    engines: 'Powerful engines built for maximum performance and reliability'
  };

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-5xl mb-4">{categoryTitles[category]}</h1>
          <p className="text-xl text-gray-500 max-w-2xl">
            {categoryDescriptions[category]}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
