import React from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import { Alert, BackHandler } from 'react-native';
//Screens
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import HomeCopy from '../screens/HomeCopy';
import Loginf from '../screens/Loginf';

export default class Routes extends React.Component {
  onBackAndroid() {
    if (Actions.currentScene === '_home') {
      Alert.alert(
        'Are you sure? You want to exit?',
        '' ,
        [
         {text: 'No', onPress: () => {}, style: 'cancel'},
          {text: 'Yes', onPress: () => { BackHandler.exitApp() }},
        ],
        { cancelable: false }
      );
      return true;
    } else {
      Actions.pop();
      return true;
    }
}
  render() {
    return (
      <Router backAndroidHandler={() => this.onBackAndroid()}>
        <Stack key="root">
          <Scene key="HomeScreen" component={HomeScreen} hideNavBar />
          <Scene key="Login" component={Login} hideNavBar initial/>
          <Scene key="Register" component={Register} hideNavBar/>
          <Scene key="HomeCopy" component={HomeCopy} hideNavBar />
          <Scene key="Loginf" component={Loginf}  hideNavBar  />
        </Stack>
      </Router>
    )
  }
}