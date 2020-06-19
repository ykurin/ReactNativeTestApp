import React from 'react';
import { GlobalStoresContext } from '../contexts/GlobalStoresContext';

export const useGlobalStores = () => React.useContext(GlobalStoresContext);
