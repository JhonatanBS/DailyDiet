import { Container, Icon, NewMeal, Description } from "./styles";

type Props = {
  title: string;
  AddMeal: boolean;
}

export function ButtonAdd({ AddMeal, title }: Props) {
  return(
    <>
    { AddMeal && <Description>Refeições</Description>}
    <Container>
    { AddMeal && <Icon />}
    <NewMeal>
      {title}
    </NewMeal>
    </Container>
    </>
  )
}