import { Container, CircleColorMeal, DataDescription, MealDescription } from "./styles";

type Props = {
  date: string;
  meal: string;
  done: boolean
}

export function ButtonMeal({ date, meal, done }: Props) {
  return (
    <Container>
      <DataDescription>
        { date }
      </DataDescription>
 
      <MealDescription>
        { meal }
      </MealDescription>

      <CircleColorMeal 
        type={done}
      />
    </Container>
  )
}