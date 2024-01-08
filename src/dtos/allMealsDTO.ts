export type PropsMeal = {
    name: string;
    description: string;
    hour: string;
    done: boolean; 
  }
  
  export interface allMealsDTO {
    title: string;
    data: PropsMeal[]
  }