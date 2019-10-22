import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {ActivityIndicator, StatusBar, StyleSheet, AsyncStorage,View} from 'react-native'
import Signup from '../screens/signup'
import Club from '../screens/club'
import React , {Component} from 'react'






const AppNavigator = createStackNavigator({
   
    Signup: {screen: Signup},
    Club: {screen: Club},
  


},{
    navigationOptions: {
        headerVisible: false,
    },
    headerMode: 'none',
    
},
{
    initialRouteName: Signup,
   }

);  




export default createAppContainer(AppNavigator);