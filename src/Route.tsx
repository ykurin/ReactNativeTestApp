import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export enum AppRoute {
    LOGIN = 'LOGIN',
    PROFILE = 'PROFILE',
}

export type RootStackParamList = {
    [AppRoute.LOGIN]: undefined;
    [AppRoute.PROFILE]: { userId: string };
};

// export class RootStackComponent<
//     RouteName extends keyof RootStackParamList
// > extends Component<{
//     navigation: StackNavigationProp<RootStackParamList, RouteName>;
//     route: RouteProp<RootStackParamList, RouteName>;
// }> {}

export type RootStackProps<RouteName extends keyof RootStackParamList> = {
    navigation: StackNavigationProp<RootStackParamList, RouteName>;
    route: RouteProp<RootStackParamList, RouteName>;
};
