import { ButtonIcon } from "@components/ButtonIcon";

import { Container, ContainerIcon, ContainerMeal, RegisterMeal, TextMeal } from "./styles";
import { Form } from "@components/Form";

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

      </RegisterMeal>
    </Container>
  )
}