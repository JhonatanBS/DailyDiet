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

      const newMeal = storageAllMeal.map((meal) => {
        if(meal.title === nowDate) {
          const newData = meal.data.findIndex((data, index) => {
            if(data.hour === nowHour) {
              return index;
            }
          });

          meal.data.splice(newData, 1, {name, description, hour, done})
        }
   
        return meal;
      });

   const updateMeal = JSON.stringify(newMeal);

   await AsyncStorage.setItem(MEALS_COLLECTION, updateMeal);
  
	} catch (error) {
			throw error;
	}
}