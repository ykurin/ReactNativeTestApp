import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AppRoute, RootStackProps } from '../../Route';
import { InjectionUtils } from '../../InjectionUtils';
import { useLocalStore, useObserver } from 'mobx-react-lite';

export const ProfileView = (props: RootStackProps<AppRoute.PROFILE>) => {
    const profileViewModel = useLocalStore(
        InjectionUtils.createProfileViewModel,
    );

    return useObserver(() => (
        <View style={styles.container}>
            <Text>PROFILE SCREEN!</Text>
            <Text>Username: {profileViewModel.userName}</Text>
            <Button title="Sign Out" onPress={profileViewModel.signOut} />
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
