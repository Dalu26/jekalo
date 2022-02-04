import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Feather';
import { MyText } from '../utils/common/index'
import GStyles from '../assets/styles/GeneralStyles'
import colors from '../utils/colors'

const ListRow = ({icon, title, subtitle,onPress}) => {
    const { container, titleText, iconContainer, subtitleText, titleContainer } = styles;
    const { textSofiaPro, textSofiaProSemiBold, flexRow, centerContentStyle } = GStyles;

    return(
        <Pressable onPress={onPress} style={[container, flexRow]}>
            <View style={[iconContainer, centerContentStyle]}>
                {icon}
            </View>
            <View style={titleContainer}>
                <MyText style={[titleText, textSofiaProSemiBold]}>{title}</MyText>
                <MyText style={[subtitleText, textSofiaPro]}>{subtitle}</MyText>
            </View>
            <Icon name="chevron-right" size={RFValue(20)} color='#000' />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        height: RFValue(50),
        width: '100%',
        backgroundColor: colors.white,
        marginVertical: RFValue(2),
        paddingHorizontal: RFValue(8),
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        marginLeft: RFValue(10),
        height: '100%',
        justifyContent: 'center',
    },
    titleText: {
        color: colors.mOrange,
        fontSize: RFValue(18),
    },
    subtitleText: {
        fontSize: RFValue(10),
        color: colors.grey,
    },
    iconContainer: {
        height: RFValue(35),
        width: RFValue(35),
        borderRadius: RFValue(6),
        backgroundColor: 'rgba(255, 81, 0, 0.1)',
    }
})

export default ListRow;