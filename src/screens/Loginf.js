// import React from 'react';
// import { View, Text, Image, TextInput, Dimensions } from "react-native";
// import { Button } from 'react-native-material-ui';
// import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';
// import { ScrollView } from 'react-native-gesture-handler';
// import { BACKGROUND_COLOR, PRIMARY_COLOR, FONT_FAMILY } from '../config/globals';
// import Registration from '../modals/Registration';
// import { get } from 'lodash';
// import { inject, observer } from 'mobx-react';
// import Search from '../modals/Search';
// import Settings from '../modals/Settings';
// import Feedback from '../modals/Feedback';

// @inject('modalStore')
// @observer
// export default class Loginf extends React.Component {
// 	render() {
// 		const { width, height } = Dimensions.get("window");
// 		return (
// 			<ScrollView style={{ backgroundColor: BACKGROUND_COLOR }}>

// 				<View style={{ width, height: height - 70, justifyContent: 'center' }}>

// 					<View style={{ alignItems: 'center' }}>
// 						<Image source={require('../images/a1.jpg')}
// 							style={{ height: 154, width: 165 }}
// 						/>
// 						<Text style={{ marginTop: 12, fontSize: 25, fontFamily: 'Poppins-SemiBold', color: '#000000' }}>Welcome back!</Text>
// 						<Text style={{ marginTop: 12, fontSize: 15, fontFamily: FONT_FAMILY, color: '#9E9E9E' }}>Log in to your existing account</Text>
// 					</View>

// 					<View style={{ alignItems: 'center' }}>
// 						<View style={{
// 							alignItems: 'center',
// 							flexDirection: 'row',
// 							borderColor: '#707070',
// 							borderWidth: 1,
// 							borderRadius: 10,
// 							width: width - 30,
// 							marginTop: 50
// 						}}>
// 							<FontAwsomeIcon name={"envelope"} color='#9E9E9E' style={{ marginLeft: 17 }} size={20} />
// 							<TextInput style={{ width: width - 100, height: 55, fontFamily: FONT_FAMILY, marginLeft: 30 }}
// 								placeholder="Email"
// 								placeholderTextColor="#9E9E9E"
// 							// value={this.this.state..email}
// 							// onChangeText={(text) => this.setState({ email.text })}
// 							/>
// 						</View>
// 					</View>

// 					<View style={{ alignItems: 'center' }}>
// 						<View style={{
// 							alignItems: 'center',
// 							flexDirection: 'row',
// 							borderColor: '#707070',
// 							borderWidth: 1,
// 							borderRadius: 10,
// 							width: width - 30,
// 							marginTop: 20
// 						}}>
// 							<FontAwsomeIcon name={"lock"} color='#9E9E9E' style={{ marginLeft: 20 }} size={25} />
// 							<TextInput style={{ width: width - 100, height: 55, fontFamily: FONT_FAMILY, fontSize: 15, marginLeft: 30 }}
// 								placeholder='Password'
// 								placeholderTextColor='#9E9E9E'
// 								secureTextEntry={true} />
// 						</View>
// 					</View>

// 					<View style={{ marginTop: 10, marginRight: 15, alignItems: 'flex-end' }}>
// 						<Text style={{ color: '#404040', fontSize: 15, fontFamily: 'Poppins-SemiBold' }}>Forgot Password?</Text>
// 					</View>

// 					<View style={{ alignItems: 'center', marginTop: 40 }}>
// 						<Button upperCase={false}
// 							style={{
// 								container: { width: width - 20, height: 50, backgroundColor: PRIMARY_COLOR, borderRadius: 10 },
// 								text: { fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', fontSize: 18 }
// 							}}
// 							text={'LOG IN'}
// 						/>
// 					</View>
// 					<View>
// 						<Text onPress={() => this.props.modalStore.setSearchModal(true)}>Search</Text>
// 						<Text onPress={() => this.props.modalStore.setSettingModal(true)}>Settings</Text>
// 						<Text onPress={() => this.props.modalStore.setFeedbackModal(true)}>Feedback</Text>
// 					</View>
// 				</View>
// 				<View style={{ flex: 2, justifyContent: 'flex-end' }}>
// 					<Text style={{ textAlign: 'center', color: '#707070', fontFamily: FONT_FAMILY }}>Don't have an account?
// 					<Text onPress={() => this.props.modalStore.setRegistrationModal(true)}
// 							style={{ color: PRIMARY_COLOR, fontFamily: 'Poppins-SemiBold', paddingLeft: 15 }}>
// 							Sign Up
// 					</Text>
// 					</Text>
// 				</View>

// 				<Registration
// 					visible={get(this.props, 'modalStore.registrationModal', false)}
// 					onClose={() => this.props.modalStore.setRegistrationModal(false)}
// 				/>
// 				<Search
// 					visible={get(this.props, 'modalStore.SearchModal', false)}
// 					onClose={() => this.props.modalStore.setSearchModal(false)} />

// 				<Settings
// 					visible={get(this.props, 'modalStore.settingModal', false)}
// 					onClose={() => this.props.modalStore.setSettingModal(false)} />
// 				<Feedback  visible={get(this.props, 'modalStore.feedbackModal', false)}
// 				onClose={() => this.props.modalStore.setFeedbackModal(false)}/>
// 			</ScrollView>
// 			)
// 		}
// }