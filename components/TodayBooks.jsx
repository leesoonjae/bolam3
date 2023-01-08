import React from "react";
import { View, Text } from "react-native";
import styled from "@emotion/native";

function TodayBooks() {
  return;
  <View>
    <Text>Today</Text>
    <TodayBook>오늘의 추천 책입니다.</TodayBook>
  </View>;
}

export default TodayBooks;

const TodayBook = styled.Text`
  background-color: tomato;
  flex: 1;
  width: 100px;
  height: 100px;
`;
