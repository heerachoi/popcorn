import React from 'react';
import InfoError from '../../components/StoreReport/InfoError';
import NewStoreReport from '../../components/StoreReport/NewStoreReport';

const ReportPage = () => {
  return (
    <div style={{ display:'flex', justifyContent:'space-around'}}>
      <NewStoreReport />
      <InfoError />
    </div>
  );
};

export default ReportPage;
