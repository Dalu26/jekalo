import React from 'react';
import { StyleSheet, Pressable, View, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MyText } from '../utils/common/index'
import GStyles from '../assets/styles/GeneralStyles'
import colors from '../utils/colors'
import { shortenXterLength } from '../utils/helpers';

const Card = ({name, img, nickname}) => {
    const { container, textNick, medName, topSection, bottomSection, imgStyle } = styles
    const { textSofiaProSemiBold, textSofiaProBold } = GStyles
    return(
        <Pressable 
            style={[container]} 
            >
                <View style={[topSection]}>
                    <Image 
                        style={imgStyle} 
                        source={{uri: img}} 
                    />
                </View>
                <View style={[bottomSection]}>
                    <MyText style={[textSofiaProSemiBold, medName]}>
                        {shortenXterLength(name, 20)}
                    </MyText>
                    <MyText style={[textNick, textSofiaProBold]}>
                        "{nickname}"
                    </MyText>
                </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        height: RFValue(220),
        width: '95%',
        backgroundColor: colors.white,
        margin: RFValue(5),
        borderRadius: RFValue(8),
        padding: RFValue(8),
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'rgba(253, 195, 0, 0.06)'
    },
    imgStyle: {
        height: '100%', 
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RFValue(4)
    },
    medName: {
        fontSize: RFValue(12),
        color: colors.jgreen,
        marginTop: RFValue(5)
    },
    textNick: {
        color: colors.black,
        fontSize: RFValue(12),
    },
    topSection: {
        flex: 8, 
        borderTopRightRadius: RFValue(8), 
        borderTopLeftRadius: RFValue(8)
    },
    bottomSection: {
        flex: 1.5, 
        height: '100%'
    },
})

export default Card;