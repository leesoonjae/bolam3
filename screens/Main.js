import styled from "@emotion/native";
import React from "react";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FinishedBooks from "../components/FinishedBooks";
import ReadingBooks from "../components/ReadingBooks";
import { ScrollView } from "react-native-gesture-handler";
import TodayBooks from "../components/TodayBooks";

// const BOOK_KEY = process.env.REACT_APP_OPENBOOK_KEY;

function Main({ navigation: { navigate } }) {
  return (
    <MainPage>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TodayBooks />
        <ReadingBooks />
        <FinishedBooks />
      </ScrollView>
      <ReadingBooks />
    </MainPage>
  );
}

export default Main;

const MainPage = styled.View`
  padding-left: 30px;
  padding-right: 30px;
`;
