import React from 'react';
import { InjectionUtils } from '../InjectionUtils';

export const GlobalStoresContext = React.createContext(
    InjectionUtils.getGlobalStores(),
);
