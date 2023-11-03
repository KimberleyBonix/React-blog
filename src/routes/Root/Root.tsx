import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';
import { Category } from '../../@Types/Post';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './root.scss';

function Root() {
  const [zenMode, setZenMode] = useState<boolean>(false);

  const { apiData: categories } = useAsyncFetch<Category[]>(
    'https://oblog-react.vercel.app/api/categories'
  );

  return (
    <div className={`root ${zenMode ? 'zenmode' : ''}`}>
      <Header
        categories={categories || []}
        setZenMode={setZenMode}
        zenModeStatus={zenMode}
      />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Root;
