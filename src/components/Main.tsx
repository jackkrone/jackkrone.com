import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <div className="col">
      <div
        className="container m-3" /* set container with specific widths for various screen widths */
      >
        {children}
      </div>
    </div>
  );
};

export default Main;
