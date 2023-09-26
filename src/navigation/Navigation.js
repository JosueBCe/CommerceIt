import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import SingleProductScreen from '../screens/SingleProductScreen';



const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function Stack() {
    return (
        <HomeStack.Navigator>

            <HomeStack.Screen
                initialRouteName="HomeScreen"
                name='HomeScreen'
                component={HomeScreen}
            />

            <HomeStack.Screen
                name='ProductScreen'
                component={ProductScreen}
            />

            <HomeStack.Screen
                name='CartScreen'
                component={CartScreen}

            />

            <HomeStack.Screen
                name='SingleProductScreen'
                component={SingleProductScreen}
            />

        </HomeStack.Navigator>

    )
}



function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: "blue",

            }}>

            <Tab.Screen
                name='Home'
                component={Stack}
                options={{
                    tabBarLabel: "Feed",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-home-outline" size={size} color={color} />
                    ),
                    headerShown: false

                }}>
            </Tab.Screen>

            <Tab.Screen
                name='Product'
                component={ProductScreen} options={{
                    tabBarLabel: "Products",
                    tabBarIcon: ({ color, size }) => (

                        <Entypo name="shopping-bag" size={size} color={color} />
                    )

                }}>

            </Tab.Screen>

            <Tab.Screen
                name='Cart'
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="shopping-cart" size={size} color={color} />
                    )

                }}
            >
            </Tab.Screen>

        </Tab.Navigator>
    );
}


export default function Navigation() {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}