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

import { typeColorStyleMeal } from "@components/ButtonMeal/styles";

type PropsMeal = {
  time: string;
  description: string;
  done: typeColorStyleMeal;
}

interface IMeal {
  title: string;
  data: PropsMeal[]
}

export function Home() {
  const [ meals, setMeals ] = useState<IMeal[]>([
    {
      title: '12.08.22',
      data: [
        {
          time: "22:00",
          description: "Sanduiche",
          done: "isDone"
        },
        {
          time: "22:01",
          description: "Pizza",
          done: "isDone"
        },
        {
          time: "22:10",
          description: "Sanduiche",
          done: "isDone"
        },
        {
          time: "22:15",
          description: "Pizza",
          done: "isDone"
        },
      ],
    },
    {
      title: '12.08.22',
      data: [
        {
          time: "22:00",
          description: "Sanduiche",
          done: "notDone"
        },
        {
          time: "22:01",
          description: "Pizza",
          done: "notDone"
        },
        {
          time: "22:11",
          description: "Sanduiche",
          done: "notDone"
        },
        {
          time: "05:01",
          description: "Pizza",
          done: "notDone"
        },
      ],
    },
  ]);

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

      <ContainerList>

      <SectionList 
        sections={meals}
        keyExtractor={(item) => item.time}
        renderItem={({item}) => (
          <ButtonMeal date={item.time} meal={item.description} done={item.done}          
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
            {title}
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
      </ContainerList>
    </Container>
  )
}