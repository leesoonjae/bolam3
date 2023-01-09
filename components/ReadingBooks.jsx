import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "@emotion/native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function ReadingBooks() {
  const navigation = useNavigation();
  const goDetail = () => {
    navigation.navigate("Stacks", { screen: "Detail" });
  };
  const goReading = () => {
    navigation.navigate("Tabs", { screen: "Reading" });
  };

  return (
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
  );
}

export default ReadingBooks;

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
  color: ${(props) => props.theme.text};
  font-weight: 600;
`;
const More = styled.Pressable`
  justify-content: center;
`;
const MoreText = styled.Text`
  font-size: 15px;
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
