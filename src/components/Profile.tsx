import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppRoute, RootStackProps } from '../Route';

export const Profile = (props: RootStackProps<AppRoute.PROFILE>) => {
    return (
        <View style={styles.container}>
            <Text>
                PROFILE SCREEN! User ID from params IS{' '}
                {props.route.params.userId}
            </Text>
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
