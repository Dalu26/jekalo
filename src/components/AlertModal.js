import React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { MyText } from '../utils/common/index';
import GStyles from '../assets/styles/GeneralStyles';
import colors from '../utils/colors';

const AlertModal = ({ close, visible, deleteItem, item, loading, textDeleteOrRestore, title }) => {

    const erase = (data) => {
        deleteItem(data)
    }
    const { 
        textSofiaProBold,
        textSofiaProMedium, 
        textCenter, 
        flexRow, 
        centerContentStyle, 
        textWhite, 
        textBlack 
    } = GStyles;
    const { 
        container, 
        wrapper,  
        cancelStyle, 
        confirmStyle, 
        confirmTextStyle,
        contentStyle,
        iconContainer,
        deleteText, 
    } = styles;

    return(
        <Modal 
            visible={visible} 
            statusBarTranslucent 
            transparent 
            onRequestClose={() => {}} 
            animationType='fade'>
            <View style={[wrapper, centerContentStyle]}>
                <View style={container}>
                {loading ? 
                    <View style={[contentStyle]}>
                        <LottieView
                            style={{
                                height: RFValue(45), 
                                width: RFValue(45),
                                alignSelf: 'center',
                            }}
                            source={require("../assets/lottie/home/loader.json")}
                            autoPlay
                            loop
                        />
                        <MyText 
                            style={[
                                textBlack, 
                                deleteText, 
                                textSofiaProMedium
                            ]}>
                                {textDeleteOrRestore}
                        </MyText>
                    </View> 
                    : 
                    <>
                    <View style={[contentStyle]}>
                        <MyText 
                            style={
                                [textSofiaProBold, textCenter, textBlack, confirmTextStyle]
                            }>
                                {title}{` ${item?.name}`}?
                        </MyText>
                        <View style={[iconContainer, centerContentStyle]}>
                            <Icon 
                                name='warning' 
                                size={RFValue(25)} 
                                style={{color: 'red'}} 
                            />
                        </View>
                    </View>
                    <View style={[flexRow]}>
                        <TouchableOpacity 
                            onPress={close}
                            style={[confirmStyle, centerContentStyle]}>
                            <MyText style={[textSofiaProMedium, textBlack]}>
                                No
                            </MyText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => erase(item)} 
                            style={[
                                cancelStyle, 
                                centerContentStyle
                            ]}>
                            <MyText style={[textSofiaProMedium, textWhite]}>
                                Yes
                            </MyText>
                        </TouchableOpacity>
                    </View>
                    </>}
                </View>
            </View>
        </Modal>
    );
}



const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
    },
    container: {
        width: '80%',
        height: RFValue(180),
        borderRadius: RFValue(10),
        backgroundColor: colors.smokeyWhite
    },
    contentStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelStyle: {
        height: RFValue(50),
        width: '100%',
        backgroundColor: 'rgba(230, 11, 11, 0.7)',
        borderBottomRightRadius: RFValue(10),
        flex: 1
    },
    cancelTextStyle: {
        color: colors.darkBlue
    },
    confirmStyle: {
        height: RFValue(50),
        width: '100%',
        flex: 1,
        backgroundColor: 'rgba(253, 195, 0, 0.4)',
        borderBottomLeftRadius: RFValue(10),
    },
    confirmTextStyle: {
        fontSize: RFValue(18),
        marginBottom: RFValue(10)
    },
    iconContainer: {
        height: RFValue(70),
        width: RFValue(70),
        borderRadius: RFValue(35),
        backgroundColor: 'rgba(255, 81, 0, 0.07)',
    },
    deleteText: {
        fontSize: RFValue(18)
    },
})

export default AlertModal;