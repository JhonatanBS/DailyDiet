import { useState } from "react";

import { Container, ContainerButton, ContainerDoneOption, ContainerIcon, ContainerMeal, RegisterMeal, TextMeal } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";
import { Form } from "@components/Form";
import { ButtonDone } from "@components/ButtonDone";
import { ButtonAdd } from "@components/ButtonAdd";

export function NewMeal() {

  const [ backgroundOption, setBackgroundOption] = useState(false);

  function handleAlterColorBackground(value: boolean) {
     setBackgroundOption(!value)
  }

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
       <ButtonDone 
        title="Sim" 
        option
        backgroundOption={backgroundOption}
        onPress={() => handleAlterColorBackground(backgroundOption)}
       />
       <ButtonDone 
        title="Não" 
        option={false}
        backgroundOption={!backgroundOption}
        onPress={() => handleAlterColorBackground(backgroundOption)}
       />
      </ContainerDoneOption>
      
      <ContainerButton>
      <ButtonAdd 
        title="Cadastrar refeição"
        AddMeal={false}
      />
      </ContainerButton>
      </RegisterMeal>

  
    </Container>
  )
}