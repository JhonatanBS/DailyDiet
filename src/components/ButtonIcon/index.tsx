import { BackIcon, ColorPropsButton, Container, NextIcon } from "./styles";

import theme from "@theme/index";

interface Props {
  alterIcon?: boolean;
  type?: ColorPropsButton
}

export function ButtonIcon({alterIcon = true}: Props, { type = "default" } : ColorPropsButton) {
  return(
    <Container >
      { alterIcon ?
        <NextIcon type={type} />:
        <BackIcon type={type}/>
      }
    </Container>
  )
}