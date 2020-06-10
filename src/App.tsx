import React, { Component, ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './components/Login';
import { Profile } from './components/Profile';
import { AppRoute, RootStackParamList } from './Route';
import { loginReducer } from './stores/login/LoginReducer';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

const Stack = createStackNavigator<RootStackParamList>();

const store = createStore(loginReducer, applyMiddleware(thunkMiddleware));

export default class App extends Component {
    componentDidMount(): void {
        console.log('componentDidMount');
    }

    render(): ReactNode {
        return (
            <Provider store={store}>
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
            </Provider>
        );
    }
}
