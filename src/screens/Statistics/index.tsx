import { ButtonIcon } from "@components/ButtonIcon"
import { Container, Percent, Data, TextStatistics, ContainerStatistics, SmallContainer, CounterMeal } from "./styles"
import { HighLight } from "@components/HighLight"
import { ContainerIcon } from "@screens/Home/styles"
import { useNavigation, useRoute } from "@react-navigation/native"
import { statisticsMeal } from "@screens/Home"

export function Statistics() {
  const navigation = useNavigation();

  const { params } = useRoute();

  const { 
    isNotDoneMeals, 
    betterSequenceMeal, 
    isDoneMeals, 
    percentage, 
    totalMeals
  } = params as statisticsMeal;

  function handleNewNavigation() {
    navigation.goBack();
  }

  return (
    <Container typeMeal={ percentage >= 50.00 ? true : false}>
      <Percent typeMeal={ percentage >= 50.00 ? true : false}>
        <ContainerIcon type="LEFT">
          <ButtonIcon 
          alterIcon={false} 
          type={percentage >= 50.00 ? true : false} 
          NewNavegition={handleNewNavigation}/>
        </ContainerIcon>
        <HighLight
          title={`${percentage.toFixed(2).toString().replace(".", ",")}%`}
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
            title={`${betterSequenceMeal}`}
            subtitle="melhor sequência de pratos dentro da dieta"
            size="XL"
          />
        </ContainerStatistics>

        <ContainerStatistics>
          <HighLight
            title={`${totalMeals}`}
            subtitle="refeições registradas"
            size="XL"
          />
        </ContainerStatistics>

        <CounterMeal>
          <SmallContainer typeMeal>
            <HighLight
              title={`${isDoneMeals}`}
              subtitle="refeições dentro da dieta"
              size="XL"
            />
          </SmallContainer>

          <SmallContainer typeMeal={false}>
            <HighLight
              title={`${isNotDoneMeals}`}
              subtitle="refeições fora da dieta"
              size="XL"
            />
          </SmallContainer>
        </CounterMeal>

      </Data>
    </Container>
  )
}