import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Button, Icon, Checkbox, Divider } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';

// import { GoogleSigninButton, GoogleSignin, statusCodes } from '@react-native-community/google-signin';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      email: '',
      validated: false,
    }
  }

  validateEmail() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === true) {
      alert('valid');
    }
    else {
      alert('Wrong Email Address');
    }
  }
  validatePassword() {
    minimum = 5;

  }

  // componentDidMount() {
  //   GoogleSignin.configure({
  //     // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId: '842801379924-ttvn46ieujl3jcu9n2sv79lpbma4nr6s.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     hostedDomain: '', // specifies a hosted domain restriction
  //     // loginHint = '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  //     forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
  //     // accountName = '', // [Android] specifies an account name on the device that should be used
  //     // iosClientId = '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //   });
  // }


  // async signIn() {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     this.setState({ userInfo });
  //     console.log("User Info: ", userInfo);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log('SIGN IN CANCELLED');
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log('Sign in Progress');
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log('Play Services ERROR');
  //       // play services not available or outdated
  //     } else {
  //       console.log('something happened..?');
  //       // some other error happened
  //     }
  //   }
  // };


  render() {
    const { height, width } = Dimensions.get('window');

    return (
      <ImageBackground source={require('../images/bg01.jpg')} style={{ width, height }}>
        <ScrollView>
          <View style={{ paddingTop: 50, backgroundColor: 'transparent' }}>
            <View style={{ alignItems:'center'}}>
              <Image  source={require('../images/logo.png')} style={{width:200, height:200}} />
            </View>

            <View style={{ marginTop: 20, paddingLeft: 13,backgroundColor:'trasnparent' }} >
              <View style={{ marginRight: 20, alignItems: 'center' }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', width: width - 60 }}>
                  <Icon name="email" color='#029af4' />
                  <TextInput
                    style={{ width: 320, fontFamily: 'Poppins-Medium' }}
                    placeholder='Employee ID'
                    placeholderTextColor='#c4c9cf'
                    underlineColorAndroid='grey'
                    value={this.state.email}
                    onChangeText={(text) => this.setState({ email: text })}
                  />
                </View>
              </View>
              <View style={{ marginRight: 20, marginTop: 20, alignItems: 'center' }}>
                <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', width: width - 60 }}>
                  <Icon name='lock' color='#029af4' />
                  <TextInput style={{ width: 320, fontFamily: 'Poppins-Medium' }} placeholder='Password' placeholderTextColor='#c4c9cf' underlineColorAndroid='grey' secureTextEntry={true} />
                </View>
              </View>
              <View >
                <TouchableOpacity onPress={() => alert('The Forget Password Screen will open')}>
                  <Text style={{ paddingTop: 10, paddingLeft: 14, color: '#029af4', fontFamily: 'Poppins-Medium' }}>FORGET PASSWORD?</Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 20 }}>
                <Checkbox
                  style={{ fontSize: 20 ,fontFamily:'Poppins-Medium'}}
                  label="Remember Me"
                  value="agree"
                  checked={this.state.checked}
                  onCheck={() => this.setState({ checked: !this.state.checked })} />
              </View>
              <View style={{ alignItems: 'center' }}>
                <Button
                  upperCase={false}
                  style={{
                    container: { marginTop: 10, width: width - 50, height: 55, backgroundColor: '#029af4', borderRadius: 2 },
                    text: { color: '#ffffff', fontSize: 20, fontFamily: 'Poppins-Bold' }
                  }}
                  text={'SIGN IN'}
                  onPress={() => this.validateEmail()}
                />
              </View>
              {/* <View style={{ backgroundColor: 'transparent', marginTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ flex: 1, backgroundColor: 'red', marginLeft: 13 }}>
                    <Divider style={{ container: { borderWidth: 1, borderBottomColor: '#029af4' } }} />
                  </View>
                  <View>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#266cf7', paddingLeft: 5, paddingRight: 5 }}>OR SIGN UP HERE</Text>
                  </View>
                  <View style={{ flex: 1, backgroundColor: 'blue', marginRight: 14 }}>
                    <Divider style={{ container: { borderWidth: 1, borderBottomColor: '#029af4' } }} />
                  </View>
                </View>
                <View style={{ alignItems:'center',marginLeft: 10, marginRight: 10, marginTop: 18 }}>
                <Button
                  upperCase={false}
                  style={{
                    container: { marginTop: 10, width: width - 50, height: 55, backgroundColor: '#029af4', borderRadius: 2 },
                    text: { color: '#ffffff', fontSize: 20, fontFamily: 'Poppins-Bold' }
                  }}
                  text={'SIGN UP'}
                  onPress={() => this.validateEmail()} 
                  />
                  
                </View>
              </View> */}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}