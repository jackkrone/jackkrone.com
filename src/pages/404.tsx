import React from 'react';
import Layout from '../components/Layout';

const pageNotFound = () => {
  return (
    <Layout title="404">
      <h5>Whoops... the page you're looking for doesn't exist.</h5>
    </Layout>
  );
};

export default pageNotFound;
