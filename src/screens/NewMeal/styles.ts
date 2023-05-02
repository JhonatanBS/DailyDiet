import styled, { css } from "styled-components/native";

export const Container = styled.View`
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

export const RegisterMeal = styled.View`
   flex: 1;

   border-radius: 20px;

   background-color: ${({theme}) => theme.COLORS.GRAY_700};

   padding: 0 24px;
`;

