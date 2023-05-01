import { ButtonIcon } from "@components/ButtonIcon"
import { Container, Percent, Data, TextStatistics, ContainerStatistics, SmallContainer, CounterMeal } from "./styles"
import { HighLight } from "@components/HighLight"
import { ContainerIcon } from "@screens/Home/styles"

export function Statistics() {
  return (
    <Container>
      <Percent>
        <ContainerIcon type="LEFT">
          <ButtonIcon alterIcon={false} />
        </ContainerIcon>
        <HighLight
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          size="XXL"
        />
      </Percent>

      <Data>
        <TextStatistics>
          Estatísticas gerais
        </TextStatistics>

        <ContainerStatistics>
          <HighLight
            title="22"
            subtitle="melhor sequência de pratos dentro da dieta"
            size="XL"
          />
        </ContainerStatistics>

        <ContainerStatistics>
          <HighLight
            title="109"
            subtitle="refeições registradas"
            size="XL"
          />
        </ContainerStatistics>

        <CounterMeal>
          <SmallContainer typeMeal>
            <HighLight
              title="99"
              subtitle="refeições dentro da dieta"
              size="XL"
            />
          </SmallContainer>

          <SmallContainer typeMeal={false}>
            <HighLight
              title="10"
              subtitle="refeições fora da dieta"
              size="XL"
            />
          </SmallContainer>
        </CounterMeal>

      </Data>
    </Container>
  )
}