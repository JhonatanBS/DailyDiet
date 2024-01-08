import { Container, MessageMain, MessageDescription, MessageDescriptionBold, IconMeal, ContainerButton } from "./styles";

import dietDone from "@assets/dietDone.png";
import dietIsDone from "@assets/dietIsDone.png";

import { mealDTO } from "@dtos/mealDTO";

import { ButtonAdd } from "@components/ButtonAdd";

import { useRoute , useNavigation} from "@react-navigation/native";
import { storageAddMeal } from "@storage/storageAddMeal";

export function Feedback() {
 
  const navigation = useNavigation();
  const { params } = useRoute();

  const { name, description, date, hour, done } = params as mealDTO;
  const isDone = done;

  function handleNewNavigate() {
    navigation.navigate("home");
  }

  async function addMealStorage() {
    try {
      await storageAddMeal({ name, description, date, hour, done });
    } catch (error) {
      throw error;
    }
  }

  if(params) {
    addMealStorage();
  }

  return(
    <Container>
      {isDone ? (
      <>
        <MessageMain done>
          Continue assim!
        </MessageMain>

        <MessageDescription >
        Você continua 
        <MessageDescriptionBold > dentro da dieta. </MessageDescriptionBold>
        Muito bem!
        </MessageDescription>

        <IconMeal source={dietDone}/>
      </>
      ) : (
      <>  
      <MessageMain done={false}>
        Que Pena!
      </MessageMain>

      <MessageDescription >
        Você
        <MessageDescriptionBold > saiu da dieta. </MessageDescriptionBold>
        dessa vez, mas continue se esforçando e não desista!
        </MessageDescription>

        <IconMeal source={dietIsDone}/>
      </>
      )}
      
      <ContainerButton>
        <ButtonAdd 
          title="Ir para a pagina inicial"
          onBackground
          onIcon={false}
          newNavigation={handleNewNavigate}
        />
      </ContainerButton>
    </Container>
  )
}