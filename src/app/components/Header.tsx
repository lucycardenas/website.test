import { Link, useLocation } from 'react-router';
import { Car } from 'lucide-react';

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <Car className="size-6" />
            <span className="text-xl">AutoParts</span>
          </Link>
          
          <nav className="flex gap-8">
            <Link 
              to="/wheels" 
              className={`transition-colors ${
                isActive('/wheels') ? 'text-black' : 'text-gray-500 hover:text-black'
              }`}
            >
              Wheels
            </Link>
            <Link 
              to="/cars" 
              className={`transition-colors ${
                isActive('/cars') ? 'text-black' : 'text-gray-500 hover:text-black'
              }`}
            >
              Cars
            </Link>
            <Link 
              to="/engines" 
              className={`transition-colors ${
                isActive('/engines') ? 'text-black' : 'text-gray-500 hover:text-black'
              }`}
            >
              Engines
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
