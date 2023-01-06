import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Stacks from "./Stacks";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Stacks" component={Stacks} />
    </Stack.Navigator>
  );
}
