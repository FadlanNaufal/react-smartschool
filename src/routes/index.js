import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Splashscreen, Login, Home, Study, Quiz, Library,NewsDetail, Announcement, SubjectDetail } from './../pages'
import BottomNav from '../components/BottomNav'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNav {...props} />}>
            <Tab.Screen component={Home} name="Home"/>
            <Tab.Screen component={Study} name="Study"/>
            <Tab.Screen component={Quiz} name="Quiz"/>
            <Tab.Screen component={Library} name="Library"/>
        </Tab.Navigator>
    )
}

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Splashscreen} name="Splashscreen" options={{
                headerShown : false
            }} /> 
            <Stack.Screen component={Login} name="Login" options={{
                headerShown : false
            }} /> 
            <Stack.Screen name="MainApp" component={MainApp} options={{
                headerShown : false
            }}/>
            <Stack.Screen name="NewsDetail" component={NewsDetail} options={{
                headerShown : false
            }}/>
             <Stack.Screen name="Announcement" component={Announcement} options={{
                headerShown : false
            }}/>
             <Stack.Screen name="SubjectDetail" component={SubjectDetail} options={{
                headerShown : false
            }}/>
        </Stack.Navigator>
    )
}

export default Routes
