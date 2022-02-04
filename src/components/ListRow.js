import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MyText } from '../utils/common/index'
import GStyles from '../assets/styles/GeneralStyles'
import colors from '../utils/colors'

const ListRow = ({title, season, air_date, episode_id}) => {
    const { container, titleText, iconContainer, subtitleText, titleContainer, iconText } = styles;
    const { textSofiaPro, textSofiaProSemiBold, flexRow, centerContentStyle } = GStyles;

    return(
        <Pressable style={[container, flexRow]}>
            <View style={[iconContainer, centerContentStyle]}>
                <MyText style={[
                    iconText, textSofiaProSemiBold
                    ]}>
                        {episode_id}
                    </MyText>
            </View>
            <View style={titleContainer}>
                <MyText style={[titleText, textSofiaProSemiBold]}>S{season}: {title}</MyText>
                <MyText style={[subtitleText, textSofiaPro]}>{air_date}</MyText>
            </View>
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
        color: colors.black,
        fontSize: RFValue(16),
    },
    iconText: {
        color: colors.jgreen,
        fontSize: RFValue(14)
    },
    subtitleText: {
        fontSize: RFValue(10),
        color: colors.grey,
    },
    iconContainer: {
        height: RFValue(35),
        width: RFValue(35),
        borderRadius: RFValue(6),
        backgroundColor: 'rgba(76, 178, 16, 0.1)',
    }
})

export default ListRow;