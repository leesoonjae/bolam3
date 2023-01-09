import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Add from "../screens/Add";
import DetailEdit from "../screens/Edit";
import Detail from "../screens/Edit";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";

const Stack = createNativeStackNavigator();

export default function Stacks({ navigation: { goBack } }) {
  const isDark = useColorScheme() === "dark";
  return (
    // 기동 : 헤더 제목, 가운데 정렬, 뒤로가기 버튼, 배경 추가
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#BBA58F" },
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      }}
    >
      {/* 기동 : Add 제목, 색상 변경 */}
      <Stack.Screen
        options={{ title: "Read me", headerTitleStyle: { color: "white" } }}
        name="Add"
        component={Add}
      />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="DetailEdit" component={DetailEdit} />
    </Stack.Navigator>
  );
}
