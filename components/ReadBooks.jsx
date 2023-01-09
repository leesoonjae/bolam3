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

// 컴포넌트명 변경했습니다 App => ReadBooks
export default function ReadBooks() {
  return (
    <SafeAreaView style={{ alignItems: "stretch" }}>
      <FinishedTitle>🏆 총 74권의 책을 읽었어요!</FinishedTitle>
      <FinishedSubTitle>📚 나의 목표: 110권</FinishedSubTitle>
      <FinishedListWrapper>
        <FinishedList>
          <FinishedCard>
            <FinishedImg
              source={{
                uri: "https://image.yes24.com/goods/102591011/XL",
              }}
            />
            <FinishedText>
              <FinishedCardTitle>친애하는 나의 민원인</FinishedCardTitle>
              <FinishedRating>⭐ 9.5 / 10</FinishedRating>
            </FinishedText>
          </FinishedCard>

          <FinishedCard>
            <FinishedImg
              source={{
                uri: "https://image.yes24.com/goods/102591011/XL",
              }}
            />
            <FinishedText>
              <FinishedCardTitle>친애하는 나의 민원인</FinishedCardTitle>
              <FinishedRating>⭐ 9.5 / 10</FinishedRating>
            </FinishedText>
          </FinishedCard>
        </FinishedList>
        <FinishedList>
          <FinishedCard>
            <FinishedImg
              source={{
                uri: "https://image.yes24.com/goods/102591011/XL",
              }}
            />
            <FinishedText>
              <FinishedCardTitle>친애하는 나의 민원인</FinishedCardTitle>
              <FinishedRating>⭐ 9.5 / 10</FinishedRating>
            </FinishedText>
          </FinishedCard>

          <FinishedCard>
            <FinishedImg
              source={{
                uri: "https://image.yes24.com/goods/102591011/XL",
              }}
            />
            <FinishedText>
              <FinishedCardTitle>친애하는 나의 민원인</FinishedCardTitle>
              <FinishedRating>⭐ 9.5 / 10</FinishedRating>
            </FinishedText>
          </FinishedCard>
        </FinishedList>
        <FinishedList>
          <FinishedCard>
            <FinishedImg
              source={{
                uri: "https://image.yes24.com/goods/102591011/XL",
              }}
            />
            <FinishedText>
              <FinishedCardTitle>친애하는 나의 민원인</FinishedCardTitle>
              <FinishedRating>⭐ 9.5 / 10</FinishedRating>
            </FinishedText>
          </FinishedCard>

          <FinishedCard>
            <FinishedImg
              source={{
                uri: "https://image.yes24.com/goods/102591011/XL",
              }}
            />
            <FinishedText>
              <FinishedCardTitle>친애하는 나의 민원인</FinishedCardTitle>
              <FinishedRating>⭐ 9.5 / 10</FinishedRating>
            </FinishedText>
          </FinishedCard>
        </FinishedList>
      </FinishedListWrapper>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const FinishedTitle = styled.Text`
  margin-top: 50px;
  font-size: 22px;
  color: #513d34;
  text-align: center;
`;

const FinishedSubTitle = styled.Text`
  margin-top: 10px;
  margin-right: 10px;
  font-size: 18px;
  text-align: right;
  color: #513d34;
`;

const FinishedListWrapper = styled.View`
  flex-direction: column;
`;

const FinishedList = styled.View`
  flex-direction: row;
`;

const FinishedCard = styled.View`
  margin-top: 20px;
  margin-left: 13px;
  margin-right: 10px;
  width: 170;
  height: 250;
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
  width: 170;
  height: 210;
  margin-top: -9px;
  margin-bottom: 4px;
`;
