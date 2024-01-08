import { useNavigation, useRoute } from "@react-navigation/native";

import { mealDTO } from "@dtos/mealDTO";

import { View , Text} from "react-native";
import { BallYesOrNoDiet, Container, ContainerIcon, ContainerMeal, ContainerShow, ContainerTitle, ContainerTwoButtons, ContainerYesOrNoDiet, TextDateAndHour, TextDescription, TextFullDate, TextMeal, TextName, TextYesOrNoDiet } from "./style";
import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonAdd } from "@components/ButtonAdd";

export function ShowMeal() {
  const navigation = useNavigation();
  const { params } = useRoute();

  const { name, description, date, hour, done } = params as mealDTO;

  console.log(name, description, date, hour, done);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleEditMeal() {
    navigation.goBack();
  }

  return(
    <Container>
      <ContainerTitle type={done}>
        <ContainerIcon>
          <ButtonIcon 
            alterIcon={false}
            type="default"
            NewNavegition={handleGoBack}
          />
        </ContainerIcon>

        <TextMeal>
          Refeição
        </TextMeal>

      </ContainerTitle>

      <ContainerShow>
        <ContainerMeal>
          <TextName>
            {name}
          </TextName>

          <TextDescription>
            {description}
          </TextDescription>
        <TextDateAndHour>
          Data e hora
        </TextDateAndHour>

        <TextFullDate>
          {date} ás {hour}
        </TextFullDate>

        <ContainerYesOrNoDiet>
          <BallYesOrNoDiet type={done}>
          </BallYesOrNoDiet>

          <TextYesOrNoDiet>
            { done ? "dentro " : "fora "}
            da dieta
          </TextYesOrNoDiet>
        </ContainerYesOrNoDiet>
        </ContainerMeal>

        <ContainerTwoButtons>
        <ButtonAdd 
          title="Editar refeição"
          onBackground
          typeIcon="EDIT"
          onIcon
          newNavigation={handleEditMeal}
        />

        <ButtonAdd 
          title="Excluir refeição"
          onBackground={false}
          typeIcon="REMOVE"
          onIcon
          newNavigation={handleEditMeal}
        />
        </ContainerTwoButtons>

      </ContainerShow>
    </Container>
  )
}