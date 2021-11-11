import 'react-native-gesture-handler';
import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import LetsPlay from './LetsPlay';
import RateMe from './RateMe';
import Test from './Test';
import YouTube from './YouTube';
import Modal from './Modal';
import FlatListLocalJSON from './FlatListLocalJSON';
import FlatListAPIJSON from './FlatListAPIJSON';
import FlatListAPIJSONimages from './FlatListAPIJSONimages';
import CoutryCodePicker from './CoutryCodePicker';
import VideoPlayers from './VideoPlayers';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{ width: 35, height: 35, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      tabBarOptions={{
        activeTintColor: '#003f5c',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="BottomTabStack"
        component={BottomTabStack}
        options={{
          title: 'Home Screen', //Set Header Title
          headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="LetsPlay"
        component={LetsPlay}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        name="RateMe"
        component={RateMe}
      />
      <Stack.Screen
        name="Test"
        component={Test}
      />
      <Stack.Screen
        name="YouTube"
        component={YouTube}
      />
      <Stack.Screen
        name="Modal"
        component={Modal}
      />
      <Stack.Screen
        name="FlatListLocalJSON"
        component={FlatListLocalJSON}
      />
      <Stack.Screen
        name="FlatListAPIJSON"
        component={FlatListAPIJSON}
      />
      <Stack.Screen
        name="FlatListAPIJSONimages"
        component={FlatListAPIJSONimages}
      />
      <Stack.Screen
        name="CoutryCodePicker"
        component={CoutryCodePicker}
      />
      <Stack.Screen
        name="VideoPlayers"
        component={VideoPlayers}
      />
    </Stack.Navigator>
  );
};

const BottomTabStack = (navigation) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#003f5c',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home Screen',
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore Screen',
        }}
      />
    </Tab.Navigator>
  );
};


const App = (navigation) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen
          name="HomeScreenStack"
          options={{ drawerLabel: 'Home Screen' }}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="ProfileScreen"
          options={{ drawerLabel: 'Profile Screen' }}
          component={ProfileScreen}
        />
      </Drawer.Navigator>

    </NavigationContainer>

  )
}
export default App;
