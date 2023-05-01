import { useState } from "react";
import { Container, MessageMain, MessageDescription, MessageDescriptionBold, IconMeal, ContainerButton } from "./styles";

import dietDone from "@assets/dietDone.png";
import dietIsDone from "@assets/dietIsDone.png";

import { ButtonAdd } from "@components/ButtonAdd";

export function Feedback() {
  const [done, setDOne] = useState(true);

  return(
    <Container>
      {done ? (
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
        />
      </ContainerButton>
    </Container>
  )
}