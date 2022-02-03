import React from 'react';
import { Text } from 'react-native';
import styles from '../../assets/styles/GeneralStyles';

export const MyText = ({ children, style, selectable, numberOfLines, onPress }) => {
    return <Text numberOfLines={numberOfLines} onPress={onPress} selectable={selectable} style={[styles.textPlantin, style]}>
          {children}
      </Text>;
}

export default MyText;