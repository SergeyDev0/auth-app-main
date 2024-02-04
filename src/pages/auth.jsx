import React from 'react';
import Header from '../components/header/Header';
import Article from '../components/auth/article/Article';
import Form from '../components/auth/form/Form';
import '../scss/auth.scss';

const App = () => {
  return (
    <div className='content-wrapper'>
      <Header />
      <main className='space-between'>
        <Article />
        <Form />
      </main>
    </div>
  );
};

export default App;