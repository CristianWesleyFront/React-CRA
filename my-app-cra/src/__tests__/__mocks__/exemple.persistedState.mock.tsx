import React from 'react';
import usePersistedState from 'tools/usePersistedState';

const ExempleSlice: React.FC = () => {
  const [test, setTest] = usePersistedState('test', true);

  return (
    <div>
      <button
        onClick={() => {
          setTest(false);
        }}
      >
        Click
      </button>
      <span data-testid="testID">{`${test}`}</span>
    </div>
  );
};

export default ExempleSlice;
