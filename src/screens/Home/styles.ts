import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export type directionIconProps = "LEFT" | "RIGHT";

type Props = {
  type: directionIconProps;
}

type numberCounterPercentage = {
  type: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};

  padding: 0 24px;
`;

export const ShowPercentage = styled.View<numberCounterPercentage>`
  height: 102px;
  
  background-color: ${({theme, type }) => type ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: 8px;

  align-items: center;
`;

export const ContainerIcon = styled.View<Props>`
  height: 24px;
  width: 100%;

  ${({theme, type}) => (type === "LEFT" ? { alignItems: "flex-start"} : { alignItems: "flex-end"})}

`;

export const Description = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    margin-bottom: 10px;
  `}
`;

export const ContainerAddButton = styled.View`
  width: 100%;
  height: 79px;
  margin: 35px 0 10px;
`;

export const ContainerList = styled.View`
  flex: 1;
  margin-bottom: 50px;
`;