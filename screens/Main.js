import styled from "@emotion/native";
import React from "react";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FinishedBooks from "../components/FinishedBooks";
import ReadingBooks from "../components/ReadingBooks";

import { ScrollView } from "react-native-gesture-handler";

function Main({ navigation: { navigate } }) {
  const goAdd = () => {
    navigate("Stacks", { screen: "Add" });
  };

  const goRecommend = () => {
    navigate("Stacks", { screen: "Recommend" });
  };

  return (
    <MainPage>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <MainToDayTitle>오늘의 추천 도서</MainToDayTitle>
          <ToDay onPress={goRecommend}>
            <ToDayImg
              source={{
                uri: "https://post-phinf.pstatic.net/MjAxOTEwMjVfMjU2/MDAxNTcxOTc3OTgyOTg2.OwjmtOOHMVENcc0WxKoXrG84ctM3YVTmqu4xQIZpRNEg.XGviDR7sFURuxXAsWknZm6XHnTGIyI13-5V9rQq0d9Qg.PNG/20191025_111210.png?type=w1200",
              }}
            />
            <TodayText>
              <ToDayTitle>제목</ToDayTitle>
              <ToDayOuter>저자</ToDayOuter>
              <ToDayContents>내용</ToDayContents>
            </TodayText>
          </ToDay>
          <AddBook>책 추가하기</AddBook>
          <AddBookBack>
            <AddBookBtn onPress={goAdd}>
              <AntDesign name="pluscircleo" size={50} color="black" />
            </AddBookBtn>
          </AddBookBack>
        </View>
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
const ReadingBook = styled.View`
  margin: 10px 0px;
  flex: 1;
  width: 100%;
  height: 270px;
`;
const ReadingBookText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 5px;
`;
const ReadingBookTextTitle = styled.Text`
  font-size: 20px;
  color: #513d34;
  font-weight: 600;
`;
const More = styled.Pressable`
  justify-content: center;
`;
const MoreText = styled.Text`
  font-size: 15px;
  color: #513d34;
  justify-content: center;
  font-weight: 400;
`;
const Poster = styled.View`
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-right: 10px;
`;
const PosterTitle = styled.Text`
  padding: 10px;
  color: #513d3466;
`;
const ReadingBookPoster = styled.Image`
  width: 142px;
  height: 205px;
  background-color: gray;
  border-radius: 17px;
`;
const ReadBook = styled.View`
  margin: 10px 0px;
  flex: 1;
  width: 100%;
  height: 270px;
`;
const MainToDayTitle = styled.Text`
  margin-top: 10px;
  font-size: 25px;
  color: ${(props) => props.theme.text};
`;

const ToDay = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 15px;
  background-color: #e2d9ce;
  padding: 20px;
  border-radius: 10px;
`;

const TodayText = styled.View`
  padding-left: 20px;
`;

const ToDayTitle = styled.Text`
  width: 140px;
  font-size: 20px;
  font-weight: 500;
`;

const ToDayOuter = styled.Text`
  width: 150px;
  font-size: 15px;
  font-weight: 400;
  text-align: right;
`;

const ToDayContents = styled.Text`
  width: 140px;
`;

const ToDayImg = styled.Image`
  width: 150px;
  height: 200px;
`;

const AddBook = styled.Text`
  margin-top: 10px;
  font-size: 25px;
  color: ${(props) => props.theme.text};
`;

const AddBookBack = styled.View`
  background-color: #e2d9ce;
  height: 160px;
  border-radius: 25px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddBookBtn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;
