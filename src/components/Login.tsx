import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { AppRoute, RootStackProps } from '../Route';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, loginUser } from '../stores/login/Actions';
import { LoginState } from '../stores/login/Types';

export const Login = (props: RootStackProps<AppRoute.LOGIN>) => {
    const userName = useSelector((state: LoginState) => state.userName);
    const inProgress = useSelector((state: LoginState) => state.inProgress);
    const isLoggedIn = useSelector((state: LoginState) => state.isLoggedIn);

    const dispatch = useDispatch();

    if (isLoggedIn) {
        props.navigation.navigate(AppRoute.PROFILE, {
            userId: userName,
        });
    }

    return (
        <View style={styles.container}>
            <Text>THIS IS LOGIN SCREEN!</Text>
            <TextInput
                style={{ height: 40 }}
                placeholder="Enter USER NAME"
                onChangeText={(text) => dispatch(setUsername(text))}
            />
            <Text>Entered Username: {userName}</Text>
            {!inProgress && !isLoggedIn && (
                <Button title="LOGIN" onPress={() => dispatch(loginUser())} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
