import styled, { css } from "styled-components/native";

type Props = {
  done: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};

  padding: 32px;

  justify-content: center;
  align-items: center;

`;

export const MessageMain = styled.Text<Props>`
  ${({theme, done}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${ done ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    margin-bottom: 8px;
  `}
`;

export const MessageDescription = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
    text-align: center;
  `}
`;

export const MessageDescriptionBold = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100}
  `}
`;

export const IconMeal = styled.Image`
  height: 288px;
  width: 224px;
  margin: 40px 0;
`;

export const ContainerButton = styled.View`
  height: 50px;
  width: 191px;
`;
