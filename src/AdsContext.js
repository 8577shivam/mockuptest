import React, { createContext, useContext, useState } from 'react';
const AdsContext = createContext();

export const useAdsContext = () => {
  return useContext(AdsContext);
};
export const AdsProvider = ({ children }) => {
  const [selected, setSelected] = useState(0);
  return (
    <AdsContext.Provider value={{ selected, setSelected }}>
      {children}
    </AdsContext.Provider>
  );
};

export default AdsContext;
