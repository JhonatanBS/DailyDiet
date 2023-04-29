import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  height: 24px;
  width: 24px;

  margin: 10px;
`;

export const NextIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
}))``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme}) => ({
  size: 24,
}))``;