import React, { useState, useRef } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import GStyles from '../../assets/styles/GeneralStyles';
import colors from '../colors';

const CustomInput = (props) => {
    const [customBW, setCustomBW] = useState(0)
    let inputRef = useRef(null);

    const handleOnFocus = () => {
        setCustomBW(1.5)
    }

    const handleOnBlur = () => {
        setCustomBW(0)
    }

    const { inputStyle } = styles;
    const { textSofiaPro } = GStyles

    const { placeholder, 
            onChangeText, 
            value, 
            onFocus, 
            onBlur, 
            autoCapitalize,
            textInputStyle, 
            onChange, 
            placeholderColor, 
            textAlignVertical, 
            multiline, 
            keyboard, 
            error, 
            autoFocus,
            maxLength 
        } = props;
    
    return (
            <TextInput
                style={[inputStyle, 
                        textInputStyle, 
                        textSofiaPro, 
                        {borderBottomWidth: customBW, 
                        borderBottomColor: error ? 
                        'red' : colors.mOrange}
                ]}
                onChangeText={onChangeText}
                autoCorrect={false}
                value={value}
                onBlur={() => {onBlur && onBlur(), handleOnBlur()}}
                onFocus={() => {onFocus && onFocus(), handleOnFocus()}}
                autoCapitalize={autoCapitalize || 'none'}
                placeholder={placeholder || ' '}
                onChange={onChange}
                keyboardType={keyboard} 
                maxLength={maxLength}
                multiline={multiline}
                placeholderTextColor={placeholderColor || 'rgba(99, 99, 99, 0.7)'} 
                textAlignVertical={textAlignVertical || "center"}
                ref={ref => inputRef = ref}
                autoFocus={autoFocus && autoFocus}
            />
    );
}
const styles = StyleSheet.create({
  inputStyle: {
    height: RFValue(50),
    width: '100%',
    fontSize: RFValue(15),
    backgroundColor: '#F5F5F5',
    color: colors.black,
    paddingHorizontal: RFValue(24)
  }
});

export { CustomInput };