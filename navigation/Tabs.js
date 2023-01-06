import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";
import Reading from "../screens/Reading";
import Finished from "../screens/Finished";
import styled from "@emotion/native";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      sceneContainerStyle={{
        paddingLeft: 30,
        paddingRight: 30,
      }}
    >
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Reading" component={Reading} />
      <Tab.Screen name="Finished" component={Finished} />
    </Tab.Navigator>
  );
}
