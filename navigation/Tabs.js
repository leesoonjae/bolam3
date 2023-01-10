import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";
import Reading from "../screens/Reading";
import Finished from "../screens/Finished";
import styled from "@emotion/native";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";

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
        backgroundColor: "white",
      }}
      screenOptions={{
        headerTitleAlign: "left",

        tabBarShowIcon: true,
        tabBarStyle: {
          backgroundColor: "#BBA58F",
        },
      }}
    >
      <Tab.Screen name="Read Me" component={Main} />
      <Tab.Screen name="Reading" component={Reading} />
      <Tab.Screen name="Finished" component={Finished} />
    </Tab.Navigator>
  );
}
