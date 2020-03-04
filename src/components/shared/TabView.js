import React from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { map, get } from 'lodash';
import { PRIMARY_COLOR, FONT_FAMILY } from '../../config/globals';

export default class TabView extends React.Component {

  render() {
    const { height, width } = Dimensions.get('window');
    return (
      <View style={{ flexDirection: 'row', flex: 1, width: width - 40, borderWidth: 1, borderColor: '#707070', borderRadius: 20, marginTop: 20, height: 35, justifyContent: 'center' }}>
        {
          get(this.props, 'context', []).map((val) => (

            get(this.props, 'selected.key', null) === val.key ?
              <TouchableWithoutFeedback
                onPress={() => this.props.onSelect ? this.props.onSelect(val) : null}>
                <View style={{
                  backgroundColor: '#26A9E0', flex: 1,
                  ...get(this.props, 'selected.key', null) === 'As an Individual'
                    ?
                    { borderTopLeftRadius: 20, borderBottomLeftRadius: 20 } : null,

                  ...get(this.props, 'selected.key', null) === 'As an NGO'
                    ?
                    { borderBottomRightRadius: 20, borderTopRightRadius: 20 } : null,

                  ...this.props.customStyle,
                  alignItems: 'center', justifyContent: 'center'
                }}>
                  <Text style={{ color: 'white', fontFamily: FONT_FAMILY }}>{val.value}</Text>
                </View>
              </TouchableWithoutFeedback>
              :
              <TouchableWithoutFeedback onPress={() => this.props.onSelect ? this.props.onSelect(val) : null}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: '#472743', fontFamily: FONT_FAMILY }}>{val.value}</Text>
                </View>
              </TouchableWithoutFeedback>
          ))
        }
      </View>
    )
  }
}