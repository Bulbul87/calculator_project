

import React from 'react';

function Keys({ Label, keyclass, onButtonclick }) {
  const equalclass = 'col-[span_2] bg-[#4ccdc6] text-[#1a261a] font-semibold hover:bg-[#4CCDC6]';
  
  return (
    <div
      className={`bg-[#141414] flex cursor-pointer items-start justify-center p-4 rounded-[5px] hover:bg-[#4ccdc742] ${keyclass === 'equals' ? equalclass : ''}`}
      onClick={() => onButtonclick(Label)}
    >
      {Label}
    </div>
  );
}

export default Keys;
