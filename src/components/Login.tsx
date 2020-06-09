import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { AppRoute, RootStackProps } from '../Route';
import { useStores } from '../hooks/useStores';
import { useObserver } from 'mobx-react-lite';
import { when } from 'mobx';

export const Login = (props: RootStackProps<AppRoute.LOGIN>) => {
    const { loginStore } = useStores();

    const goToProfile = () =>
        props.navigation.navigate(AppRoute.PROFILE, {
            userId: loginStore.userName,
        });

    when(() => loginStore.isLoggedIn, goToProfile);

    return useObserver(() => (
        <View style={styles.container}>
            <Text>THIS IS LOGIN SCREEN!</Text>
            <TextInput
                style={{ height: 40 }}
                placeholder="Enter USER NAME"
                onChangeText={(text) => loginStore.setUserName(text)}
            />
            <Text>Entered Username: {loginStore.userName}</Text>
            {!loginStore.inProgress && !loginStore.isLoggedIn && (
                <Button title="LOGIN" onPress={() => loginStore.loginUser()} />
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
