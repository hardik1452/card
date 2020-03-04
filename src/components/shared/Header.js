import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'react-native-material-ui';
import { FONT_FAMILY, MODAL_TITLE_FONT, TEXT_COLOR } from '../../config/globals';

export default class Header extends React.Component {
    render() {
        const { width, height } = Dimensions.get('window');

        return (
            <View style={{ flexDirection: 'row', width: width, paddingTop: this.props.paddingTop }}>
                <View style={{ justifyContent: 'center', flex: 1, paddingBottom: 20 }}>
                    {
                        this.props.showBack ?
                            <View style={{ paddingLeft: 20 }}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.props.onBackPress ? this.props.onBackPress() : null}>
                                    <Icon name={this.props.leftIcon || 'arrow-back'} size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            :
                            null
                        // <View style={{ paddingLeft: 20, justifyContent: 'center' }}>
                        //     {/* <TouchableOpacity activeOpacity={1} onPress={() => this.props.onBackPress ? this.props.onBackPress() : null}> */}
                        //         <Text style={{ fontSize: 17, fontFamily: FONT_FAMILY, color: TEXT_COLOR }}> {this.props.backText} </Text>
                        //     {/* </TouchableOpacity> */}
                        // </View>
                    }
                </View>

                <View style={{ flex: 3, alignItems: 'center' }}>
                    <Text style={{  fontSize: 20, color: this.props.color || '#000000', paddingBottom: 3, fontFamily: MODAL_TITLE_FONT}}> {this.props.title || null} </Text>
                </View>

                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    {
                        this.props.showRight ?
                            <View style={{ paddingRight: 20, justifyContent: 'center' }}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.props.onRightPress ? this.props.onRightPress() : null}>
                                    <Icon name={this.props.rightIcon || 'close'} size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ paddingRight: 20, justifyContent: 'center' }}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.props.onRightPress ? this.props.onRightPress() : null}>
                                    <Text style={{ fontSize: 17, fontFamily: FONT_FAMILY, color: TEXT_COLOR  }}> {this.props.rightText} </Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </View>
        );
    }
}