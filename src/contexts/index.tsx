import React from 'react';
import { LoginStore } from '../stores/LoginStore';
// import { useLocalStore } from 'mobx-react-lite';

// const stores = {
//     loginStore: new LoginStore(),
// };

// export const StoresContext = React.createContext(stores);
export const StoresContext = React.createContext<LoginStore | null>(null);

// export const StoreProvider = () => {
//     // const store = useLocalStore(() => stores);
//     return (
//         <StoresContext.Provider value={new LoginStore()}>
//             <App />
//         </StoresContext.Provider>
//     );
// };
