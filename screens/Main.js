import styled from "@emotion/native";
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
        <StText>Add</StText>
      </TouchableOpacity>
      <TouchableOpacity onPress={goDetail}>
        <StText>Detail</StText>
      </TouchableOpacity>
      <TouchableOpacity onPress={goDetailEdit}>
        <StText>Detail Edit</StText>
      </TouchableOpacity>
    </>
  );
}

export default Main;

const StText = styled.Text`
  color: ${(props) => props.theme.text};
`;
