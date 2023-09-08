import { Container, Icon, NewMeal, Description } from "./styles";

type Props = {
  title: string;
  AddMeal: boolean;
  newNavigation: () => void;
}

export function ButtonAdd({ AddMeal, title, newNavigation }: Props) {
  return(
    <>
    { AddMeal && <Description>Refeições</Description>}
    <Container onPress={newNavigation}>
    { AddMeal && <Icon />}
    <NewMeal>
      {title}
    </NewMeal>
    </Container>
    </>
  )
}