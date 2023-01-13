import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styled from "@emotion/native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useQuery, useQueryClient } from "react-query";
import { getBooks } from "../api";

function TodayBooks() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const goAdd = () => {
    navigation.navigate("Stacks", { screen: "Add" });
  };

  const goRecommend = () => {
    navigation.navigate("Stacks", { screen: "Recommend" });
  };

  const { data: bookData, isLoading: bookLoading } = useQuery(
    "BookCome",
    getBooks
  );

  if (bookLoading) {
    return (
      <Loader>
        <Text>로딩중</Text>
      </Loader>
    );
  }

  return (
    <View>
      <MainToDayTitle>오늘의 추천 도서</MainToDayTitle>
      <ToDay onPress={goRecommend}>
        <ToDayImg
          source={{
            uri: bookData.data.item[0].cover,
          }}
        />
        <TodayText>
          <ToDayTitle numberOfLines={1} ellipsizeMode="tail">
            {bookData.data.item[0].title}
          </ToDayTitle>
          <ToDayOuter numberOfLines={1} ellipsizeMode="tail">
            {bookData.data.item[0].author}
          </ToDayOuter>
          <ToDayContents numberOfLines={8} ellipsizeMode="tail">
            {bookData.data.item[0].description}
          </ToDayContents>
        </TodayText>
      </ToDay>
      <AddBook>책 추가하기</AddBook>
      <AddBookBack onPress={goAdd}>
        <AddBookBtn onPress={goAdd}>
          <AntDesign name="pluscircleo" size={50} color="black" />
        </AddBookBtn>
      </AddBookBack>
    </View>
  );
}

export default TodayBooks;

const MainToDayTitle = styled.Text`
  margin-top: 18px;
  font-size: 18px;
  color: ${(props) => props.theme.text};
  font-weight: 600;
`;

const ToDay = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 10px;
  background-color: #e2d9ce;
  padding: 20px;
  padding-left: 10px;
  border-radius: 10px;
`;

const TodayText = styled.View`
  padding-left: 18px;
`;

const ToDayTitle = styled.Text`
  width: 140px;
  font-size: 20px;
  font-weight: 500px;
  margin-bottom: 5px;
`;

const ToDayOuter = styled.Text`
  width: 140px;
  font-size: 11px;
  font-weight: 400px;
  text-align: right;
  margin-bottom: 5px;
`;

const ToDayContents = styled.Text`
  width: 140px;
  font-size: 13px;
`;

const ToDayImg = styled.Image`
  width: 150px;
  height: 210px;
  border-radius: 15px;
`;

const AddBook = styled.Text`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const AddBookBack = styled.TouchableOpacity`
  background-color: #e2d9ce;
  height: 160px;
  border-radius: 25px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 11px;
`;

const AddBookBtn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

const Loader = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
