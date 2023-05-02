import { Container, ContainerInput, InputDescription, InputName, MiniContainerInput, TextInputName, TimeInput } from "./styles";

export function Form() {
  return (
    <Container>
      <TextInputName>
        Nome
      </TextInputName>

      <InputName />

      <TextInputName>
        Descrição
      </TextInputName>

      <InputDescription />

      <ContainerInput>
        <MiniContainerInput>
          <TextInputName>
            Data
          </TextInputName>

          <TimeInput />
        </MiniContainerInput>

        <MiniContainerInput>
          <TextInputName>
            Hora
          </TextInputName>

          <TimeInput />
        </MiniContainerInput>

      </ContainerInput>

      <TextInputName>
          Está dentro da dieta ?
      </TextInputName>
    </Container>
  )
}