import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl mb-4">404</h1>
        <p className="text-xl text-gray-500 mb-8">Page not found</p>
        <Link 
          to="/" 
          className="text-black hover:text-gray-600 transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
