import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import NewBlankModal from '../components/shared/NewBlankModal';
import { inject } from 'mobx-react';
import Header from '../components/shared/Header';
import { FONT_FAMILY, PRIMARY_COLOR } from '../config/globals';
import TabView from '../components/shared/TabView';
import CustomTextInput from '../components/shared/CustomTextInput';
import { Checkbox, Button } from 'react-native-material-ui';
@inject('modalStore')
export default class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: {
				key: 'As an Individual'
			}
		};
	}

	onSelectTab(tab) {
		this.setState({ selectedTab: tab });
		console.log("Tab: ", tab);
	}
	render() {
		const tabs = [
			{ key: 'As an Individual', value: 'As an Individual' },
			{ key: 'As an NGO', value: 'As an NGO' }
		]
		const { width, height } = Dimensions.get('window');

		return (
			<ScrollView>
				<NewBlankModal
					visible={this.props.visible}
				>
					<Header
						title={'Sign Up'}
						showBack={false}
						showRight={true}
					/>
					<View style={{ paddingTop: 14 }}>
						<Text style={{ fontFamily: FONT_FAMILY, color: '#9E9E9E', fontSize: 15, textAlign: 'center' }}>
							Create a new account simply filling{'\n'} the below form
					</Text>
					</View>
					<View style={{ height: 60 }}>
						<TabView context={tabs} selected={this.state.selectedTab} onSelect={(tab) => this.onSelectTab(tab)} />
					</View>
					<View style={{ marginLeft: 10, marginRight: 10, marginTop: 10, justifyContent: 'center' }}>
						<CustomTextInput style={{ fontFamily: FONT_FAMILY }}
							placeholder={'Name'} showLabel={true} />
						<CustomTextInput style={{ fontFamily: FONT_FAMILY }}
							placeholder={'Email Address '} showLabel={true} />
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<CustomTextInput style={{ fontFamily: FONT_FAMILY }} placeholder={'Phone Number'} showLabel={true} />
						<CustomTextInput style={{ fontFamily: FONT_FAMILY }} placeholder={'Gender'} showLabel={true} />
					</View>
					<View style={{ flexDirection: 'row' }}>
						<CustomTextInput style={{ fontFamily: FONT_FAMILY }} placeholder={'City'} showLabel={true} />
						<CustomTextInput style={{ fontFamily: FONT_FAMILY, marginLeft: 10 }} placeholder={'State'}
							showLabel={true} />
					</View>
					<View style={{ marginLeft: 10, marginRight: 10, marginTop: 10, justifyContent: 'center' }}>
						<CustomTextInput style={{ fontFamily: FONT_FAMILY }} placeholder={'Password'} showLabel={true} />
						<CustomTextInput style={{ fontFamily: FONT_FAMILY, width: width - 29 }} placeholder={'Confirm Password'} showLabel={true} />
					</View>

					<Button upperCase={false}
						style={{
							container: { width: width - 20, height: 50, backgroundColor: PRIMARY_COLOR, borderRadius: 10 },
							text: { fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', fontSize: 18 }
						}}
						text='NEXT' />

				</NewBlankModal>
			</ScrollView>
		);
	}
}
