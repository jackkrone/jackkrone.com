import React from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="col">
      <div className=" d-flex flex-column m-0 p-2 p-md-4">
        <div className="container p-0 pt-1 pt-md-0">{children}</div>
      </div>
    </div>
  );
};

export default Main;
