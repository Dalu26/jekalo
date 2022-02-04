import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { EpisodeStack, CharacterStack } from './StackNavigation';

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

const Drawer = createDrawerNavigator()

function MyDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Character" component={CharacterStack} />
        <Drawer.Screen name="Episode" component={EpisodeStack} />
      </Drawer.Navigator>
    );
  }

  export default MyDrawer