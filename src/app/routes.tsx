import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetail } from './pages/ProductDetail';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { 
        path: 'wheels', 
        element: <CategoryPage category="wheels" /> 
      },
      { 
        path: 'cars', 
        element: <CategoryPage category="cars" /> 
      },
      { 
        path: 'engines', 
        element: <CategoryPage category="engines" /> 
      },
      { 
        path: 'wheels/:id', 
        Component: ProductDetail 
      },
      { 
        path: 'cars/:id', 
        Component: ProductDetail 
      },
      { 
        path: 'engines/:id', 
        Component: ProductDetail 
      },
      { path: '*', Component: NotFound },
    ],
  },
]);
