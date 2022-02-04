import React from 'react';
import { View, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus
} from '@react-navigation/drawer';
import { RFValue } from 'react-native-responsive-fontsize';
import { EpisodeStack, CharacterStack } from './StackNavigation';
import { MyText } from '../utils/common/index'
import GStyles from '../assets/styles/GeneralStyles'
import colors from '../utils/colors'
import Logo from '../assets/icons/logo/logo.svg';

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: RFValue(90),
    width: RFValue(90),
    borderRadius: RFValue(45)
  },
  title: {
    fontSize: RFValue(18),
    color: colors.white,
    marginTop: RFValue(10),
  },
})

const { centerContentStyle, textSofiaProBold } = GStyles
const { iconContainer, title } = styles

function CustomDrawerContent(props) {
  const status = useDrawerStatus()
    return (
      <View style={{flex: 1}}>
        <StatusBar 
              translucent={true} 
              barStyle={
                status === 'open' ? 
                'light-content' : 'dark-content'
              } 
              backgroundColor="rgba(0,0,0,0)" 
          />
        <DrawerContentScrollView 
          contentContainerStyle={{
            backgroundColor: colors.smokeyWhite
          }}
          {...props}
          >
            <ImageBackground 
              source={require('../assets/image/home.jpg')}
              style={{
                paddingTop: RFValue(40),
                paddingLeft: RFValue(20),
                paddingBottom: RFValue(20), 
                marginTop: RFValue(-40)
              }}
            >
              <View style={[
                iconContainer, 
                centerContentStyle
                ]}>
                <Logo height={RFValue(50)} width={RFValue(50)} />
              </View>
              <MyText style={[
                textSofiaProBold, title
                ]}>
                Jekalo Digital
              </MyText>
            </ImageBackground>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    );
  }

const Drawer = createDrawerNavigator()

function MyDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: 'rgba(76, 178, 16, 0.7)',
          drawerActiveTintColor: colors.white,
          drawerInactiveTintColor: colors.black,
          drawerLabelStyle:{
            fontFamily: 'SofiaProBold',
            fontSize: RFValue(15),
            marginLeft: RFValue(-20)
          }
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="Character" 
          component={CharacterStack}
          options={{
            drawerIcon: ({color}) => (
              <FontAwesome name='grin' size={RFValue(20)} color={color} />
            )
          }} 
          />
        <Drawer.Screen 
          name="Episode" 
          component={EpisodeStack}
          options={{
            drawerIcon: ({color}) => (
              <FontAwesome name='database' size={RFValue(20)} color={color} />
            )
          }} 
        />
      </Drawer.Navigator>
    );
  }

  export default MyDrawer