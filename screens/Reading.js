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

// 컴포넌트명 변경했습니다 App => ReadingBooks
export default function ReadingBooks() {
  return (
    <SafeAreaView style={{ alignItems: "stretch" }}>
      <ReadingTitle>📚 독서리스트 추가하기</ReadingTitle>
      <ReadAddButton style={{ backgroundColor: "#E7DFD4" }}>
        <ReadAddButtonText>+</ReadAddButtonText>
      </ReadAddButton>
      <ReadingListWrapper>
        <ReadingList>
          <ReadingCard>
            <ReadingImg
              source={{
                uri: "https://image.yes24.com/goods/102591011/XL",
              }}
            />
            <ReadingText>
              <ReadingCardTitle>친애하는 나의 민원인</ReadingCardTitle>
              <ReadingCardAuthor>정명원</ReadingCardAuthor>
            </ReadingText>
          </ReadingCard>
          <ReadingCard>
            <ReadingImg
              source={{
                uri: "https://image.yes24.com/goods/102591011/XL",
              }}
            />
            <ReadingText>
              <ReadingCardTitle>친애하는 나의 민원인</ReadingCardTitle>
              <ReadingCardAuthor>정명원</ReadingCardAuthor>
            </ReadingText>
          </ReadingCard>
        </ReadingList>
        <ReadingList>
          <ReadingCard>
            <ReadingImg
              source={{
                uri: "https://image.yes24.com/goods/102591011/XL",
              }}
            />
            <ReadingText>
              <ReadingCardTitle>친애하는 나의 민원인</ReadingCardTitle>
              <ReadingCardAuthor>정명원</ReadingCardAuthor>
            </ReadingText>
          </ReadingCard>
          <ReadingCard>
            <ReadingImg
              source={{
                uri: "https://image.yes24.com/goods/102591011/XL",
              }}
            />
            <ReadingText>
              <ReadingCardTitle>친애하는 나의 민원인</ReadingCardTitle>
              <ReadingCardAuthor>정명원</ReadingCardAuthor>
            </ReadingText>
          </ReadingCard>
        </ReadingList>
        <ReadingList>
          <ReadingCard>
            <ReadingImg
              source={{
                uri: "https://image.yes24.com/goods/102591011/XL",
              }}
            />
            <ReadingText>
              <ReadingCardTitle>친애하는 나의 민원인</ReadingCardTitle>
              <ReadingCardAuthor>정명원</ReadingCardAuthor>
            </ReadingText>
          </ReadingCard>
          <ReadingCard>
            <ReadingImg
              source={{
                uri: "https://image.yes24.com/goods/102591011/XL",
              }}
            />
            <ReadingText>
              <ReadingCardTitle>친애하는 나의 민원인</ReadingCardTitle>
              <ReadingCardAuthor>정명원</ReadingCardAuthor>
            </ReadingText>
          </ReadingCard>
        </ReadingList>
      </ReadingListWrapper>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const ReadingTitle = styled.Text`
  margin-top: 50px;
  font-size: 18px;
  color: #513d34;
  text-align: left;
  margin-left: 50px;
`;

const ReadAddButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 45px;
  margin-top: 10px;
  width: 300px;
  height: 150px;
  border-radius: 25px;
`;

const ReadAddButtonText = styled.Text`
  text-align: center;
  color: white;
`;

const ReadingListWrapper = styled.View`
  flex-direction: column;
`;

const ReadingList = styled.View`
  flex-direction: row;
`;

const ReadingCard = styled.View`
  margin-top: 20px;
  margin-left: 13px;
  margin-right: 10px;
  width: 170px;
  height: 250px;
  background-color: #e2d9ce;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ReadingText = styled.View``;

const ReadingCardTitle = styled.Text`
  color: #513d34;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;

const ReadingCardAuthor = styled.Text`
  color: #6a6c6b;
  font-size: 13px;
  font-weight: 400;
  text-align: right;
  margin-top: 2px;
`;

const ReadingImg = styled.Image`
  width: 170px;
  height: 210px;
  margin-top: -9px;
  margin-bottom: 4px;
`;


// const Reading = ({ navigation: { navigate }}) => {


//   const goDetail = () => {
//     navigate("Stacks", { screen: "Detail" });
//   };


//   return (
    
//     <StButtons>
//     <StButton onPress={goDetail} style={{ backgroundColor: "#959d90" }}>
//       <StButtonText>여기 눌러주세용</StButtonText>
//     </StButton>
//   </StButtons>
//   );
// };

// export default Reading;


// const StButtons = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `;

// const StButton = styled.TouchableOpacity`
//   border-radius: 5px;
//   height: 40px;
//   width: 150px;
//   justify-content: center;
//   align-items: center;
// `;

// const StButtonText = styled.Text`
//   color: white;
//   font-size: 20px;
// `;
