import { NavigationContainer } from '@react-navigation/native';
import { AppRoute, RootStackParamList } from './Route';
import { SignInView } from './ui/login/SignInView';
import { ProfileView } from './ui/profile/ProfileView';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useObserver } from 'mobx-react-lite';
import { InjectionUtils } from './InjectionUtils';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
    const authManager = InjectionUtils.getAuthManager();
    return useObserver(() => (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                {!authManager.isSighedId ? (
                    <>
                        <Stack.Screen
                            name={AppRoute.SIGN_IN}
                            component={SignInView}
                            options={{ title: 'Sign In' }}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name={AppRoute.PROFILE}
                            component={ProfileView}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    ));
};
