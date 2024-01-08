import { mealDTO } from "@dtos/mealDTO";
import { Container, CircleColorMeal, DataDescription, MealDescription } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function ButtonMeal({ name, description, date, hour, done }: mealDTO) {
  const navigation = useNavigation();

  function handleNavigateShowMeal({ name, description, date, hour, done }: mealDTO) {
    navigation.navigate("showMeal", { name, description, date, hour, done });  
  }

  return (
    <Container onPress={() => handleNavigateShowMeal({name, description, date, hour, done})}>
      <DataDescription>
        { hour }
      </DataDescription>
 
      <MealDescription>
        { name }
      </MealDescription>

      <CircleColorMeal 
        type={done}
      />
    </Container>
  )
}