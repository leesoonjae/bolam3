import styled from "@emotion/native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../util";
import { AntDesign } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

const Add = () => {
  const [isDone, setIsDone] = useState(false);
  return (
    <StAddContainer>
      <StContents>
        <StImage>
          <AntDesign name="pluscircleo" size={40} color="white" />
        </StImage>

        <StOnelineInputContainer>
          <StOnelineText>제목</StOnelineText>
          <StOnelineInput />
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>저자</StOnelineText>
          <StOnelineInput />
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>평점</StOnelineText>
          <Rating
            startingValue={0}
            style={{ marginLeft: 20 }}
            ratingCount={5}
            imageSize={30}
            tintColor="#E1DEDA"
          />
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>독서 기간</StOnelineText>
          <StOnelineInput />
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>진행 상황</StOnelineText>
          <Picker
            selectedValue={isDone}
            onValueChange={(itemValue) => setIsDone(itemValue)}
            style={{
              backgroundColor: "white",
              width: 265,
              marginLeft: 20,
            }}
          >
            <Picker.Item label="Reading" value={false} />
            <Picker.Item label="Finished" value={true} />
          </Picker>
        </StOnelineInputContainer>

        <StOverlinesInputContainer>
          <StOverlineText>인상 깊었던 문장</StOverlineText>
          <StLinesInput multiline numberOfLines={2} style={{ height: 80 }} />
        </StOverlinesInputContainer>

        <StOverlinesInputContainer>
          <StOverlineText>나의 생각</StOverlineText>
          <StLinesInput multiline numberOfLines={10} style={{ height: 150 }} />
        </StOverlinesInputContainer>
      </StContents>

      <StButtons>
        <StButton style={{ backgroundColor: "#959d90" }}>
          <StButtonText>Done</StButtonText>
        </StButton>
        <StButton style={{ backgroundColor: "#BDBDBD" }}>
          <StButtonText>cancle</StButtonText>
        </StButton>
      </StButtons>
    </StAddContainer>
  );
};

export default Add;

/////////////// 레이아웃 ///////////////

const StAddContainer = styled.ScrollView`
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

/////////////// 레이아웃, 콘텐츠 구분 ///////////////

const StContents = styled.View``;

const StImage = styled.TouchableOpacity`
  width: 100%;
  height: ${SCREEN_HEIGHT / 5 + "px"};
  background-color: #b5aeae;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const StOnelineInputContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

const StOnelineText = styled.Text`
  font-size: 16px;
  align-self: center;
  color: ${(props) => props.theme.text};
`;

const StOnelineInput = styled.TextInput`
  flex: 1;
  margin-left: 20px;
  background-color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
`;

const StOverlinesInputContainer = styled.View``;

const StOverlineText = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.text};
`;

const StLinesInput = styled.TextInput`
  background-color: white;
  border-radius: 10px;
  margin-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
`;

/////////////// 콘텐츠, 버튼 구분 ///////////////

const StButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StButton = styled.TouchableOpacity`
  border-radius: 5px;
  height: 40px;
  width: 150px;
  justify-content: center;
  align-items: center;
`;

const StButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;
