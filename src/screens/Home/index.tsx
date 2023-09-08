import { useState } from "react";

import { Container, 
         ContainerAddButton, 
         ContainerIcon, 
         ShowPercentage,
         ContainerList
       } from "./styles";

import { SectionList, Text } from "react-native";

import { Header } from "@components/Header";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonAdd } from "@components/ButtonAdd";
import { ButtonMeal } from "@components/ButtonMeal";
import theme from "@theme/index";


import { useNavigation, useRoute } from "@react-navigation/native";

export type PropsMeal = {
  name: string;
  description?: string;
  hour: string;
  done: boolean;
}

interface PropsNewMeal {
  name: string;
  description: string;
  data: string;
  hour: string;
  done: boolean;
}

export interface IMeal {
  title: string;
  data: PropsMeal[]
}

export function Home() {
  const navigation = useNavigation();
  const router = useRoute();

  const [ meals, setMeals ] = useState<IMeal[]>([
    {
      title: '12.08.22',
      data: [
        {
          name: "Sanduiche",
          description: "Sanduiche",
          hour: "22:00",
          done: true
        },
        {
          name: "Pizza",
          description: "Sanduiche",
          hour: "22:01",
          done: true
        },
        {
          name: "Sanduiche",
          description: "Sanduiche",
          hour: "22:10",
          done: true
        },
        {
          name: "Pizza",
          description: "Sanduiche",
          hour: "22:15",
          done: true
        },
      ],
    },
    {
      title: '12.08.22',
      data: [
        {
          name: "Sanduiche",
          description: "Sanduiche",
          hour: "22:00",
          done: false
        },
        {
          name: "Pizza",
          description: "Sanduiche",
          hour: "22:01",
          done: false
        },
        {
          name: "Sanduiche",
          description: "Sanduiche",
          hour: "22:11",
          done: false
        },
        {
          name: "Pizza",
          description: "Sanduiche",
          hour: "05:01",
          done: false
        },
      ],
    },
  ]); 

  function handleNewMeal() {
    if(router.params === undefined) {
      return;
    }

    const { name, description, data, hour, done} = router.params as PropsNewMeal;
    const meal: IMeal = {
      title: data,
      data: []
    }
  }

  
  function handleNavigateStatistics() {
    navigation.navigate("statistics", meals);
  }

  function handleNavigateNewMeal() {
    navigation.navigate("newMeal");
  }
  

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

      <SectionList 
        sections={meals}
        keyExtractor={(item) => item.hour}
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
            { title }
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
      </ContainerList>
    </Container>
  )
}