import styled, { css } from "styled-components/native";

export const Container = styled.View`
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
`;

export const InputDescription = styled.TextInput`
  width: 100%;
  height: 120px;

  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  padding: 14px;

  margin-bottom: 20px;

`;

export const TimeInput = styled.TextInput`
  width: 153px;
  height: 48px;

  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  padding: 14px;

`;

export const ContainerInput = styled.View`
  width: 100%;
  height: 48px;

  flex-direction: row;

  margin-bottom: 50px;
`;

export const MiniContainerInput = styled.View`
  width: 50%;
  height: 100%;
`;



