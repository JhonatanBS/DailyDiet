import { Header } from "@components/Header";
import { Container, ContainerIcon, ShowPercentage } from "./styles";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";

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
    </Container>
  )
}