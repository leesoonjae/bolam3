import React, { useEffect, useState } from "react";
import { View } from "react-native";
import styled from "@emotion/native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { object } from "prop-types";

const BOOK_KEY = process.env.REACT_APP_OPENBOOK_KEY;

export default function TodayBooks({ navigation: { navigate } }) {
  const goAdd = () => {
    navigate("Stacks", { screen: "Add" });
  };

  const { books, setBooks } = useState("");

  // const getBooks = async () => {
  //   await axios
  //     .get(
  //       `https://nl.go.kr/NL/search/openApi/saseoApi.do?key=${BOOK_KEY}&startRowNumApi=1&endRowNumApi=10&start_date=20200101&end_date=20200131&drcode=11`
  //     )
  //     .then((response) => {
  //       console.log("Hello", response);
  //       setBooks(response.data.recomfilepath[1]);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch(
        `https://nl.go.kr/NL/search/openApi/saseoApi.do?key=${BOOK_KEY}&startRowNumApi=1`
      );
      console.log("hello", object);
      return response;
    };
    getBooks();
  }, []);

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
            uri: books,
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
  width: 150;
  height: 200;
`;

const AddBook = styled.Text`
  margin-top: 10px;
  font-size: 25px;
  color: #513d34;
`;

const AddBookBack = styled.View`
  background-color: #e2d9ce;
  height: 160;
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
  width: 50;
  height: 50;
`;
