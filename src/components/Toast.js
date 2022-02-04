import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import GStyles from '../assets/styles/GeneralStyles';
import { MyText } from '../utils/common/index';

const Toast = ({title, message}) => {

    const { textSofiaProBold, textSofiaProMedium } = GStyles
    const { container, titleText, messageText } = styles;
    return(
        <View style={container}>
          <MyText style={[titleText, textSofiaProBold]}>
            {title}
          </MyText>
          <MyText style={[messageText, textSofiaProMedium]}>{message}</MyText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: "85%",
        paddingHorizontal: RFValue(15),
        paddingVertical: RFValue(10),
        backgroundColor: "#fff",
        marginVertical: RFValue(4),
        borderRadius: RFValue(8),
        borderLeftColor: "#00C851",
        borderLeftWidth: RFValue(6),
        justifyContent: "center",
        paddingLeft: RFValue(16),
    },
    titleText: {
        fontSize: RFValue(14),
        color: "#333",
    },
    messageText: {
        color: "#a3a3a3", 
        marginTop: RFValue(2) 
    }
})

export default Toast