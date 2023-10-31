import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import './App.scss';

import categoriesData from '../../data/categories';
import postsData from '../../data/posts';

function App() {
  const [zenMode, setZenMode] = useState<boolean>(false);

  return (
    <div className="app">
      <Header
        categories={categoriesData}
        setZenMode={setZenMode}
        zenModeStatus={zenMode}
      />
      <Posts posts={postsData} zenModeStatus={zenMode} />
      <Footer />
    </div>
  );
}

export default App;
