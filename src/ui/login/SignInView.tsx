import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { AppRoute, RootStackProps } from '../../Route';
import { useObserver, useLocalStore } from 'mobx-react-lite';
import { InjectionUtils } from '../../InjectionUtils';

export const SignInView = (props: RootStackProps<AppRoute.SIGN_IN>) => {
    const signInViewModel = useLocalStore(InjectionUtils.createSignInViewModel);

    return useObserver(() => (
        <View style={styles.container}>
            <Text>THIS IS LOGIN SCREEN!</Text>
            <TextInput
                style={{ height: 40 }}
                placeholder="Enter USER NAME"
                onChangeText={signInViewModel.setUserName}
            />
            <Text>Entered Username: {signInViewModel.userName}</Text>
            {signInViewModel.showLoginButton && (
                <Button
                    title="Sign In"
                    onPress={signInViewModel.signInUser}
                    disabled={signInViewModel.SignInButtonDisabled}
                />
            )}
        </View>
    ));
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
