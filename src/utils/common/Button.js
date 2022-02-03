import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import GeneralStyles from '../../assets/styles/GeneralStyles';
import { Spinner } from './Spinner';
import { MyText } from './MyText';
import colors from '../colors';

const CustomButton = (props) => {
    const { containerStyle, 
            touchableContainerStyle, 
            contentContainer, 
            disabledStyles, 
            buttonTextStyles 
        } = styles;
    const { centerContentStyle } = GeneralStyles;
    const { onPress, 
            disabled, 
            buttonStyle, 
            onPressOut, 
            onPressIn, 
            onLongPress, 
            loading, 
            spinnerColor, 
            textStyle, 
            buttonText, 
            img 
        } = props;
    const buttonDisabled = disabled || loading ? true : false;
    const buttonDisabledStyle = disabled || loading ? disabledStyles : '';
  
  const renderSpinnerOrText = () => {
    const color = spinnerColor ? spinnerColor : colors.white;
    if (loading) {
      return <Spinner color={color} size={20} />;
    }
        return <MyText style={[buttonTextStyles, textStyle]}>{buttonText}</MyText>;
    }

    return (
      <View style={[containerStyle]}>
        <Pressable
          onPress={onPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onLongPress={onLongPress}
          disabled={buttonDisabled}
          style={[touchableContainerStyle,
            buttonDisabledStyle, 
            centerContentStyle, buttonStyle]}>
          <View style={contentContainer}>
            {img && <View style={{marginRight: RFValue(10)}}>{img}</View>}
            {renderSpinnerOrText()}
          </View>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
  },
  touchableContainerStyle: {
    justifyContent:'center',
    borderRadius: RFValue(10),
    backgroundColor: colors.mOrange,
    height: RFValue(48)
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyles: {
    color: colors.white,
    ...GeneralStyles.textSofiaProBold,
    fontSize: RFValue(16),
    lineHeight: RFValue(18)
  },
  disabledStyles: {
    opacity: 0.6,
  },
});

export { CustomButton };