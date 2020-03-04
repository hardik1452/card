import React from 'react';
import { View, Text, Dimensions, ScrollView, Image } from 'react-native';
import NewBlankModal from '../components/shared/NewBlankModal';
import Header from '../components/shared/Header';
import { FONT_FAMILY, } from '../config/globals';
import { Icon } from 'react-native-material-ui';
export default class Settings extends React.Component {
    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <ScrollView>
                <NewBlankModal
                    visible={this.props.visible}
                >
                    <Header
                        title={'Settings'}
                        showBack={false}
                        showRight={true} />

                    <View style={{ paddingTop: 14, justifyContent:'center' }}>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <Image source={require('../images/feedback.png')} />
                            <Text style={{ fontFamily: FONT_FAMILY, fontSize: 15, marginLeft:20  }}>Send Feedback</Text>
                            <Icon name={'chevron-right'} size={20} />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'flex-start', marginTop:40}}>
                            <Image source={require('../images/crown.png')} />
                            <Text style={{ fontFamily: FONT_FAMILY, fontSize: 15, marginLeft:20  }}>Subscription</Text>
                            <Icon name={'chevron-right'} size={20} />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'flex-start',marginTop: 40}}>
                            <Image source={require('../images/share.png')} />
                            <Text style={{ fontFamily: FONT_FAMILY, fontSize: 15, marginLeft:20   }}>Share App</Text>
                            <Icon name={'chevron-right'} size={20} />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'flex-start',marginTop: 40}}>
                            <Image source={require('../images/favorite.png')} />
                            <Text style={{ fontFamily: FONT_FAMILY, fontSize: 15, marginLeft:20   }}>Rate this app</Text>
                            <Icon name={'chevron-right'} size={20} />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'flex-start',marginTop: 40}}>
                            <Image source={require('../images/password.png')} />
                            <Text style={{ fontFamily: FONT_FAMILY, fontSize: 15, marginLeft:20   }}>Privacy Policy</Text>
                            <Icon name={'chevron-right'} size={20} />
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'flex-start',marginTop: 40}}>
                            <Image source={require('../images/logout.png')} />
                            <Text style={{ fontFamily: FONT_FAMILY, fontSize: 15, marginLeft:20   }}>Log Out</Text>
                            <Icon name={'chevron-right'} size={20} />
                        </View>
                    </View>
                </NewBlankModal>
            </ScrollView >
        )
    }
}