import { useEffect, useState } from "react";

import {
  Container,
  ContainerButton,
  ContainerDescription,
  ContainerDoneOption,
  ContainerForm,
  ContainerIcon,
  ContainerInput,
  ContainerMeal,
  InputDescription,
  InputName,
  MiniContainerInput,
  RegisterMeal,
  TextButtonDate,
  TextInputName,
  TextMeal,
  TimeInput
} from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";

import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonDone } from "@components/ButtonDone";
import { ButtonAdd } from "@components/ButtonAdd";
import { mealDTO } from "@dtos/mealDTO";
import { storageEditMeal } from "@storage/storageEditMeal";

type modeProps = "date" | "time";

export function EditMeal() {

  const navigation = useNavigation();

  const { params } = useRoute();

  const { name, description, date, done, hour } = params as mealDTO;

  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newHour, setNewHour] = useState(hour);
  const [newDone, setNewDone] = useState(done);

  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<modeProps>();
  const [show, setShow] = useState(false);

  console.log(newName, newDescription, newHour, newDone)

  function handleAlterColorBackground(value: boolean) {
    setNewDone(!value)
  }

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleNewNavigation() {
    await editMealStorage()
    navigation.navigate("home");
  }

  {/* Date Picker*/ }

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;
    setShow(false);
    setNowDate(currentDate as Date);
  };

  const showMode = (currentMode: modeProps) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  function timeSet() {

    const hour = String(nowDate.getHours()).padStart(2, "0");
    const minutes = String(nowDate.getMinutes()).padStart(2, "0");

    return `${hour}:${minutes}`;
  }

  useEffect(() => {
    setNewHour(timeSet());
  }, [nowDate]);

  async function editMealStorage() {
    try {
      await storageEditMeal(
        {
          nowDate: date,
          nowHour: hour,
        },
        {
          name: newName,
          description: newDescription,
          date,
          hour: newHour,
          done: newDone
        }
      );
    } catch (error) {
      throw error;
    }
  }

  return (
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
          Editar Refeição
        </TextMeal>

      </ContainerMeal>

      <RegisterMeal>
        <ContainerForm>
          <TextInputName >
            Nome
          </TextInputName>

          <InputName
            onChangeText={(text) => setNewName(text)}
            value={newName}
          />
          <TextInputName>
            Descrição
          </TextInputName>

          <ContainerDescription>

            <InputDescription
              onChangeText={(text) => setNewDescription(text)}
              multiline
              value={newDescription}
            />
          </ContainerDescription>

          <ContainerInput>
            <MiniContainerInput>
              <TextInputName>
                Data
              </TextInputName>

              <TimeInput
                onPress={showDatepicker}
                disabled
                style={{ backgroundColor: "#CCCCCC" }}
              >
                <TextButtonDate>
                  {date}
                </TextButtonDate>
              </TimeInput>

            </MiniContainerInput>

            <MiniContainerInput>
              <TextInputName>
                Hora
              </TextInputName>

              <TimeInput onPress={showTimepicker}>
                <TextButtonDate>
                  {newHour}
                </TextButtonDate>
              </TimeInput>

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={nowDate}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
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
            backgroundOption={newDone}
            onPress={() => !newDone && handleAlterColorBackground(newDone)}
          />
          <ButtonDone
            title="Não"
            option={false}
            backgroundOption={!newDone}
            onPress={() => newDone && handleAlterColorBackground(newDone)}
          />
        </ContainerDoneOption>

        <ContainerButton>
          <ButtonAdd
            title="Salvar alterações"
            onBackground
            onIcon={false}
            newNavigation={handleNewNavigation}
          />
        </ContainerButton>
      </RegisterMeal>


    </Container>
  )
}