import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { RFValue } from 'react-native-responsive-fontsize';
import { MyText } from '../../utils/common/index';
import GStyles from '../../assets/styles/GeneralStyles';
import colors from '../../utils/colors';
import Logo from '../../assets/icons/logo/logo.svg';

const Characters = ({ navigation }) => {
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
                    <Animatable.View  
                        animation={'swing'}
                        easing="ease-in" 
                        iterationCount="infinite" 
                        direction='normal'
                        iterationDelay={2500}
                        useNativeDriver={true}
                    >
                        <Logo 
                            height={RFValue(30)} 
                            width={RFValue(30)} 
                        />
                    </Animatable.View>
                    <MyText style={[textSofiaProBold, headerText]}>
                        Jekalo
                    </MyText>
                </View>
            <MyText>Characters</MyText>
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
         borderBottomColor: 'rgba(76, 178, 16, 0.4)',
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

export default Characters