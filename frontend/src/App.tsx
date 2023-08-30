import './App.scss';
import { Route, Routes } from 'react-router-dom';
import WrapperLayout from './layouts/wrapper.layout';
import { Suspense, lazy } from 'react';
import { Progress } from './layouts/wrapper.styles';

const HomePage = lazy( async ()=> import('./pages/home/home.page'));
const CategoriesPage = lazy( async ()=> import('./pages/categories/categories.page'));

function App() {
  return (
    <Suspense fallback={<Progress color="inherit" size={60}/>}>
      <Routes>
        <Route path="/" element={<WrapperLayout />} errorElement={<p>No match</p>}>
            <Route index={true} element={<HomePage />}/>
            <Route path="products" element={<p>This is products page!</p>}/>
            <Route path="categories" element={<CategoriesPage />}/>
            <Route path="settings" element={<p>This is settings page!</p>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
