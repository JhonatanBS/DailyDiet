import { BackIcon, Container, NextIcon } from "./styles";

import theme from "@theme/index";

interface Props {
  alterIcon?: boolean;
}

export function ButtonIcon({alterIcon = true}: Props) {
  return(
    <Container >
      { alterIcon ?
        <NextIcon color={theme.COLORS.GREEN_DARK}/>:
        <BackIcon color={theme.COLORS.GREEN_DARK}/>
      }
    </Container>
  )
}