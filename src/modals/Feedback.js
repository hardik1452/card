import React from "react";
import { View, Text, Dimensions } from 'react-native';
import NewBlankModal from "../components/shared/NewBlankModal";
import Header from "../components/shared/Header";
import CustomTextInput from "../components/shared/CustomTextInput";
import { FONT_FAMILY } from "../config/globals";

export default class Feedback extends React.Component {
    render() {
        const {width, height} = Dimensions.get('window');
        return (
            <NewBlankModal
                visible={this.props.visible} >
                <Header title={'Feedback'}
                    showRight={true}
                    showBack={false} />
                <View style={{marginTop: 40,}}>
                    <CustomTextInput style={{fontFamily:FONT_FAMILY}} placeholder={'Write your feedback here...'}  showLabel={true}/>
                </View>
            </NewBlankModal>
        )
    }
}