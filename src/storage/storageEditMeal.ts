import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "./storageConfig";

import { mealDTO } from "@dtos/mealDTO";
import { allMealsDTO } from "@dtos/allMealsDTO";

import { storageGetMeals } from "@storage/storageGetMeals";

type keyToEditMealProp = {
  nowDate: string;
  nowHour: string;
}

export async function storageEditMeal({ nowDate, nowHour }: keyToEditMealProp, { name, description, date, hour, done }: mealDTO ) {
	try {
	  const storageAllMeal = await storageGetMeals();

    let counter = 0;

      const newMeal = storageAllMeal.map((meal) => {
        if(meal.title === date) {
          const auxMeal = [...meal.data, {name, description, hour, done}];
          meal.data = auxMeal;
          counter = 1;
        }
   
        return meal;
      });
  
      if(counter === 1) {
				await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(newMeal))
      }else{
        const meal: allMealsDTO = {
          title: date,
          data: [{
            name,
            description,
            hour,
            done
          }]
        };
			 await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify([...storageAllMeal, meal]))
    }
	} catch (error) {
			throw error;
	}
}