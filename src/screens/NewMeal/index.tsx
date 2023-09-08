import { useState } from "react";

import { Container, ContainerButton, ContainerDoneOption, ContainerForm, ContainerIcon, ContainerInput, ContainerMeal, InputDescription, InputName, MiniContainerInput, RegisterMeal, TextInputName, TextMeal, TimeInput } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonDone } from "@components/ButtonDone";
import { ButtonAdd } from "@components/ButtonAdd";
import { useNavigation } from "@react-navigation/native";

export function NewMeal() {

  const navigation = useNavigation();

  const [ backgroundOption, setBackgroundOption] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState("");
  const [hour, setHour] = useState("");
  const [done, setDone] = useState(true);

  function handleAlterColorBackground(value: boolean) {
     setBackgroundOption(!value)
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleNewNavigation() {
    navigation.navigate("feedback", {name, description, data, hour, done: backgroundOption});
  }

  return(
    <Container>
      <ContainerMeal>

        <ContainerIcon>
          <ButtonIcon 
            alterIcon={false}
            type="default"
            NewNavegition={handleGoBack}
          />
        </ContainerIcon>

        <TextMeal>
          Nova Refeição
        </TextMeal>

      </ContainerMeal>

      <RegisterMeal>
      <ContainerForm>
      <TextInputName >
        Nome
      </TextInputName>

      <InputName onChangeText={(text) => setName(text)}/>

      <TextInputName>
        Descrição
      </TextInputName>

      <InputDescription onChangeText={(text) => setDescription(text)}/>

      <ContainerInput>
        <MiniContainerInput>
          <TextInputName>
            Data
          </TextInputName>

          <TimeInput onChangeText={(text) => setData(text)}/>
        </MiniContainerInput>

        <MiniContainerInput>
          <TextInputName>
            Hora
          </TextInputName>

          <TimeInput onChangeText={(text) => setHour(text)}/>
        </MiniContainerInput>

      </ContainerInput>

      <TextInputName>
          Está dentro da dieta ?
      </TextInputName>
    </ContainerForm>

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
        newNavigation={handleNewNavigation}
      />
      </ContainerButton>
      </RegisterMeal>

  
    </Container>
  )
}