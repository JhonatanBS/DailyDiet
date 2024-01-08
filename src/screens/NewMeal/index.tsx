import { useState } from "react";

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

import { useNavigation } from "@react-navigation/native";

import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonDone } from "@components/ButtonDone";
import { ButtonAdd } from "@components/ButtonAdd";

type modeProps = "date" | "time";

export function NewMeal() {

  const navigation = useNavigation();

  const [ backgroundOption, setBackgroundOption] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [newDate, setNewDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<modeProps>();
  const [show, setShow] = useState(false);

  let date = dateSet();
  let hour = timeSet();

  function handleAlterColorBackground(value: boolean) {
     setBackgroundOption(!value)
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleNewNavigation() {
    navigation.navigate("feedback", { name, description, date, hour, done: backgroundOption});
  }

  {/* Date Picker*/}

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;
    setShow(false);
    setNewDate(currentDate as Date);
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

  function dateSet() {
    const day = String(newDate.getDate()).padStart(2, "0");
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const year = newDate.getFullYear();

    return `${day}/${month}/${year}`;
  }

  function timeSet() {
    const hour = String(newDate.getHours()).padStart(2, "0");
    const minutes = String(newDate.getMinutes()).padStart(2, "0");

    return `${hour}:${minutes}`;
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

      <InputName 
        onChangeText={(text) => setName(text)}
      />
      <TextInputName>
        Descrição
      </TextInputName>

      <ContainerDescription>

      <InputDescription 
        onChangeText={(text) => setDescription(text)}
        multiline
      />
      </ContainerDescription>

      <ContainerInput>
        <MiniContainerInput>
          <TextInputName>
            Data
          </TextInputName>

          
          <TimeInput onPress={showDatepicker}>
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
              {hour}
            </TextButtonDate>
          </TimeInput>

          {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={newDate}
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
        backgroundOption={backgroundOption}
        onPress={() => !backgroundOption && handleAlterColorBackground(backgroundOption)}
       />
       <ButtonDone 
        title="Não" 
        option={false}
        backgroundOption={!backgroundOption}
        onPress={() => backgroundOption && handleAlterColorBackground(backgroundOption)}
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