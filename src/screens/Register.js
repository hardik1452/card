import React from 'react';
import { View, TextInput, Dimensions, ScrollView, ImageBackground } from 'react-native';
import { Button, Icon, Checkbox } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }
  render() {
    const { height, width } = Dimensions.get('window');
    return (
      <ImageBackground source={require('../images/bg01.jpg')} style={{ width, height }}>
        <ScrollView>
          <View style={{ paddingTop: 70, backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#ffffff' }} >

              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                <Button
                  upperCase={false}
                  style={{
                    container: { borderRadius: 10 },
                    text: { fontSize: 25, fontFamily: 'Poppins-Medium' }
                  }}
                  text='Create an Account'
                />
              </View>

              <View style={{ alignItems: 'flex-end' }}>
                <Button
                  onPress={() => Actions.Login()}
                  upperCase={false}
                  style={{
                    container: { borderRadius: 10 },
                    text: { fontSize: 25, color: 'grey', fontFamily: 'Poppins-Medium' }
                  }}
                  text='Sign In'
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ borderBottomColor: '#266cf7', borderBottomWidth: 5, marginLeft: 18, width: 61 }} />
              <View style={{ borderBottomColor: '#9bbfeb', borderBottomWidth: 5, marginLeft: 215, width: 50 }} />
            </View>
            <View style={{ marginRight: 20, marginTop: 60, alignItems: 'center' }}>
              <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', width: width - 60 }}>
                <Icon name='account-circle' color='#266cf7' />
                <TextInput style={{ width: 320, fontFamily: 'Poppins-Medium' }} placeholder='FULL NAME' placeholderTextColor='#c4c9cf' underlineColorAndroid='grey' text={{ fontFamily: 'Poppins-Medium' }} />
              </View>
            </View>
            <View style={{ marginRight: 20, marginTop: 20, alignItems: 'center' }}>
              <View style={{ alignItems: 'center', flexDirection: 'row', width: width - 60 }}>
                <Icon name="email" color='#266cf7' />
                <TextInput style={{ width: 320, fontFamily: 'Poppins-Medium' }} placeholder='EMAIL' placeholderTextColor='#c4c9cf' underlineColorAndroid='grey' />
              </View>
            </View>
            <View style={{ marginRight: 20, marginTop: 20, alignItems: 'center' }}>
              <View style={{ height: 70, alignItems: 'center', flexDirection: 'row', width: width - 60 }}>
                <Icon name='lock' color='#266cf7' />
                <TextInput style={{ width: 320, fontFamily: 'Poppins-Medium' }} placeholder='PASSWORD' placeholderTextColor='#c4c9cf' underlineColorAndroid='grey' secureTextEntry={true} />
              </View>
            </View>
            <View style={{ marginTop: 20, marginLeft: 5 }}>
              <Checkbox
                // style={{ text:{fontSize: 20, fontFamily:'Poppins-Medium'}}}
                label="I agree to the Terms & Condition"
                value="agree"
                fontFamily="Poppins-Medium"
                fontSize={20}
                checked={this.state.checked}
                onCheck={() => this.setState({ checked: !this.state.checked })} />
            </View>
            <View style={{ alignItems: 'center' }}>
              <Button upperCase={false} style={{ container: { marginTop: 10, width: width - 50, height: 55, backgroundColor: '#266cf7', borderRadius: 2 }, text: { color: '#ffffff', fontSize: 20, fontFamily: 'Poppins-Bold' } }} text={'SIGN UP'} />
            </View>


          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}