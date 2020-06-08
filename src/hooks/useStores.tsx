import React from 'react';
import { StoresContext } from '../contexts';

export const useStores = () => {
    const store = React.useContext(StoresContext);
    if (!store) {
        throw new Error('useStore must be used within a StoreProvider.');
    }
    return store;
};
