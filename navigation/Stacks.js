import React from "react";
// import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Add from "../screens/Add";
import Detail from "../screens/Detail";
import DetailEdit from "../screens/DetailEdit";

const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="DetailEdit" component={DetailEdit} />
    </Stack.Navigator>
  );
}
