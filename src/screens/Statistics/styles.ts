import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

import { directionIconProps } from "@screens/Home/styles";

type Props = {
  type: directionIconProps;
}

type ColorProps = {
  typeMeal: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`;

export const Percent = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};

  padding: 0 10px;
  margin-bottom: 30px;

  justify-content: center;
  align-items: center;
`;

export const Data = styled.View`
  flex: 1;
  border-radius: 20px;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};

  padding: 0 24px;
`;

export const ContainerIcon = styled.View<Props>`
  height: 24px;
  width: 100%;

  ${({theme, type}) => (type === "LEFT" ? { alignItems: "flex-start"} : { alignItems: "flex-end"})}
`;

export const TextStatistics = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
    margin: 40px 0 30px 0;
  `}
`;

export const ContainerStatistics = styled.View`
  height: 89px;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};

  border-radius: 8px;

  margin-bottom: 12px;

  justify-content: center;
  align-items: center;
`;

export const CounterMeal = styled.View`
  width: 100%;
  height: 107px;

  flex-direction: row;

  align-items: space-between;
  justify-content: space-between;
`;

export const SmallContainer = styled.View<ColorProps>`
  height: 107px;
  width: 166px;

  border-radius: 8px;

  padding: 20px;

  text-align: center;

  justify-content: center;
  align-items: center;

  background-color: ${({theme, typeMeal}) => typeMeal ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;


