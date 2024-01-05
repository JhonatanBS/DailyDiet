import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";

type Props = {
  option?: boolean;
  backgroundOption?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 49%;
  height: 50px;

  background-color: ${({theme}) => theme.COLORS.GRAY_600};

  ${({theme, backgroundOption, option}) => backgroundOption && css`
    background-color: ${option ? 
                        theme.COLORS.GREEN_LIGHT 
                        :
                        (theme.COLORS.RED_LIGHT)
                        };
    border-width: 1px;

    border-color: ${option ? 
                        theme.COLORS.GREEN_DARK
                        :
                        (theme.COLORS.RED_DARK)
                        };;
  `}

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