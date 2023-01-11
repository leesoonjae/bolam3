import styled from "@emotion/native";
import { SCREEN_HEIGHT } from "../util";
import { AntDesign } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import * as ImagePicker from "expo-image-picker";
import { useQuery } from "react-query";
import { getDataFromServer } from "../api";
import axios from "axios";

const DetailEdit = ({ navigation: { navigate, goBack } }) => {
  const isDark = useColorScheme() === "dark";

  const [newImgUri, setNewImgUri] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [newPeriod, setNewPeriod] = useState("");
  const [newIsDone, setNewIsDone] = useState(false);
  const [newBestSentence, setNewBestSentence] = useState("");
  const [newThinking, setNewthinking] = useState("");

  const [oldData, setOldData] = useState({
    id: 0,
    imgUri: "",
    title: "",
    writer: "",
    rating: 0,
    period: "",
    isDone: false,
    bestSentence: "",
    myThinking: "",
  });

  // 데이터 구조
  const newData = {
    newImgUri: newImgUri,
    newPeriod: newPeriod,
    newIsDone: newIsDone,
    newRating: newRating,
    newBestSentence: newBestSentence,
    newThinking: newThinking,
  };

  // 별점 기록
  const getNewRatings = (ratings) => {
    setNewRating(ratings);
  };

  // 이미지 업로드
  const imageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log("result.assets[0].uri: ", result.assets[0].uri);
    setNewImgUri(result.assets[0].uri);

    if (!result.canceled) {
      setNewImgUri(result.assets[0].uri);
    }
  };

  // json-server 수정
  const updateData = () => {
    axios.put(`http://172.30.1.64:4000/test`, newData);
  };

  // json-server 삭제
  const deleteData = () => {
    axios.delete(`http://172.30.1.64:4000/test`);
  };

  // json-server 조회 : 최근 게시물로 조회했습니다
  const getData = async () => {
    try {
      const response_data = await axios.get("http://172.30.1.64:4000/test");
      // console.log(response_data.data[response_data.data.length - 1]);
      setOldData(response_data.data[response_data.data.length - 1]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(oldData);

  return (
    <StAddContainer>
      <StContents>
        <StImageContainer onPress={imageUpload}>
          {newImgUri ? (
            <StImage source={{ uri: newImgUri }} />
          ) : (
            <AntDesign name="pluscircleo" size={40} color="white" />
          )}
        </StImageContainer>
        <TitleContainer>
          <TitleText>{oldData.title}</TitleText>
          <AuthorText>{oldData.writer}</AuthorText>
        </TitleContainer>

        <StOnelineInputContainer>
          <StOnelineText>독서 기간:</StOnelineText>
          <ReadDateInput
            placeholder={oldData.period}
            value={newPeriod}
            onChangeText={setNewPeriod}
          />
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>진행 상황:</StOnelineText>
          <Picker
            value={newIsDone}
            selectedValue={newIsDone}
            onValueChange={(itemValue) => setNewIsDone(itemValue)}
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

        <StOnelineInputContainer>
          <StOnelineText>평점:</StOnelineText>
          <Rating
            onFinishRating={getNewRatings}
            startingValue={oldData.rating}
            style={{ marginLeft: 20 }}
            ratingCount={5}
            imageSize={30}
            tintColor={isDark ? "#333030" : "#E1DEDA"}
          />
        </StOnelineInputContainer>

        <StOverlinesInputContainer>
          <StOverlineText>인상 깊었던 문장</StOverlineText>
          <OutputBoxInput
            placeholder={oldData.bestSentence}
            value={newBestSentence}
            onChangeText={setNewBestSentence}
          />
        </StOverlinesInputContainer>

        <StOverlinesInputContainer>
          <StOverlineText>나의 생각</StOverlineText>
          <OutputBoxInput
            placeholder={oldData.myThinking}
            value={newThinking}
            onChangeText={setNewthinking}
          />
        </StOverlinesInputContainer>
      </StContents>

      <StButtons>
        <StButton style={{ backgroundColor: "#959d90" }} onPress={updateData}>
          <StButtonText>Done</StButtonText>
        </StButton>
        <StButton style={{ backgroundColor: "#BDBDBD" }} onPress={deleteData}>
          <StButtonText>Delete</StButtonText>
        </StButton>
      </StButtons>
    </StAddContainer>
  );
};

export default DetailEdit;

const StAddContainer = styled.ScrollView`
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const StContents = styled.View``;

const StImageContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${SCREEN_HEIGHT / 5 + "px"};
  background-color: #b5aeae;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const StImage = styled.Image`
  width: 70%;
  height: 100%;
  border-radius: 10px;
`;

const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 10px;
`;

const TitleText = styled.Text`
  flex-direction: row;
  margin-bottom: 10px;
  font-size: 25px;
  color: ${(props) => props.theme.text};
`;

const AuthorText = styled.Text`
  font-size: 15px;
  color: grey;
  margin-top: 10px;
  margin-left: 15px;
  color: ${(props) => props.theme.text};
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

const ReadDateInput = styled.TextInput`
  flex: 1;
  margin-left: 20px;
  background-color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
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

const OutputBoxInput = styled.TextInput`
  flex: 1;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  margin-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  height: 40px;
`;

const OutputText = styled.Text`
  font-size: 16px;
  padding: 10px;
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
