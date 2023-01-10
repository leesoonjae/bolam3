import styled from "@emotion/native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../util";
import { AntDesign } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import { Picker } from "@react-native-picker/picker";
import React, { useState, useEffect } from "react";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import axios from "axios";
import uuid from "react-native-uuid";

const Add = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [rating, setRating] = useState(0);
  const [period, setPeriod] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [bestSentence, setbestSentence] = useState("");
  const [myThinking, setMyThinking] = useState("");

  const data = {
    id: uuid.v4(),
    title: title,
    writer: writer,
    rating: rating,
    period: period,
    isDone: isDone,
    bestSentence: bestSentence,
    myThinking: myThinking,
  };

  // console.log(title);

  const getRatings = (ratings) => {
    setRating(ratings);
  };

  const getData = async () => {
    try {
      const response_data = axios.get("http://172.30.1.91:4000/data");
      console.log(response_data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  const postData = async () => {
    try {
      // console.log("data: ", data);
      await axios.post("http://172.30.1.91:4000/data", data);
      // inputRef.current.clear();
      setTitle("");
      setWriter("");
      setRating(0);
      setPeriod("");
      setIsDone(false);
      setbestSentence("");
      setMyThinking("");
    } catch (err) {
      console.log(err);
    }
  };

  // export const postContent = createAsyncThunk(
  //   `${name}/postContent`,
  //   async (
  //     { nickname, password, contentTitle, contentWhy, contentHow, contentWhen },
  //     { fulfillWithValue, rejectWithValue }
  //   ) => {
  //     try {
  //       await axios.post("http://localhost:3001/content", {
  //         id: nanoid(),
  //         nickname,
  //         password,
  //         contentTitle,
  //         contentWhy,
  //         contentHow,
  //         contentWhen,
  //       });
  //       const res = axios.get("http://localhost:3001/content");
  //       return fulfillWithValue(res.data);
  //     } catch (e) {
  //       return rejectWithValue(e);
  //     }
  //   }
  // );

  const isDark = useColorScheme() === "dark";
  return (
    <StAddContainer>
      <StContents>
        <StImage>
          <AntDesign name="pluscircleo" size={40} color="white" />
        </StImage>

        <StOnelineInputContainer>
          <StOnelineText>제목</StOnelineText>
          <StOnelineInput value={title} onChangeText={setTitle} />
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>저자</StOnelineText>
          <StOnelineInput value={writer} onChangeText={setWriter} />
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>평점</StOnelineText>
          <Rating
            onFinishRating={getRatings}
            startingValue={rating}
            style={{ marginLeft: 20 }}
            ratingCount={5}
            imageSize={30}
            tintColor={isDark ? "#333030" : "#E1DEDA"}
          />
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>독서 기간</StOnelineText>
          <StOnelineInput
            value={period}
            placeholder="2023.1.10 ~ 2023.2.10"
            onChangeText={setPeriod}
          />
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>진행 상황</StOnelineText>
          <Picker
            value={isDone}
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
            value={bestSentence}
            multiline
            numberOfLines={2}
            style={{ height: 80 }}
            onChangeText={setbestSentence}
          />
        </StOverlinesInputContainer>

        <StOverlinesInputContainer>
          <StOverlineText>나의 생각</StOverlineText>
          <StLinesInput
            value={myThinking}
            multiline
            numberOfLines={10}
            style={{ height: 150 }}
            onChangeText={setMyThinking}
          />
        </StOverlinesInputContainer>
      </StContents>

      <StButtons>
        <StButton style={{ backgroundColor: "#959d90" }} onPress={postData}>
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
