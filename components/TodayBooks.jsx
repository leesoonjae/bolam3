import React from "react";
import { View } from "react-native";
import styled from "@emotion/native";
import { AntDesign } from "@expo/vector-icons";

export default function TodayBooks({ navigation: { navigate } }) {
  const goAdd = () => {
    navigate("Stacks", { screen: "Add" });
  };

  // const goDetail = () => {
  //   navigate("Stacks", { screen: "Detail" });
  // };

  // const goDetailEdit = () => {
  //   navigate("Stacks", { screen: "DetailEdit" });
  // };

  return (
    <View>
      <MainToDayTitle>오늘의 추천 도서</MainToDayTitle>
      <ToDay>
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
  );
}

const MainToDayTitle = styled.Text`
  margin-top: 10px;
  font-size: 25px;
  color: #513d34;
`;

const ToDay = styled.View`
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
  color: #513d34;
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
