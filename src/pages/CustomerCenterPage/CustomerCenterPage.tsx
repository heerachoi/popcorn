import React from 'react';
import Faq from '../../components/CustomerCenter/FAQ/Faq';
import InfoError from '../../components/CustomerCenter/StoreReport/InfoError';
import NewStore from '../../components/CustomerCenter/StoreReport/NewStore';

const CustomerCenterPage: any = () => {
  return (
    <div>
      CustomerCenterPage
      <NewStore />
      <InfoError />
      <Faq />
    </div>
  );
};

export default CustomerCenterPage;
