import { StatusBar } from "expo-status-bar";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "@emotion/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// 컴포넌트명 변경했습니다 App => ReadBooks
export default function ReadBooks() {
  const navigation = useNavigation();

  // const goDetail = () => {
  //   navigation.navigate("Stacks", { screen: "Detail" });
  // };

  const [finishedBookData, setFinishedBookData] = useState([]);

  const [finishedBookCount, setFinishedBookCount] = useState(0);
  const [goalBooksCount, setGoalBooksCount] = useState(0);

  const finishedBooks = async () => {
    try {
      const serverFinishedBooks = await axios.get(
        `http://192.168.0.2:4000/data`
      );
      setFinishedBookData(serverFinishedBooks.data);
      const allReadBooks = finishedBookData.map((allRead) => allRead.length);
      setGoalBooksCount(allReadBooks.length);
      const bbb = finishedBookData.filter((allRead) => allRead.isDone === true);
      setFinishedBookCount(bbb.length);
    } catch (error) {
      console.log("Error 가 발생했습니다.", error);
    }
  };

  useEffect(() => {
    finishedBooks();
  }, []);

  return (
    <SafeAreaView style={{ alignItems: "stretch" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FinishedTitle>
          🏆 총 {finishedBookCount} 권의 책을 읽었어요!
        </FinishedTitle>

        <FinishedSubTitle>📚 나의 목표: {goalBooksCount} 권</FinishedSubTitle>
        <FinishedListWrapper>
          {finishedBookData.map((obj) =>
            obj.isDone === true ? (
              <FinishedList>
                <FinishedCard
                  onPress={() =>
                    navigation.navigate("Stacks", {
                      screen: "Detail",
                      params: obj,
                    })
                  }
                >
                  <FinishedImg
                    source={{
                      uri: obj.imgUri,
                    }}
                  />
                  <FinishedText>
                    <FinishedCardTitle>{obj.title}</FinishedCardTitle>
                    <FinishedRating>⭐ {obj.rating} / 5</FinishedRating>
                  </FinishedText>
                </FinishedCard>
              </FinishedList>
            ) : null
          )}
        </FinishedListWrapper>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const FinishedTitle = styled.Text`
  margin-top: 20px;
  font-size: 22px;
  color: #513d34;
  text-align: center;
`;

const FinishedSubTitle = styled.Text`
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: -7px;
  font-size: 18px;
  text-align: right;
  color: #513d34;
`;

const FinishedListWrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const FinishedList = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
`;

const FinishedCard = styled.TouchableOpacity`
  margin-top: 20px;
  width: 170px;
  height: 250px;
  background-color: #e2d9ce;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const FinishedText = styled.View``;

const FinishedCardTitle = styled.Text`
  color: #513d34;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;

const FinishedRating = styled.Text`
  color: #6a6c6b;
  font-size: 13px;
  font-weight: 400;
  text-align: right;
`;

const FinishedImg = styled.Image`
  width: 170px;
  height: 210px;
  margin-top: -9px;
  margin-bottom: 4px;
`;
