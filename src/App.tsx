import React, { Component, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './components/Login';
import { Profile } from './components/Profile';
import { AppRoute, RootStackParamList } from './Route';
import { LoginStore } from './stores/LoginStore';
import { StoresContext } from './contexts';

const Stack = createStackNavigator<RootStackParamList>();

export default class App extends Component {
    componentDidMount(): void {
        console.log('componentDidMount');
    }

    render(): ReactNode {
        return (
            <StoresContext.Provider value={new LoginStore()}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName={AppRoute.LOGIN}>
                        <Stack.Screen
                            name={AppRoute.LOGIN}
                            component={Login}
                            options={{ title: 'Login' }}
                        />
                        <Stack.Screen
                            name={AppRoute.PROFILE}
                            component={Profile}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </StoresContext.Provider>
        );
    }
}
