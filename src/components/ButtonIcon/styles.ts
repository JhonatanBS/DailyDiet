import styled from "styled-components/native";

import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ArrowUpRight, ArrowLeft, IconProps, Icon } from "phosphor-react-native";

export type ColorPropsButton = {
  type?: boolean | "default";
}

export const Container = styled(TouchableOpacity)`
  height: 24px;
  width: 24px;

  margin: 10px;
`;

export const NextIcon = styled(ArrowUpRight).attrs<ColorPropsButton>(({ theme, type }) => ({
  size: 24,
  color: type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
`;

export const BackIcon = styled(ArrowLeft).attrs<ColorPropsButton>(({ theme, type }) =>  typeof(type) === "string" ? ({
  size: 24,
  color: theme.COLORS.GRAY_200
}) : ({
  size: 24,
  color: type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
`;
