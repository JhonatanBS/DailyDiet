import { mealDTO } from "@dtos/mealDTO";
import { IMeal, PropsMeal } from "@screens/Home"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined,
      statistics: IMeal[],
      newMeal: undefined,
      feedback: {
        name: string;
        description: string;
        date: string;
        hour: string;
        done: boolean;
      },
      showMeal: mealDTO
    }
  }
}