import styled , { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";

import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";


export type ColorPropsButton =  {
  type: boolean | "default" ;
}  

export const Container = styled(TouchableOpacity)`
  height: 24px;
  width: 24px;

  margin: 10px;
`;

export const NextIcon = styled(ArrowUpRight).attrs<ColorPropsButton>(({ theme, type }) => ({
  color: typeof(type) === "string" ? theme.COLORS.GRAY_200 : ( type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK),
  size: 24
}))<ColorPropsButton>``;

export const BackIcon = styled(ArrowLeft).attrs<ColorPropsButton>(({ theme, type }) => ({
  color: typeof(type) === "string" ? theme.COLORS.GRAY_200 : ( type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK),
  size: 24
}))<ColorPropsButton>``;


