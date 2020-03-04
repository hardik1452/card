import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import { FONT_FAMILY } from '../../config/globals';
import { Icon } from 'react-native-material-ui';
import { get } from 'lodash';

export default class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLabel: false
    };
  }

  onChangeText(val) {
    if (get(val, 'length', 0) > 0) {
      this.setState({ showLabel: true });
    } else {
      this.setState({ showLabel: false });
    }
    if (this.props.onChangeText) {
      this.props.onChangeText(val);
    }
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <View style={{ borderRadius: 10, borderWidth: 1, flexDirection: 'row', borderColor: this.props.textInputContainer || '#707070', ...this.props.errorMessage === '' ? { borderColor: this.props.borderColor } : null, ...this.props.errorMessage ? { borderColor: '#ff3b30' } : null }}>
          {
            this.props.showLabel && this.state.showLabel ?
              <View style={{ backgroundColor: this.props.lableBg || '#fff', color: this.props.lableColor || '#707070', position: 'absolute', marginLeft: 10, marginTop: -8 }}>
                <Text style={{ fontSize: 12, color: this.props.placeholderColor || "#707070", fontFamily: FONT_FAMILY, paddingLeft: 2, paddingRight: 2 }}>{this.props.label || this.props.placeholder}</Text>
              </View>
              : null
          }
          <TextInput
            ref={(x) => this.props.refx ? this.props.refx(x) : null}
            style={{
              height: this.props.height || 48, paddingLeft: 15, fontSize: 15, color: this.props.textColor || '#909090', fontFamily: FONT_FAMILY,
              ...this.props.icon ? { minWidth: '90%' } :
                !Platform.isPad ? { minWidth: '100%' } : { minWidth: '95%' },
              ...this.props.textInputStyle,
            }}
            placeholder={this.props.placeholder || 'Username'}
            placeholderTextColor={this.props.placeholderColor || "#707070"}
            onChangeText={(val) => this.props.onChangeText ? this.onChangeText(val) : null}
            onChange={(e) => this.props.onChange ? this.props.onChange(e) : null}
            defaultValue={this.props.defaultValue || null}
            secureTextEntry={this.props.secureTextEntry || false}
            editable={this.props.isEditable && this.props.isEditable === false ? false : true}
            // selectionColor={this.props.selectionColor}
            onBlur={this.props.onBlur ? this.props.onBlur : null}
            onChange={this.props.onChange ? this.props.onChange : null}
            onFocus={this.props.onFocus ? this.props.onFocus : null}
            onEndEditing={this.props.onEndEditing ? this.props.onEndEditing : null}
            onSubmitEditing={this.props.onSubmitEditing ? this.props.onSubmitEditing : null}
            selectionColor={this.props.cursorColor ? this.props.cursorColor : 'black'}
            autoFocus={this.props.autoFocus ? this.props.autoFocus : null}
            multiline={this.props.multiline}
            caretHidden={this.props.caretHidden ? this.props.caretHidden : null}
            disableFullscreenUI={this.props.disableFullscreenUI ? this.props.disableFullscreenUI : null}
            isFocused={this.props.isFocused ? this.props.isFocused : null}
          />
          {
            this.props.icon ?
              <TouchableOpacity onPress={() => this.props.onIconPress ? this.props.onIconPress() : null} style={{ marginRight: 10, justifyContent: 'center' }}>
                <Icon name={this.props.icon || 'visibility'} size={25} color={this.props.iconColor || 'white'} />
              </TouchableOpacity>
              : null
          }

          {
            this.props.image ?
              <TouchableOpacity style={{ marginRight: 10, justifyContent: 'center' }}>
                <Image source={this.props.image || require('../../images/unfold.png')} style={{ height: 40, width: 40 }} />
              </TouchableOpacity>
              :
              null
          }

        </View>
        {
          this.props.errorMessage ?
            <View style={{ paddingLeft: 5, paddingTop: 2 }}>
              <Text style={{ color: '#ff3b30' }}>{this.props.errorMessage || ''}</Text>
            </View>
            : null
        }
      </View>
    )
  }
} `         `