import React from "react";
import {  } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackGroup from "./stack";
import About2 from "../pages/About2";
import Contato2 from "../pages/Contato2";

import Feather from "react-native-vector-icons/Feather";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    /* <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen
          name="Home2"
          component={Home2}
          options={{
            title: "Tela inicial",
            headerStyle: { backgroundColor: "red" },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="About2" component={About2} />
        <Stack.Screen name="Contato2" component={Contato2}/>
      </Stack.Navigator>
    </NavigationContainer>
    */
   
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFF",

          tabBarStyle:{
            backgroundColor: "#202225",
            borderTopWidth: 0
          }
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={StackGroup}
          options={{
            tabBarLabel: "Início",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="About2"
          component={About2}
          options={{
            tabBarLabel: "About",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="file-text" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Contato2"
          component={Contato2}
          options={{
            tabBarLabel: "Contact",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="phone-call" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
  );
}
