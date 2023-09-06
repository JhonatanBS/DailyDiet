import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 150px;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.View`
  width: 82px;
  height: 37px;
`;

export const Profile = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  border-radius: 20px;

  border-color: black;
  border-width: 2px;

  justify-content: center;
  align-items: center;
`;