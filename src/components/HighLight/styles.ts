import styled , { css }from "styled-components/native";

export type sizeStyleProps= "XL" | "XXL";

type Props = {
  type: sizeStyleProps;
}

export const Percentage = styled.Text<Props>`
  ${({theme, type}) => css`
    font-size: ${ type === "XL" ? theme.FONT_SIZE.XL: theme.FONT_SIZE.XXL }px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Description = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;