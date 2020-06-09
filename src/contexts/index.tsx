import React from 'react';
import { LoginStore } from '../stores/LoginStore';

const stores = {
    loginStore: new LoginStore(),
};

export const StoresContext = React.createContext(stores);
