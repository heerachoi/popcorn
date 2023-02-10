import React from 'react';
import data from '../../../db.json';

const Faq: any = () => {
  const faqList = data.FAQ;

  return (
    <>
      {faqList.map((qa) => {
        return (
          <div key={qa.id}>
            <h4>{qa.id}. Q : {qa.Q}</h4>
            <p>A : {qa.A}</p>
          </div>
        );
      })}
    </>
  );
};

export default Faq;
