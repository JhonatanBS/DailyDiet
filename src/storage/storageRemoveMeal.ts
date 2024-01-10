import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "@storage/storageConfig";

import { storageGetMeals } from "@storage/storageGetMeals";

interface removeMealProps {
  date: string;
  hour: string;
}

export async function storageRemoveMeal({ date ,hour}: removeMealProps) {
  try {
    const storage = await storageGetMeals();

    const removeMeal = storage.map((meal) => {
      if(meal.title === date) {
        const newData = meal.data.filter((data) => data.hour !== hour);

        meal.data = [...newData];
      }

      return meal;
    });

    const emptyMeal = removeMeal.filter((meal) => meal.data.length !== 0)

    const newStorage = JSON.stringify(emptyMeal);

    await AsyncStorage.setItem(MEALS_COLLECTION, newStorage);

  } catch (error) {
    throw error;
  }
}