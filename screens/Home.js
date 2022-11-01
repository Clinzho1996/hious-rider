/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from "./MainPage";
import Payment from "./Payment";
import Settings from "./Settings";
import Icon from "react-native-vector-icons/Ionicons";
import Order from "./Order";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        style: {
          height: 60,
          justifyContent: "space-around",
          border: 0,
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainPage}
        options={{
          tabBarIcon: ({ focused, tintColor }) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="home"
                  size={focused ? 30 : 30}
                  color={focused ? "#212E5A" : "#D5D5E1"}
                />
                <Text
                  style={{
                    color: focused ? "#ff3369" : "#777777",
                    fontSize: focused ? 14 : 10,
                  }}
                ></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="car-sport"
                  size={focused ? 30 : 30}
                  color={focused ? "#212E5A" : "#D5D5E1"}
                />
                <Text
                  style={{
                    color: focused ? "#ff3369" : "#777777",
                    fontSize: 14,
                  }}
                ></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="wallet"
                  size={focused ? 30 : 30}
                  color={focused ? "#212E5A" : "#D5D5E1"}
                />
                <Text
                  style={{
                    color: focused ? "#ff3369" : "#777777",
                    fontSize: 14,
                  }}
                ></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="settings"
                  size={focused ? 30 : 30}
                  color={focused ? "#212E5A" : "#D5D5E1"}
                />
                <Text
                  style={{
                    color: focused ? "#ff3369" : "#777777",
                    fontSize: 14,
                  }}
                ></Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    color: "#000",
  },
  nav: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    border: 0,
  },
});
