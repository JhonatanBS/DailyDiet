import { Container, Circle, DoneOption } from "./styles";

type Props = {
  option: boolean;
  title: string;
}

export function ButtonDone({ option, title}: Props) {
  return(
    <Container >
      <Circle 
        option={option}
      />

      <DoneOption>
        {title}
      </DoneOption>
    </Container>
  )
}