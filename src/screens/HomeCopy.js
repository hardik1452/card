import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'react-native-material-ui';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeCopy extends React.Component {
  render() {
    const { height, width } = Dimensions.get('window');
    return (
      <ImageBackground source={require('../images/bg01.jpg')} style={{ width, height }}>
        {/* <ScrollView > */}
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Button
              onPress={() => Actions.Register()}
              upperCase={false}
              style={{
                container: { backgroundColor: '#266cf7', width: width - 50, height: 60 },
                text: { fontFamily: 'Poppins-Medium', fontSize: 20, color: '#fff' }
              }}
              text="Create an Account" />
          </View>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Button
              onPress={() => Actions.Login()}
              upperCase={false}
              style={{
                container: { backgroundColor: '#266cf7', width: width - 50, height: 60 },
                text: { color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 20 }
              }}
              text="Sign In" />
          </View>
        </View>
        {/* </ScrollView> */}
      </ImageBackground>
    );
  };
}