import React from "react";
import { View, Text } from "react-native";
import styled from "@emotion/native";
import { ScrollView } from "react-native-gesture-handler";

const ReadingBooks = () => {
  return (
    <View>
      <Text>dasdwd</Text>
    </View>
  );
  // <ReadingBook>
  //   <ReadingBookText>
  //     <ReadingBookTextTitle>읽고 있는 책</ReadingBookTextTitle>
  //     <More>
  //       <MoreText onPress={goReading}>더보기</MoreText>
  //     </More>
  //   </ReadingBookText>
  //   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  //     <Poster>
  //       <View
  //         style={{
  //           shadowColor: "black",
  //           shadowOffset: { width: 3, height: 3 },
  //           shadowOpacity: 0.5,
  //           height: "auto",
  //         }}
  //       >
  //         <ReadingBookPoster
  //           source={{
  //             uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
  //           }}
  //         />
  //       </View>
  //       <PosterTitle>분열된 자기</PosterTitle>
  //     </Poster>
  //     <Poster>
  //       <View
  //         style={{
  //           shadowColor: "black",
  //           shadowOffset: { width: 3, height: 3 },
  //           shadowOpacity: 0.5,
  //           height: "auto",
  //         }}
  //       >
  //         <ReadingBookPoster
  //           source={{
  //             uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
  //           }}
  //         />
  //       </View>
  //       <PosterTitle>분열된 자기</PosterTitle>
  //     </Poster>
  //     <Poster>
  //       <View
  //         style={{
  //           shadowColor: "black",
  //           shadowOffset: { width: 3, height: 3 },
  //           shadowOpacity: 0.5,
  //           height: "auto",
  //         }}
  //       >
  //         <ReadingBookPoster
  //           source={{
  //             uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
  //           }}
  //         />
  //       </View>
  //       <PosterTitle>분열된 자기</PosterTitle>
  //     </Poster>
  //     <Poster>
  //       <View
  //         style={{
  //           shadowColor: "black",
  //           shadowOffset: { width: 3, height: 3 },
  //           shadowOpacity: 0.5,
  //           height: "auto",
  //         }}
  //       >
  //         <ReadingBookPoster
  //           source={{
  //             uri: "https://i.pinimg.com/474x/e0/41/44/e0414464c389ab135284d45789d735e4.jpg",
  //           }}
  //         />
  //       </View>
  //       <PosterTitle>분열된 자기</PosterTitle>
  //     </Poster>
  //   </ScrollView>
  // </ReadingBook>;
};

export default ReadingBooks;

// const ReadingBook = styled.View`
//   margin: 10px 0px;
//   flex: 1;
//   width: 100%;
//   height: 270px;
// `;
// const ReadingBookText = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   padding-bottom: 5;
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
