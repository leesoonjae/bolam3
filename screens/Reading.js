import React from "react";
import { View, Text } from "react-native";
import styled from "@emotion/native";



const Reading = ({ navigation: { navigate }}) => {


  const goDetail = () => {
    navigate("Stacks", { screen: "Detail" });
  };


  return (
    
    <StButtons>
    <StButton onPress={goDetail} style={{ backgroundColor: "#959d90" }}>
      <StButtonText>여기 눌러주세용</StButtonText>
    </StButton>
  </StButtons>
  );
};

export default Reading;


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
