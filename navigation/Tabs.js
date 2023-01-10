import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";
import Reading from "../screens/Reading";
import Finished from "../screens/Finished";
import styled from "@emotion/native";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { DARK_COLOR, GRAY_COLOR, LIGHTGRAY_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const isDark = useColorScheme() === "dark";
  return (
    // <Tab.Navigator
    //   screenOptions={{ headerTitleAlign: "left" }}
    //   sceneContainerStyle={{
    //     paddingLeft: 30,
    //     paddingRight: 30,
    //   }}
    // >
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? DARK_COLOR : "white",
      }}
      screenOptions={{
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: isDark ? GRAY_COLOR : "#BBA58F",
        },
        headerTintColor: isDark ? LIGHTGRAY_COLOR : "white",
        tabBarShowIcon: true,
        tabBarStyle: {
          backgroundColor: isDark ? GRAY_COLOR : "#BBA58F",
        },
      }}
    >
      <Tab.Screen name="Read Me" component={Main} />
      <Tab.Screen name="Reading" component={Reading} />
      <Tab.Screen name="Finished" component={Finished} />
    </Tab.Navigator>
  );
}
