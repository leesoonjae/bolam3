import styled from "@emotion/native";
import React from "react";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import TodayBooks from "../components/TodayBooks";
import AddBooks from "../components/AddBooks";
import FinishedBooks from "../components/FinishedBooks";
import ReadingBooks from "../components/ReadingBooks";

import { ScrollView } from "react-native-gesture-handler";

function Main({ navigation: { navigate } }) {
  // const goAdd = () => {
  //   navigate("Stacks", { screen: "Add" });
  // };
  // const goReading = () => {
  //   navigate("Tabs", { screen: "Reading" });
  // };

  // const goFinished = () => {
  //   navigate("Tabs", { screen: "Finished" });
  // };

  // const goDetail = () => {
  //   navigate("Stacks", { screen: "Detail" });
  // };

  // const goDetailEdit = () => {
  //   navigate("Stacks", { screen: "DetailEdit" });
  // };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TodayBook>오늘의 추천도서</TodayBook>
        <Addbooks>책 추가하기</Addbooks>
        <ReadingBooks />
        <FinishedBooks />
      </ScrollView>
    </>
  );
}

export default Main;

const TodayBook = styled.Text`
  border: 1px solid gray;
  margin: 10px 0px;
  flex: 1;
  width: 100%;
  height: 280px;
`;
const Addbooks = styled.Text`
  border: 1px solid gray;
  margin: 10px 0px;
  flex: 1;
  width: 100%;
  height: 250px;
`;
// const ReadingBook = styled.View`
//   margin: 10px 0px;
//   flex: 1;
//   width: 100%;
//   height: 270px;
// `;
// const ReadingBookText = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   padding-bottom: 5px;
// `;
// const ReadingBookTextTitle = styled.Text`
//   font-size: 20px;
//   color: #513d34;
//   font-weight: 600;
// `;
// const More = styled.Pressable`
//   justify-content: center;
// `;
// const MoreText = styled.Text`
//   font-size: 15px;
//   color: #513d34;
//   justify-content: center;
//   font-weight: 400;
// `;
// const Poster = styled.View`
//   flex-direction: column;
//   align-items: center;
//   padding-top: 10px;
//   padding-right: 10px;
// `;
// const PosterTitle = styled.Text`
//   padding: 10px;
//   color: #513d3466;
// `;
// const ReadingBookPoster = styled.Image`
//   width: 142px;
//   height: 205px;
//   background-color: gray;
//   border-radius: 17px;
// `;
// const ReadBook = styled.View`
//   margin: 10px 0px;
//   flex: 1;
//   width: 100%;
//   height: 270px;
// `;
