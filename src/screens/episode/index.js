import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { RFValue } from 'react-native-responsive-fontsize';
import { MyText } from '../../utils/common/index';
import GStyles from '../../assets/styles/GeneralStyles';
import colors from '../../utils/colors';

const Episodes = ({ navigation }) => {
    useEffect(() => {
    },[])

    const { container, header, headerText } = styles
    const { textSofiaProBold, flexRow } = GStyles

    return (
        <SafeAreaView style={container}>
            <StatusBar 
                    translucent={true} 
                    barStyle='dark-content' 
                    backgroundColor="rgba(0,0,0,0)" 
                />
                <View style={[flexRow, header]}>
                    
                </View>
            <MyText>Episodes</MyText>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.smokeyWhite,
        paddingTop: RFValue(35),
        flex: 1,
        paddingHorizontal: RFValue(14),
    },
    header: {
         height: RFValue(50),
        //  borderBottomColor: 'rgba(76, 178, 16, 0.4)',
         borderBottomWidth: 2,
         width: '100%',
         alignItems: 'center',
    },
    headerText: {
         fontSize: RFValue(22),
         color: colors.jgreen,
         borderBottomColor: 'rgba(255, 81, 0, 0.4)',
         marginLeft: RFValue(8)
    }
})

export default Episodes