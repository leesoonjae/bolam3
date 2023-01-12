import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "@emotion/native";
import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";
import { getDataFromServer } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { __getReadMe } from "../redux/modules/readMe";

function ReadingBooks() {
  // const dispatch = useDispatch();
  // const golbalData = useSelector((state) => state);
  // console.log(golbalData.readMe.data);

  const navigation = useNavigation();
  // const goDetail = () => {
  //   navigation.navigate("Stacks", { screen: "Detail" });
  // };
  const goReading = () => {
    navigation.navigate("Tabs", { screen: "Reading" });
  };

  const [readingBookData, setReadingBookData] = useState([]);

  // const getData = () => {
  //   dispatch(__getReadMe());
  //   setReadingBookData(golbalData.readMe.data);
  // };
  
  const getData = async () => {
    try {
      const res = await axios.get("https://lying-magical-math.glitch.me/data");
      setReadingBookData(res.data);
    } catch (error) {
      console.log("Error!", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  return (
    <ReadingBook>
      <ReadingBookText>
        <ReadingBookTextTitle>읽고 있는 책</ReadingBookTextTitle>
        <More>
          <MoreText onPress={goReading}>더보기</MoreText>
        </More>
      </ReadingBookText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {readingBookData.map((obj) =>
          obj.isDone === false ? (
            <Poster key={obj.id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Stacks", {
                    screen: "Detail",
                    params: obj,
                  })
                }
              >
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
                      uri: obj.imgUri,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <PosterTitle>{obj.title}</PosterTitle>
            </Poster>
          ) : null
        )}
      </ScrollView>
    </ReadingBook>
  );
}

export default ReadingBooks;

const ReadingBook = styled.View`
  margin: 10px 0px;
  flex: 1;
  width: 100%;
  height: 270px;
  margin-bottom: 12px;
`;

const ReadingBookText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 5px;
`;
const ReadingBookTextTitle = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.text};
  font-weight: 600;
`;
const More = styled.Pressable`
  justify-content: center;
`;
const MoreText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.text};
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
  color: ${(props) => props.theme.text};
`;
const ReadingBookPoster = styled.Image`
  width: 142px;
  height: 205px;
  background-color: gray;
  border-radius: 17px;
`;
