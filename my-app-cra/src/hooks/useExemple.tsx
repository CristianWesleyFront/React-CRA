import React, { createContext, useContext, useState } from 'react';

interface ExempleContextData {
  openChangeUserType: boolean;
  setOpenChangeUserType: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExempleContext = createContext<ExempleContextData>(
  {} as ExempleContextData,
);

export const ExempleProvider: React.FC = ({ children }) => {
  const [openChangeUserType, setOpenChangeUserType] = useState<boolean>(false);

  return (
    <ExempleContext.Provider
      value={{
        openChangeUserType,
        setOpenChangeUserType,
      }}
    >
      {children}
    </ExempleContext.Provider>
  );
};

export function useExemple() {
  const context = useContext(ExempleContext);

  return context;
}
