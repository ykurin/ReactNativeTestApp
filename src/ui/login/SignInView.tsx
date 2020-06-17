import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import { AppRoute, RootStackProps } from '../../Route';
import { useObserver, useLocalStore } from 'mobx-react-lite';
import { InjectionUtils } from '../../InjectionUtils';

export const SignInView = (props: RootStackProps<AppRoute.SIGN_IN>) => {
    const signInViewModel = useLocalStore(InjectionUtils.createSignInViewModel);

    useEffect(() => {
        signInViewModel.checkToken();
    });

    return useObserver(() => (
        <View style={styles.container}>
            {!signInViewModel.isTokenChecked ? (
                <ActivityIndicator
                    color={'#000000'}
                    size={'large'}
                    style={{ marginEnd: 12 }}
                />
            ) : (
                <>
                    <Text>THIS IS SIGN IN SCREEN!</Text>
                    <View style={styles.view}>
                        <TextInput
                            style={styles.input3}
                            placeholder="Username"
                            onChangeText={signInViewModel.setUserName}
                        />
                    </View>
                    <View style={styles.view}>
                        <TextInput
                            style={styles.input3}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={signInViewModel.setPassword}
                        />
                    </View>
                    {signInViewModel.showLoginButton && (
                        <View style={styles.view}>
                            <Button
                                title="Sign In"
                                onPress={signInViewModel.signInUser}
                                disabled={signInViewModel.signInButtonDisabled}
                            />
                        </View>
                    )}
                    {signInViewModel.inProgress && (
                        <ActivityIndicator
                            color={'#000000'}
                            size={'large'}
                            style={{ marginEnd: 12 }}
                        />
                    )}
                </>
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
    view: {
        marginVertical: 16,
        marginHorizontal: 20,
    },
    divider: {
        backgroundColor: 'gray',
        height: 0.5,
        marginBottom: 12,
    },
    header: {
        fontSize: 17,
        color: '#999999',
        marginBottom: 12,
    },
    input3: {
        fontSize: 16,
        padding: 8,
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 0.5,
        fontWeight: '100',
    },
});
