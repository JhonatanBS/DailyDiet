import { useState } from "react";
import { Container, MessageMain, MessageDescription, MessageDescriptionBold, IconMeal, ContainerButton } from "./styles";

import dietDone from "@assets/dietDone.png";
import dietIsDone from "@assets/dietIsDone.png";

import { ButtonAdd } from "@components/ButtonAdd";

import { useRoute , useNavigation} from "@react-navigation/native";

interface PropsMeal {
  name: string;
  description: string;
  data: string;
  hour: string;
  done: boolean;
}

export function Feedback() {
 
  const navigation = useNavigation();
  const route = useRoute();

  const { name, description, data, hour, done } = route.params as PropsMeal;

  const isDone = done;
  console.log("teste:\n", name, description, data, hour, done);



  function handleNewNavigate() {
    navigation.navigate("home", {name, description, data, hour, done});
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
          AddMeal={false}
          newNavigation={handleNewNavigate}
        />
      </ContainerButton>
    </Container>
  )
}