import React from 'react';
import { Oval } from 'react-loader-spinner';

const Spinner: React.FC = () => {
  return (
    <>
      <Oval
        height={32}
        width={32}
        color="#8585AD"
        wrapperStyle={{ display: 'inline', margin: '0 auto' }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#8585AD"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </>
  );
};

export default Spinner;
