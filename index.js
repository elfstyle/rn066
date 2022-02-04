import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {enableScreens, enableFreeze} from 'react-native-screens';
enableScreens();
enableFreeze();

AppRegistry.registerComponent(appName, () => App);
