import React from 'react';
import { useExemple } from 'hooks/useExemple';

const Exemplemocks: React.FC = () => {
  const { openChangeUserType, setOpenChangeUserType } = useExemple();

  return (
    <div>
      <span data-testid="testSpanID">
        {openChangeUserType ? 'open' : 'close'}
      </span>
      <button onClick={() => setOpenChangeUserType(!openChangeUserType)}>
        change
      </button>
    </div>
  );
};

export default Exemplemocks;
