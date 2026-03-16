import { useParams, Link } from 'react-router';
import { products } from '../data/products';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Product not found</h1>
          <Link to="/" className="text-gray-500 hover:text-black">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link 
          to={`/${product.category}`}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-12 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to {product.category}
        </Link>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="aspect-square bg-gray-100">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="size-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-5xl mb-4">{product.name}</h1>
            <p className="text-3xl mb-8">{product.price}</p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {product.description}
            </p>

            {product.specs && (
              <div className="mb-8">
                <h3 className="text-xl mb-4">Specifications</h3>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="text-gray-600 flex items-start">
                      <span className="text-black mr-2">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors w-full md:w-auto">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
