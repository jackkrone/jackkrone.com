import React from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="col">
      <div className="d-flex flex-column m-2 m-md-4">
        <div className="container p-0 mt-1 mt-md-0">{children}</div>
      </div>
    </div>
  );
};

export default Main;
