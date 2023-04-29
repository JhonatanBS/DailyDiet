import styled , { css } from "styled-components/native";

import { Plus } from "phosphor-react-native";

export const Description = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-bottom: 10px;
  `}
`;
 
export const Container = styled.TouchableOpacity`
   height: 50px;
   width: 100%;

   background-color: ${({theme}) => theme.COLORS.GRAY_200};

   border-radius: 6px;

   justify-content: center;
   align-items: center;

   flex-direction: row;
`;

export const Icon = styled(Plus).attrs(({theme}) => ({
   size: 18,
   color: theme.COLORS.WHITE,
}))`
   margin-right: 10px;
`;

export const NewMeal = styled.Text`
${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;