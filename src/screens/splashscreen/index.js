import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { RFValue } from 'react-native-responsive-fontsize';
import { MyText } from '../../utils/common/index';
import GStyles from '../../assets/styles/GeneralStyles';
import colors from '../../utils/colors';
import Logo from '../../assets/icons/logo/logo.svg';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        checkVitals()
    },[])

    const checkVitals = async () => {
        setTimeout(() => {
            navigation.replace('Drawer')
        }, 2500);
    }

    const { wrapper, iconContainer, title } = styles
    const { textSofiaProBold, textCenter, centerContentStyle } = GStyles

    return (
        <SafeAreaView style={wrapper}>
            <StatusBar 
                translucent={true} 
                backgroundColor="rgba(0,0,0,0)"
                barStyle='light-content' 
            />
            <Animatable.View  
                animation={'fadeIn'}
                easing="ease-in" 
                iterationCount={1} 
                direction='normal'
                iterationDelay={200}
                useNativeDriver={true}
                style={{ textAlign: 'center' }}
            >
                <View style={[iconContainer, centerContentStyle]}>
                    <Logo height={RFValue(60)} width={RFValue(60)} />
                </View>
            </Animatable.View>
            <Animatable.View  
                animation={'fadeIn'}
                easing="ease-in" 
                iterationCount={1} 
                direction='normal'
                iterationDelay={300}
                useNativeDriver={true}
                style={{ textAlign: 'center' }}
            >
                <MyText 
                    style={
                        [title, 
                        textSofiaProBold, 
                        textCenter]
                    }>
                    Jekalo Digital
                </MyText>
        </Animatable.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(76, 178, 16, 1)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: RFValue(90),
        width: RFValue(90),
        borderRadius: RFValue(45)
    },
    title: {
        fontSize: RFValue(15),
        color: colors.white,
        marginTop: RFValue(10),
    },
})

export default SplashScreen