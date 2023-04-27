import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 150px;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Profile = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  border-radius: 20px;

`;

export const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
