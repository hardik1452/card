import React from 'react';
import { View, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import Modal from "react-native-modal";


const { height, width } = Dimensions.get('window');

export default class NewBlankModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const customHeight = this.props.modalHeight || 0.85;
        const newHeight = height * customHeight;
        return (
            <Modal
                isVisible={this.props.visible || false}
                onSwipeComplete={this.props.notSwipable ? null : () => this.props.onClose()}
                // swipeDirection={'down'}
                // scrollTo={this.handleScrollTo}
                // scrollOffset={this.state.scrollOffset}
                // scrollOffsetMax={100} // content height - ScrollView height
                propagateSwipe={true}
                useNativeDriver={true}
                
                style={{ ...styles.bottomModal, ...this.props.modalStyle }}
            >
                <KeyboardAvoidingView style={{ ...styles.scrollableModal, height: newHeight, ...this.props.scrollableModalStyle }} behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
                    {this.props.children}

                    {this.props.footer}
                </KeyboardAvoidingView>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    bottomModal: {
        margin: 0,
        flex: 1,
        justifyContent: 'flex-end',
    },
    scrollableModal: {
        backgroundColor: 'white',
        paddingTop: 10,
        width: width,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center'
    }
});
