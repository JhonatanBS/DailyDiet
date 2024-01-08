import { useEffect, useState, useCallback} from "react";

import { Container, 
         ContainerAddButton, 
         ContainerIcon, 
         ShowPercentage,
         ContainerList
       } from "./styles";

import { SectionList, Text, ActivityIndicator } from "react-native";

import { allMealsDTO } from "@dtos/allMealsDTO";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonAdd } from "@components/ButtonAdd";
import { ButtonMeal } from "@components/ButtonMeal";
import theme from "@theme/index";

import { useNavigation, useRoute , useFocusEffect } from "@react-navigation/native";
import { storageGetMeals } from "@storage/storageGetMeals";

export function Home() {
  const navigation = useNavigation();
  
  const [ meals, setMeals ] = useState<allMealsDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false); 

  async function handleNewMeal() {
    try {
      setIsLoading(true);
      const allMeals = await storageGetMeals();
      setMeals(allMeals);
      
    }catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    } 
  }

  function handleNavigateStatistics() {
    navigation.navigate("statistics", meals);
  }

  function handleNavigateNewMeal() {
    navigation.navigate("newMeal");  
  }

  useFocusEffect(useCallback(() => {
    handleNewMeal();
  },[])); 
 
  return (
    <Container>
      <Header />
      <ShowPercentage>
        <ContainerIcon type="RIGHT">
          <ButtonIcon alterIcon={true} NewNavegition={handleNavigateStatistics} type/>
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
          newNavigation={handleNavigateNewMeal}
        />
      </ContainerAddButton>

      <ContainerList> 

      { 
        isLoading
        ? 
        <ActivityIndicator 
          size="large"
          color="#190d0d"
          style={{flex: 1, justifyContent: "center"}}
        />
        : 
        <SectionList 
        sections={meals}
        keyExtractor={(item, index) => index.toString()}
        
        renderItem={({item}) => (
          <ButtonMeal date={item.hour} meal={item.name} done={item.done}          
          />  
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text 
            style={
              {
              color: theme.COLORS.GRAY_100, 
              fontFamily: theme.FONT_FAMILY.BOLD, 
              fontSize: theme.FONT_SIZE.LG,
              marginTop: 25
              }
            }>
            { title.replace(/\//g,".") }
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
      }
      </ContainerList>
    </Container>
  )
}