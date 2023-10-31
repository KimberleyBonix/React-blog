import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import Spinner from '../Spinner/Spinner';
import { PostProp } from '../../@Types/Post';
import './App.scss';

import categoriesData from '../../data/categories';

function App() {
  const [postsData, setPostsData] = useState<PostProp[]>([]);
  const [zenMode, setZenMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://oblog-react.vercel.app/api/posts')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPostsData(data);
      });
  }, []);

  return (
    <div className="app">
      <Header
        categories={categoriesData}
        setZenMode={setZenMode}
        zenModeStatus={zenMode}
      />

      {loading ? (
        <Spinner />
      ) : (
        <Posts posts={postsData} zenModeStatus={zenMode} />
      )}

      <Footer />
    </div>
  );
}

export default App;
