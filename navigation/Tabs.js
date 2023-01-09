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
    <Tab.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      // 패딩이 바디뿐만 아니라 헤더에도 적용되기 때문에 없애는게 어떨까요?
      // sceneContainerStyle={{
      //   paddingLeft: 30,
      //   paddingRight: 30,
      // }}
    >
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Reading" component={Reading} />
      <Tab.Screen name="Finished" component={Finished} />
    </Tab.Navigator>
  );
}
