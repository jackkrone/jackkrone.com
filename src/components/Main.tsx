import React from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="col">
      <div
        style={{ marginTop: '2rem' }}
        className="d-flex flex-column mx-2 m-md-4"
      >
        <div className="container p-0">{children}</div>
      </div>
    </div>
  );
};

export default Main;
