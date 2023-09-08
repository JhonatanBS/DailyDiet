import { BackIcon, Container, NextIcon } from "./styles";

interface Props {
  alterIcon?: boolean;
  type?: boolean | "default"
  NewNavegition: () => void;
}

export function ButtonIcon({ alterIcon = true, type="default", NewNavegition }: Props) {
  return(
    <Container onPress={NewNavegition}>
      { alterIcon ?
        <NextIcon type={type}/>:
        <BackIcon type={type}/>
      }
    </Container>
  )
}