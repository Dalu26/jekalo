import React from 'react';
import LottieView from 'lottie-react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const ListEmpty = () => {
    return(
        <LottieView
            style={{
                height: RFValue(200), 
                width: RFValue(200),
                alignSelf: 'center',
            }}
            source={require("../assets/lottie/home/empty.json")}
            autoPlay
            loop
        />
    )
}

export default ListEmpty;