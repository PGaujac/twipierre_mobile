import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './components/App/Home/Home';
import Loading from './components/Loading/Loading';
import Register from './components/App/Home/Register';
import Profile from './components/Profile/Profile';

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: Home,
      Register: Register,
      Profile: Profile,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);
