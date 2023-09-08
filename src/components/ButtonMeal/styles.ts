import styled, { css } from "styled-components/native";



export type Props = {
  type?: boolean;
}

export const Container = styled.TouchableOpacity`
  max-height: 49px;
  min-height: 49px;
  width: 100%;

  border-radius: 6px;
  
  border-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-width: 1px;

  flex-direction: row;
  align-items: center;

  margin-top: 10px;
`;

export const DataDescription = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin: 0 11px;
    padding-right: 15px;
    border-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-right-width: 1px;
  `}
`;

export const MealDescription = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    padding: 5px 3px;
    width: 243px;
  `}
`;

export const CircleColorMeal = styled.View<Props>`
  height: 14px;
  width: 14px;

  border-radius: 20px;

  background-color: ${({theme, type }) => type  ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};

`;