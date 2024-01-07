import { useEffect, useState, useCallback} from "react";

import { Container, 
         ContainerAddButton, 
         ContainerIcon, 
         ShowPercentage,
         ContainerList
       } from "./styles";

import { SectionList, Text, ActivityIndicator } from "react-native";

import { userDTO } from "@dtos/userDTO";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonAdd } from "@components/ButtonAdd";
import { ButtonMeal } from "@components/ButtonMeal";
import theme from "@theme/index";

import { useNavigation, useRoute , useFocusEffect } from "@react-navigation/native";

export type PropsMeal = {
  name: string;
  description?: string;
  hour: string;
  done: boolean; 
}

export interface IMeal {
  title: string;
  data: PropsMeal[]
}

export function Home() {
  const navigation = useNavigation();
  const  { params } = useRoute();

  const [ meals, setMeals ] = useState<IMeal[]>([]);
  const [isLoading, setIsLoading] = useState(false); 

  function handleNewMeal() {
    try {
      setIsLoading(true);
      
      if(!params) { 
        return meals;
      }else{

      const { name, description, date, hour, done } = params as userDTO;
      let counter = 0;

      const newMeal = meals.map((meal) => {
        if(meal.title === date) {
          const auxMeal = [...meal.data, {name, description, hour, done}];
          meal.data = auxMeal;
          counter = 1;
        }
   
        return meal;
      });
  
      if(counter === 1) {
        //setMeals([...newMeal]);
        return newMeal;
      }else{
        const meal: IMeal = {
          title: date,
          data: [{
            name,
            description,
            hour,
            done
          }]
        };
       //setMeals([...meals, meal]); 
       return [...meals, meal];
    }
  }
    } catch (error) {
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
    setMeals(handleNewMeal()); 
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