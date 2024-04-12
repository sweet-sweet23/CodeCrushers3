import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from './Dashboard';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const Drawer = createDrawerNavigator();

const DashboardDrawer = ({ navigation }) => {
    const handleLogout = () => {
        navigation.navigate('Login');
      };

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={props => CustomDrawerContent({ ...props, handleLogout })}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function CustomDrawerContent({ navigation, handleLogout }) {
  return (
    <DrawerContentScrollView {...navigation}>
      <DrawerItem label="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <DrawerItem label="About Us" onPress={() => navigation.navigate('AboutUs')} />
      <DrawerItem label="Contact Us" onPress={() => navigation.navigate('ContactUs')} />
      <DrawerItem label="Log Out" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
}

export default DashboardDrawer;
