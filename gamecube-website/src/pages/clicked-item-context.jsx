import React, { createContext, useState } from 'react';

export const ClickedItemContext = createContext();

export const ClickedItemProvider = ({ children }) => {
    const [clickedItem, setClickedItem] = useState(null);

    return (
        <ClickedItemContext.Provider value={{ clickedItem, setClickedItem }}>
          {children}
        </ClickedItemContext.Provider>
      );
    };