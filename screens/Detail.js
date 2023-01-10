import styled from "@emotion/native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../util";
import { AntDesign } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

const Detail = ({ navigation: { navigate }}) => {



  const [isDone, setIsDone] = useState(false);
  

  const goDetailEdit = () => {
    navigate("Stacks", { screen: "DetailEdit" });
  };

  return(
    <Scroll>

        <StImageBox>
        </StImageBox>
        
        <StAddContainer>
        <StContents>
        <TitleContainer>
         <TitleText>나의라임 오뤤즤나무</TitleText> 
         <AuthorText>김d엘라스</AuthorText>
        </TitleContainer>

        <StOnelineInputContainer>
        <StOnelineText>독서 기간:</StOnelineText>
          <ReadDate>
            <OutputText>2022.01.09 ~ 2029.12.31</OutputText>
          </ReadDate>
        </StOnelineInputContainer>

        <StOnelineInputContainer>
          <StOnelineText>진행 상황:</StOnelineText>
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

        <StOnelineInputContainer>     
          <StOnelineText>평점:</StOnelineText>
          <Rating
            startingValue={0}
            style={{ marginLeft: 20 }}
            ratingCount={5}
            imageSize={30}
            tintColor="#E1DEDA"
          />
        </StOnelineInputContainer>

       



        <StOverlinesInputContainer>
          <StOverlineText>인상 깊었던 문장</StOverlineText>
          <OutputBox>
            <OutputText>안녕하세요</OutputText>
          </OutputBox>
        </StOverlinesInputContainer>

        <StOverlinesInputContainer>
        <StOverlineText>나의 생각</StOverlineText>
          <OutputBox>
            <OutputText>나의 죽음을 적에게 알리지마라...</OutputText>
          </OutputBox>
        </StOverlinesInputContainer>
      </StContents>

      <StButtons>
        <StButton onPress={goDetailEdit} style={{ backgroundColor: "#959d90" }}>
          <StButtonText>Edit</StButtonText>
        </StButton>
        <StButton style={{ backgroundColor: "#BDBDBD" }}>
          <StButtonText>Delete</StButtonText>
        </StButton>
      </StButtons>
    </StAddContainer>

    </Scroll>
  );
};

export default Detail;

const Scroll = styled.ScrollView`

`

const StAddContainer = styled.ScrollView`
  padding-left: 30px;
  padding-right: 30px;
`;

const StContents = styled.View``;

const StImageBox = styled.View`
  width: 100%;
  height: ${SCREEN_HEIGHT / 2 + "px"};
  background-color: #d9d9d9;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
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
`;

const AuthorText = styled.Text`
  font-size: 15px;
  color: grey;
  margin-top: 10px;
  margin-left: 15px;
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

const ReadDate = styled.View`
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

const OutputBox = styled.View`
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

const TitleBox = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.text};
`

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
