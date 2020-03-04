import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import NewBlankModal from "../components/shared/NewBlankModal";
import { inject } from 'mobx-react';
import { FONT_FAMILY, PRIMARY_COLOR } from '../config/globals';
import Header from '../components/shared/Header';
import CustomTextInput from "../components/shared/CustomTextInput";
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';

inject('modalStore')
export default class Search extends React.Component {
    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <NewBlankModal visible={this.props.visible}>
                <Header
                    title={'Search'}
                    showBack={false}
                    showRight={true}
                />
                <View style={{ justifyContent: 'center', marginLeft: 10, marginRight: 10 }}>
                    <CustomTextInput showlabel={true} style={{ fontFamily: FONT_FAMILY }}
                        placeholder={'Location'} />
                    <CustomTextInput showlabel={true} style={{ fontFamily: FONT_FAMILY }}
                        placeholder={'What are you looking for?'} />
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 10, marginTop: 10, marginRight: 10, borderWidth: 1, borderColor: '#707070', height: 45 }}>
                    <FontAwsomeIcon name={'sort-desc'} size={20} />
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 10, marginTop: 10, marginRight: 10, borderWidth: 1, borderColor: '#707070', height: 45 }}>
                    <FontAwsomeIcon name={'sort-desc'} size={20} />
                </View>
            </NewBlankModal>

        )
    }
}