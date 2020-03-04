// import React from 'react';
// import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
// import { Button } from 'react-native-material-ui';
// import { Actions } from 'react-native-router-flux';
// import { ScrollView } from 'react-native-gesture-handler';

// export default class HomeScreen extends React.Component {
//   render() {
//     const { height, width } = Dimensions.get('window');
//     return (
//       <ImageBackground source={require('../images/bg01.jpg')} style={{ width, height }}>
//         {/* <ScrollView > */}
//         <View style={{ flex: 1, justifyContent: 'center' }}>
//           <View style={{ alignItems: 'center' }}>
//             <Button
//               onPress={() => Actions.Register()}
//               upperCase={false}
//               style={{
//                 container: { backgroundColor: '#266cf7', width: width - 50, height: 60 },
//                 text: { fontFamily: 'Poppins-Medium', fontSize: 20, color: '#fff' }
//               }}
//               text="Create an Account" />
//           </View>
//           <View style={{ alignItems: 'center', marginTop: 20 }}>
//             <Button
//               onPress={() => Actions.Login()}
//               upperCase={false}
//               style={{
//                 container: { backgroundColor: '#266cf7', width: width - 50, height: 60 },
//                 text: { color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 20 }
//               }}
//               text="Sign In" />
//           </View>
//         </View>
//         {/* </ScrollView> */}
//       </ImageBackground>
//     );
//   };
// }

import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Login from '../screens/Login';
import Register from '../screens/Register';
import HomeCopy from './HomeCopy';

const { width, height } = Dimensions.get('window')
const styles = {
  wrapper: {
    backgroundColor: 'red'
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  constainer: {
    flex: 1
  },
  imgBackground: {
    width, height,
    backgroundColor: 'transparent',
  },
  image: {
    width, height
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.constainer}>
        <Swiper style={styles.wrapper}
          dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3', width: 13, height: 13, borderRadius: 7, marginRight: 7 }} />}
          activeDot={<View style={{ backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
          paginationStyle={{ bottom: 70 }}
          loop={false}
        >
          <View style={styles.slide}>
            <HomeCopy />
          </View>
          <View style={styles.slide}>
            <Login />
          </View>
          <View style={styles.slide}>
            <Register />
          </View>
        </Swiper>
      </View>
    )
  }
}