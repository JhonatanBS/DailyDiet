import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export type directionIconProps = "LEFT" | "RIGHT";

type Props = {
  type: directionIconProps;
}

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};

  padding: 0 24px;
`;

export const ShowPercentage = styled.View`
  height: 102px;
  
  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};

  border-radius: 8px;

  align-items: center;
`;

export const ContainerIcon = styled.View<Props>`
  height: 24px;
  width: 100%;

  ${({theme, type}) => (type === "LEFT" ? { alignItems: "flex-start"} : { alignItems: "flex-end"})}

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