import styled, { css } from "styled-components/native";

type Props = {
  option: boolean;
}

export const Container = styled.TouchableOpacity`
  width: 160px;
  height: 50px;

  background-color: ${({theme}) => theme.COLORS.GRAY_600};

  justify-content: center;
  align-items: center;

  flex-direction: row;

  border-radius: 6px;
`;

export const Circle = styled.View<Props>`
  height: 8px;
  width: 8px;

  border-radius: 20px;

  background-color: ${({theme , option }) => ( option ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK)};

  margin-right: 5px;
`;

export const DoneOption = styled.Text`
  ${({theme}) => css`
      color: ${theme.COLORS.GRAY_100};
      font-size: ${theme.FONT_SIZE.XSM}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;