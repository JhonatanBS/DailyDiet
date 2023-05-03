import { ButtonIcon } from "@components/ButtonIcon";

import { Container, ContainerDoneOption, ContainerIcon, ContainerMeal, RegisterMeal, TextMeal } from "./styles";
import { Form } from "@components/Form";
import { ButtonDone } from "@components/ButtonDone";

export function NewMeal() {
  return(
    <Container>
      <ContainerMeal>

        <ContainerIcon>
          <ButtonIcon 
            alterIcon={false}
          />
        </ContainerIcon>

        <TextMeal>
          Nova Refeição
        </TextMeal>

      </ContainerMeal>

      <RegisterMeal>
        <Form />

      <ContainerDoneOption>
       <ButtonDone title="Sim" option/>
       <ButtonDone title="Não" option={false}/>
      </ContainerDoneOption>
      </RegisterMeal>

    </Container>
  )
}