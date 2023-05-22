import React from 'react';
import './Home.scss';

import { Header, PromoBanner } from './components';

function Home() {
  return (
    <div className="Home">
      <div className="Home__promo">
        <Header />
        <PromoBanner />
      </div>
    </div>
  );
}

export default Home;
