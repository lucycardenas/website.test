import { Link } from 'react-router';
import { Product } from '../data/products';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      to={`/${product.category}/${product.id}`}
      className="group block"
    >
      <div className="aspect-square bg-gray-100 overflow-hidden mb-4">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mb-1">{product.name}</h3>
      <p className="text-gray-500">{product.price}</p>
    </Link>
  );
}
