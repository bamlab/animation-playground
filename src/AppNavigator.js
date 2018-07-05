// @flow
import { createStackNavigator } from 'react-navigation';
import * as Pages from './pages';

export const AppNavigator = createStackNavigator(
  {
    home: {
      screen: Pages.Home,
      title: 'Home',
    },
  },
  {
    initialRouteName: 'home',
  }
);

export default AppNavigator;
