import { useNavigation, useRoute } from "@react-navigation/native";
import { Modal } from "react-native";

import { mealDTO } from "@dtos/mealDTO";

import { BallYesOrNoDiet, ButtonModal, ChooseModal, Container, ContainerButtonModal, ContainerIcon, ContainerMeal, ContainerModal, ContainerShow, ContainerTitle, ContainerTwoButtons, ContainerYesOrNoDiet, TextButtonModal, TextDateAndHour, TextDescription, TextFullDate, TextMeal, TextModal, TextName, TextYesOrNoDiet } from "./style";

import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonAdd } from "@components/ButtonAdd";
import { storageRemoveMeal } from "@storage/storageRemoveMeal";
import { useState } from "react";

export function ShowMeal() {
  const navigation = useNavigation();
  const { params } = useRoute();

  const [isVisible, setIsVisible] = useState(false);

  const { name, description, date, hour, done } = params as mealDTO;

  async function removeMeal() {
    try {
      await storageRemoveMeal({ date, hour });
    } catch (error) {
      throw error;
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleEditMeal() {
    navigation.navigate("editMeal", { name, description, date, hour, done });
  }

  async function handleRemoveMeal() {
    await removeMeal();
    navigation.navigate("home");
  }

  return (
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
              {done ? "dentro " : "fora "}
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
            newNavigation={() => setIsVisible(true)}
          />
        </ContainerTwoButtons>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isVisible}
          statusBarTranslucent
        >
          <ContainerModal>
            <ChooseModal>
              <TextModal>
                Deseja realmente excluir o registro da refeição?
              </TextModal>

              <ContainerButtonModal>
                <ButtonModal
                  type={false}
                  onPress={() => setIsVisible(false)}
                >
                  <TextButtonModal type={false}>
                    Cancelar
                  </TextButtonModal>
                </ButtonModal>

                <ButtonModal
                  type
                  onPress={handleRemoveMeal}
                >
                  <TextButtonModal type>
                    Sim, excluir
                  </TextButtonModal>
                </ButtonModal>
              </ContainerButtonModal>
            </ChooseModal>
          </ContainerModal>
        </Modal>
      </ContainerShow>
    </Container>
  )
}