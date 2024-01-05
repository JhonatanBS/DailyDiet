import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const ContainerMeal = styled.View`
  height: 80px;
  background-color: ${({theme}) => theme.COLORS.GRAY_500};

  justify-content: center;
  align-items: center;
  flex-direction: row;

  padding: 24px 24px;
`;

export const ContainerIcon = styled.View`
  flex: 1;

  position: absolute;

  left: 10px;

`;

export const TextMeal = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
  `}
`;

export const ContainerForm = styled.View`
  height: 425px;
  width: 100%;

  padding-top: 35px;

`;

export const TextInputName = styled.Text`
  ${({theme}) => css`
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.GRAY_200};
      font-family: ${theme.FONT_FAMILY.BOLD};
      text-align: left;
      margin-bottom: 5px;
    `}
`;

export const InputName = styled.TextInput`
  width: 100%;
  height: 48px;

  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  padding: 14px;
  margin-bottom: 20px;

  color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const ContainerDescription = styled.View`
  width: 100%;
  height: 120px;

  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  padding: 14px;

  margin-bottom: 20px;

`;

export const InputDescription = styled.TextInput`
  color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const TimeInput = styled.Pressable`
  width: 100%;
  height: 48px;

  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  padding: 14px;

  color: ${({theme}) => theme.COLORS.GRAY_100};
`;

export const TextButtonDate = styled.Text`
  ${({theme}) => css`
      font-size: ${theme.FONT_SIZE.MD}px;
      color: ${theme.COLORS.GRAY_100};
      font-family: ${theme.FONT_FAMILY.REGULAR};
      margin-bottom: 5px;
      height: 48px;
    `}
`;

export const ContainerInput = styled.View`
  width: 100%;
  height: 48px;

  flex-direction: row;

  margin-bottom: 50px;

  justify-content: space-between;
`;

export const MiniContainerInput = styled.View`
  width: 47%;
  height: 100%;
`;

export const RegisterMeal = styled.View`
   flex: 1;

   border-radius: 20px;

   background-color: ${({theme}) => theme.COLORS.GRAY_700};

   padding: 0 24px;
`;

export const ContainerDoneOption = styled.View`
  width: 100%;
  height: 50px;

  flex-direction: row;

  justify-content: space-between;

`;

export const ContainerButton = styled.View`
  flex: 1;
  justify-content: flex-end; 

  padding: 20px 0;

`;

