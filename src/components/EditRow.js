import React from 'react';
import { View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import RestoreIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { MyText } from '../utils/common/index'
import GStyles from '../assets/styles/GeneralStyles'
import colors from '../utils/colors'
import { shortenXterLength, formatPrice } from '../utils/helpers';

const EditRow = ({name, prices, deleteItem, item, disabled, restore}) => {
    const navigation = useNavigation()
    const toEdit = () => {
        navigation.navigate('Edit', item)
    }

    const { container, textPrice, medName, deleteStyle } = styles
    const { textSofiaProSemiBold, textSofiaProBold, flexRow } = GStyles
    return(
        <View style={[container, flexRow]}>
            <Pressable 
                disabled={disabled}
                onPress={() => toEdit()}
                hitSlop={10} 
                style={{
                    flex: 1, opacity: disabled ? 0.5 : 1
                }}>
                    <MyText 
                        style={[
                            textSofiaProSemiBold, medName
                    ]}>
                        {shortenXterLength(name, 35)}
                    </MyText>
                    <MyText 
                        style={[
                            textPrice, textSofiaProBold
                        ]}>
                        {formatPrice("en-GH", 'GHS', prices[0]?.price)}
                    </MyText>
            </Pressable>
            <TouchableOpacity
                onPress={
                    disabled ? restore : deleteItem
                }
                style={[deleteStyle, {
                    backgroundColor: !disabled ? 
                    'rgba(255, 81, 0, 0.1)' : 'rgba(0, 161, 27, 0.3)'
                }]}>
                {!disabled ? 
                    <Icon 
                        name='delete' 
                        size={RFValue(18)} 
                        style={{color: 'red'}} 
                    />
                  :  <RestoreIcon 
                        name='backup-restore' 
                        size={RFValue(18)} 
                        style={{color: 'green'}} 
                    />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: RFValue(50),
        width: '100%',
        backgroundColor: colors.white,
        marginVertical: RFValue(2),
        padding: RFValue(8),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    medName: {
        fontSize: RFValue(14),
        color: colors.black
    },
    textPrice: {
        color: colors.mOrange,
        fontSize: RFValue(10)
    },
    deleteStyle: {
        paddingHorizontal: RFValue(5),
        // backgroundColor: 'rgba(255, 81, 0, 0.1)',
        borderRadius: RFValue(6),
        height: '100%', 
        justifyContent: 'center',
        alignItems: 'center',
        height: RFValue(35),
        width: RFValue(35),
    }
})

export default EditRow;