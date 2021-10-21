import React from 'react';
import Layout from '../components/Layout';

const pageNotFound = () => {
  return (
    <Layout>
      <h1>404</h1>
      <h2>Whoops... the page you're looking for doesn't exist.</h2>
    </Layout>
  );
};

export default pageNotFound;
