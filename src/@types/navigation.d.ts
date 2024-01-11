import { mealDTO } from "@dtos/mealDTO";
import { IMeal, statisticsMeal } from "@screens/Home"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined,
      statistics: statisticsMeal,
      newMeal: undefined,
      feedback: {
        name: string;
        description: string;
        date: string;
        hour: string;
        done: boolean;
      },
      showMeal: mealDTO,
      editMeal: mealDTO
    }
  }
}