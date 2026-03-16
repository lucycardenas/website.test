import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl mb-6">
              Premium Auto Parts & Accessories
            </h1>
            <p className="text-xl text-gray-500 mb-8">
              Discover our curated selection of high-performance wheels, luxury vehicles, and powerful engines.
            </p>
            <Link 
              to="/wheels" 
              className="inline-flex items-center gap-2 text-lg hover:gap-3 transition-all"
            >
              Explore Collection <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/wheels" className="group">
            <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
              <div className="text-6xl transition-transform duration-500 group-hover:scale-110">⚙️</div>
            </div>
            <h2 className="text-2xl mb-2">Wheels</h2>
            <p className="text-gray-500">Premium alloy and performance wheels</p>
          </Link>

          <Link to="/cars" className="group">
            <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
              <div className="text-6xl transition-transform duration-500 group-hover:scale-110">🚗</div>
            </div>
            <h2 className="text-2xl mb-2">Cars</h2>
            <p className="text-gray-500">Luxury and performance vehicles</p>
          </Link>

          <Link to="/engines" className="group">
            <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
              <div className="text-6xl transition-transform duration-500 group-hover:scale-110">🔧</div>
            </div>
            <h2 className="text-2xl mb-2">Engines</h2>
            <p className="text-gray-500">High-performance engine solutions</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
