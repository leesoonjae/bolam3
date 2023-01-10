import styled from "@emotion/native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../util";
import { AntDesign } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import { Picker } from "@react-native-picker/picker";
import React, { useState, useEffect } from "react";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { get } from "react-native/Libraries/Utilities/PixelRatio";
import axios from "axios";
import { useCallback } from "react/cjs/react.development";

const Add = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [rating, setRating] = useState("");
  const [period, setPeriod] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [bestSentence, setbestSentence] = useState("");
  const [myThinking, setMyThinking] = useState("");

  const getRatings = (ratings) => {
    setRating(ratings);
  };

  // useEffect(
  //   useCallback(() => {
  //     getDate();
  //   }, [])
  // );

  const getDate = async () => {
    try {
      // console.log("222")
      // const response_data = await axios.get("http://localhost:4000/posts");
      // console.log(response_data);
      const response_data = await fetch("http://localhost:4000/posts").then(
        (res) => res.json()
      );
      console.log(response_data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDate();
  }, []);

  // const data = await axios.get("http://localhost:4000/todos");

  const isDark = useColorScheme() === "dark";
  return (
    <StAddContainer>
      <StContents>
        <StImage>
          <AntDesign name="pluscircleo" size={40} color="white" />
        </StImage>

        <StOnelineInputContainer>
          <StOnelineText>제목</StOnelineText>
          <StOnelineInput onChangeText={setTitle} />
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>저자</StOnelineText>
          <StOnelineInput onChangeText={setWriter} />
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>평점</StOnelineText>
          <Rating
            onFinishRating={getRatings}
            startingValue={0}
            style={{ marginLeft: 20 }}
            ratingCount={5}
            imageSize={30}
            tintColor={isDark ? "#333030" : "#E1DEDA"}
          />
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>독서 기간</StOnelineText>
          <StOnelineInput
            placeholder="2023.1.10 ~ 2023.2.10"
            onChangeText={setPeriod}
          />
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
          <StLinesInput
            multiline
            numberOfLines={2}
            style={{ height: 80 }}
            onChangeText={setbestSentence}
          />
        </StOverlinesInputContainer>

        <StOverlinesInputContainer>
          <StOverlineText>나의 생각</StOverlineText>
          <StLinesInput
            multiline
            numberOfLines={10}
            style={{ height: 150 }}
            onChangeText={setMyThinking}
          />
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
