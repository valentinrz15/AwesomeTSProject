import { AppRegistry } from 'react-native';
import codePush from 'react-native-code-push';
import App from './src/screens/App';
import { name as appName } from './app.json';

const MainApp = codePush(App);

AppRegistry.registerComponent(appName, () => MainApp);
