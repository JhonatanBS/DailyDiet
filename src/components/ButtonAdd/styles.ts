import styled , { css } from "styled-components/native";

import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";

export interface PropsButton {
  onBackground: boolean;
}

interface PropsText {
  onColor: boolean;
}

export const Description = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-bottom: 10px;
  `}
`;
 
export const Container = styled.TouchableOpacity<PropsButton>`
   height: 50px;
   width: 100%;

   background-color: ${({theme, onBackground}) => onBackground ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};

   border-radius: 6px;

   justify-content: center;
   align-items: center;

   flex-direction: row;
   
   border-width: 1px;
`;

export const IconAdd = styled(Plus).attrs(({theme}) => ({
   size: 18,
   color: theme.COLORS.WHITE,
}))`
   margin-right: 10px;
`;

export const IconRemove = styled(Trash).attrs(({theme}) => ({
  size: 18,
  color: theme.COLORS.GRAY_100,
}))`
  margin-right: 10px;
`;

export const IconEdit = styled(PencilSimpleLine).attrs(({theme}) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 10px;
`;

export const NewMeal = styled.Text<PropsText>`
  ${({theme, onColor}) => css`
      color: ${ onColor ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;