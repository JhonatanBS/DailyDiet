import styled , { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

type YesOrNoProps = {
  type: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const ContainerTitle = styled.View<YesOrNoProps>`
  height: 80px;
  background-color: ${({theme, type}) => type ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

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

export const ContainerShow = styled.View`
  flex: 1;
  background-color: white;

  border-radius: 20px;

  padding: 40px 24px;

  justify-content: space-between;
`;

export const ContainerMeal = styled.View`
  height: 184px;
  width: 100%;
`;

export const TextName = styled.Text`
${({theme}) => css`
  font-size: 20px;
  color: ${theme.COLORS.GRAY_100};
  font-family: ${theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`}
`;

export const TextDescription = styled.Text`
${({theme}) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_200};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  margin-bottom: 24px;
`}
`;

export const TextDateAndHour = styled.Text`
${({theme}) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_100};
  font-family: ${theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`}
`;

export const TextFullDate = styled.Text`
${({theme}) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_200};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  margin-bottom: 24px;
`}
`;

export const ContainerYesOrNoDiet = styled.View`
  height: 34px;
  width: 144px;
  border-radius: 50px;

  background-color: ${({theme}) => theme.COLORS.GRAY_600};

  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;

`;

export const BallYesOrNoDiet = styled.View<YesOrNoProps>`
  height: 8px;
  width: 8px;

  border-radius: 50px;
  margin-right: 5px;

  background-color: ${({theme, type}) => type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const TextYesOrNoDiet = styled.Text`
  ${({theme}) => css`
  font-size: ${theme.FONT_SIZE.SM}px;
  color: ${theme.COLORS.GRAY_100};
  font-family: ${theme.FONT_FAMILY.REGULAR};
`}
`;

export const ContainerTwoButtons = styled.View`
  height: 109px;
  width: 100%;

  justify-content: space-between;
`;