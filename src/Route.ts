import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export enum AppRoute {
    SIGN_IN = 'SIGN_IN',
    PROFILE = 'PROFILE',
}

export type RootStackParamList = {
    [AppRoute.SIGN_IN]: undefined;
    [AppRoute.PROFILE]: undefined;
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
