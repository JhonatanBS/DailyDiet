import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "./storageConfig";
import { allMealsDTO } from "@dtos/allMealsDTO";

export async function storageGetMeals(): Promise<allMealsDTO[]> {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals = storage ? JSON.parse(storage) : [];

    return meals;

  } catch (error) {
    throw error;
  }
}