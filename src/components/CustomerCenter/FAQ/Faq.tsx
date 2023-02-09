import React from 'react';
import data from '../../../db.json';

const Faq: any = () => {
  const faq = data.FAQ;

  return (
    <>
      {faq.map((qa) => {
        return (
          <div>
            <h4>{qa.Q}</h4>
            <p>{qa.A}</p>
          </div>
        );
      })}
    </>
  );
};

export default Faq;
