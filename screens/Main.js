import React from "react";
import { Text, TouchableOpacity } from "react-native";

function Main({ navigation: { navigate } }) {
  const goAdd = () => {
    navigate("Stacks", { screen: "Add" });
  };

  const goDetail = () => {
    navigate("Stacks", { screen: "Detail" });
  };

  const goDetailEdit = () => {
    navigate("Stacks", { screen: "DetailEdit" });
  };

  return (
    <>
      <TouchableOpacity onPress={goAdd}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goDetail}>
        <Text>Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goDetailEdit}>
        <Text>Detail Edit test 1</Text>
      </TouchableOpacity>
    </>
  );
}

export default Main;
