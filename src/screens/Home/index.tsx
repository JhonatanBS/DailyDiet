import { useEffect, useState, useCallback} from "react";

import { Container, 
         ContainerAddButton, 
         ContainerIcon, 
         ShowPercentage,
         ContainerList,
         Description
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
import { mealDTO } from "@dtos/mealDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";

export function Home() {
  const navigation = useNavigation();
  
  const [ meals, setMeals ] = useState<allMealsDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false); 

  async function handleNewMeal() {
    try {
      // await AsyncStorage.removeItem(MEALS_COLLECTION);
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

  function allMeals() {
    const counterMeals = meals.reduce((accumulator, meal) => accumulator + meal.data.length,0);
    return counterMeals;
  }

  function doneMeals() {
    const counterMeals = meals.reduce((accumulator, meal, index) => {
      
      const counterDone = meal.data.reduce((accumulatorDone, mealDone) => mealDone.done === true ? ++accumulatorDone : 0,0)
      

      return counterDone + accumulator;
  },0)
    return counterMeals;
}

  function counterPercentage() {
    const percentage = (doneMeals() / allMeals()) * 100;

    return percentage;
  }

  console.log(allMeals(), doneMeals())
  return (
    <Container>
      <Header />
      <ShowPercentage
        type={ counterPercentage() >= 50.00 ? true : false}
      >
        <ContainerIcon type="RIGHT">
          <ButtonIcon 
            alterIcon={true} 
            NewNavegition={handleNavigateStatistics} 
            type={counterPercentage() >= 50.00 ? true : false}
          />
        </ContainerIcon>

        <HighLight
          title={`${counterPercentage().toFixed(2).toString().replace(".", ",")}%`}
          subtitle="das refeições dentro da dieta"
          size="XXL"
        />
      </ShowPercentage>

      <ContainerAddButton>

        <Description>
          Refeições
        </Description>
        <ButtonAdd 
          title="Nova Refeição"
          onIcon
          typeIcon="ADD"
          onBackground
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
        
        renderItem={({item, section}) => (
          <ButtonMeal 
            name={item.name}
            description={item.description}
            date={section.title}
            hour={item.hour}
            done={item.done}
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
            { title.replace("/",".").replace("/20", ".") }
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
      }
      </ContainerList>
    </Container>
  )
}