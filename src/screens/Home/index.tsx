import { Header } from "@components/Header";
import { Container, ContainerAddButton, ContainerIcon, ShowPercentage } from "./styles";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonAdd } from "@components/ButtonAdd";

export function Home() {
  return (
    <Container>
      <Header />
      <ShowPercentage>
        <ContainerIcon type="RIGHT">
          <ButtonIcon alterIcon={true}/>
        </ContainerIcon>

        <HighLight
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          size="XXL"
        />
      </ShowPercentage>

      <ContainerAddButton>
        <ButtonAdd 
          title="Nova Refeição"
          AddMeal={true}
        />
      </ContainerAddButton>
    </Container>
  )
}