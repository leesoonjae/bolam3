import styled from "@emotion/native";
import React, { useEffect, useState } from "react";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import TodayBooks from "../components/TodayBooks";
import AddBooks from "../components/AddBooks";
import ReadBooks from "../components/ReadBooks";
import ReadingBooks from "../components/ReadBooks";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import XMLParser from "react-xml-parser";
import { ScrollView } from "react-native-gesture-handler";

// const BOOK_KEY = process.env.REACT_APP_OPENBOOK_KEY;

function Main({ navigation: { navigate } }) {
  const goAdd = () => {
    navigate("Stacks", { screen: "Add" });
  };
  const goReading = () => {
    navigate("Tabs", { screen: "Reading" });
  };
  const goFinished = () => {
    navigate("Tabs", { screen: "Finished" });
  };

  const goDetail = () => {
    navigate("Stacks", { screen: "Detail" });
  };

  const [bookApiImg, setbookApiImg] = useState("");
  const [bookApiTitle, setBookApiTitle] = useState("");
  const [bookApiAuthor, setBookApiAuthor] = useState("");
  const [bookApiContent, setBookApContent] = useState("");

  // function parseBook(dataSet) {
  //   const bookData = new XMLParser().parseFromString(dataSet).children;
  //   console.log("bookData", bookData);
  //   return bookData;
  // }

  const getBooks = async () => {
    try {
      const bookApi = await axios.get(
        `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbsoojae10291105001&QueryType=BlogBest&MaxResults=1&start=1&SearchTarget=Book&output=JS&Version=20131101`
      );
      const aaa = JSON.parse(bookApi.request._response);
      setbookApiImg(aaa.item[0].cover);
      setBookApiTitle(aaa.item[0].title);
      setBookApiAuthor(aaa.item[0].author);
      setBookApContent(aaa.item[0].description);
    } catch (error) {
      console.log("Error가 발생했습니다.", error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  // const goDetailEdit = () => {
  //   navigate("Stacks", { screen: "DetailEdit" });
  // };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <MainToDayTitle>오늘의 추천 도서</MainToDayTitle>
          <ToDay>
            <ToDayImg
              source={{
                uri: bookApiImg,
              }}
            />
            <TodayText>
              <ToDayTitle numberOfLines={1} ellipsizeMode="tail">
                {bookApiTitle}
              </ToDayTitle>
              <ToDayOuter numberOfLines={1} ellipsizeMode="tail">
                {bookApiAuthor}
              </ToDayOuter>
              <ToDayContents numberOfLines={8} ellipsizeMode="tail">
                {bookApiContent}
              </ToDayContents>
            </TodayText>
          </ToDay>
          <AddBook>책 추가하기</AddBook>
          <AddBookBack>
            <AddBookBtn onPress={goAdd}>
              <AntDesign name="pluscircleo" size={50} color="black" />
            </AddBookBtn>
          </AddBookBack>
        </View>
        <ReadingBook>
          <ReadingBookText>
            <ReadingBookTextTitle>읽고 있는 책</ReadingBookTextTitle>
            <More>
              <MoreText onPress={goReading}>더보기</MoreText>
            </More>
          </ReadingBookText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Poster>
              <TouchableOpacity onPress={goDetail}>
                <View
                  style={{
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.5,
                    height: "auto",
                  }}
                >
                  <ReadingBookPoster
                    source={{
                      uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
                    }}
                  />
                </View>
              </TouchableOpacity>
              <PosterTitle>분열된 자기</PosterTitle>
            </Poster>
            <Poster>
              <TouchableOpacity onPress={goDetail}>
                <View
                  style={{
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.5,
                    height: "auto",
                  }}
                >
                  <ReadingBookPoster
                    source={{
                      uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
                    }}
                  />
                </View>
              </TouchableOpacity>
              <PosterTitle>분열된 자기</PosterTitle>
            </Poster>
            <Poster>
              <TouchableOpacity onPress={goDetail}>
                <View
                  style={{
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.5,
                    height: "auto",
                  }}
                >
                  <ReadingBookPoster
                    source={{
                      uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
                    }}
                  />
                </View>
              </TouchableOpacity>
              <PosterTitle>분열된 자기</PosterTitle>
            </Poster>
            <Poster>
              <TouchableOpacity onPress={goDetail}>
                <View
                  style={{
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.5,
                    height: "auto",
                  }}
                >
                  <ReadingBookPoster
                    source={{
                      uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
                    }}
                  />
                </View>
              </TouchableOpacity>
              <PosterTitle>분열된 자기</PosterTitle>
            </Poster>
            <Poster>
              <TouchableOpacity onPress={goDetail}>
                <View
                  style={{
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.5,
                    height: "auto",
                  }}
                >
                  <ReadingBookPoster
                    source={{
                      uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
                    }}
                  />
                </View>
              </TouchableOpacity>
              <PosterTitle>분열된 자기</PosterTitle>
            </Poster>
          </ScrollView>
        </ReadingBook>
        <ReadBook>
          <ReadingBookText>
            <ReadingBookTextTitle>완독한 책</ReadingBookTextTitle>
            <More>
              <MoreText onPress={goFinished}>더보기</MoreText>
            </More>
          </ReadingBookText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Poster>
              <TouchableOpacity onPress={goDetail}>
                <View
                  style={{
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.5,
                    height: "auto",
                  }}
                >
                  <ReadingBookPoster
                    source={{
                      uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
                    }}
                  />
                </View>
              </TouchableOpacity>
              <PosterTitle>분열된 자기</PosterTitle>
            </Poster>
            <Poster>
              <TouchableOpacity onPress={goDetail}>
                <View
                  style={{
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.5,
                    height: "auto",
                  }}
                >
                  <ReadingBookPoster
                    source={{
                      uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
                    }}
                  />
                </View>
              </TouchableOpacity>
              <PosterTitle>분열된 자기</PosterTitle>
            </Poster>
            <Poster>
              <TouchableOpacity onPress={goDetail}>
                <View
                  style={{
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.5,
                    height: "auto",
                  }}
                >
                  <ReadingBookPoster
                    source={{
                      uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
                    }}
                  />
                </View>
              </TouchableOpacity>
              <PosterTitle>분열된 자기</PosterTitle>
            </Poster>
            <Poster>
              <TouchableOpacity onPress={goDetail}>
                <View
                  style={{
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.5,
                    height: "auto",
                  }}
                >
                  <ReadingBookPoster
                    source={{
                      uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
                    }}
                  />
                </View>
              </TouchableOpacity>
              <PosterTitle>분열된 자기</PosterTitle>
            </Poster>
            <Poster>
              <TouchableOpacity onPress={goDetail}>
                <View
                  style={{
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.5,
                    height: "auto",
                  }}
                >
                  <ReadingBookPoster
                    source={{
                      uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
                    }}
                  />
                </View>
              </TouchableOpacity>
              <PosterTitle>분열된 자기</PosterTitle>
            </Poster>
            <Poster>
              <TouchableOpacity onPress={goDetail}>
                <View
                  style={{
                    shadowColor: "black",
                    shadowOffset: { width: 3, height: 3 },
                    shadowOpacity: 0.5,
                    height: "auto",
                  }}
                >
                  <ReadingBookPoster
                    source={{
                      uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
                    }}
                  />
                </View>
              </TouchableOpacity>
              <PosterTitle>분열된 자기</PosterTitle>
            </Poster>
          </ScrollView>
        </ReadBook>
      </ScrollView>
      <ReadingBooks />
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
  font-size: 10px;
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
