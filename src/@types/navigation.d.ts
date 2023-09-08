import { IMeal, PropsMeal } from "@screens/Home"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: {
        name: string;
        description: string;
        data: string;
        hour: string;
        done: boolean;
      },
      statistics: IMeal[],
      newMeal: undefined,
      feedback: {
        name: string;
        description: string;
        data: string;
        hour: string;
        done: boolean;
      }
    }
  }
}