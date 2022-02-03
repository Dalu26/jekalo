import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  flexRow: {
    display: 'flex', 
    flexDirection: 'row',
  },
  centerContentStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperCase: {
    textTransform: 'uppercase',
  },
  lowerCase: {
    textTransform: 'lowercase',
  },
  textWhite: {
      color: colors.white,
  },
  textBlack: {
    color: colors.black,
  },
  textDanger: {
    color: '#FF0000',
  },
  textItalic: {
    fontStyle: 'italic',
  },
  textWhite: {
    color: colors.white,
  },
  textUnderline: {
    textDecorationLine: 'underline'
  },
  textSofiaPro: {
    fontFamily: 'SofiaProRegular',
  },
  textSofiaProMedium: {
    fontFamily: 'SofiaProMedium',
  },
  textSofiaProSemiBold: {
    fontFamily: 'SofiaProSemiBold',
  },
  textSofiaProBold: {
    fontFamily: 'SofiaProBold',
  },
  textPlantin: {
      fontFamily: 'Plantin'
  },
  textPlantinBold: {
      fontFamily: 'plantin-bold'
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62, 
  },
});

export default styles;