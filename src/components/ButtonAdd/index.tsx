import { Container, IconAdd, IconEdit, IconRemove, NewMeal } from "./styles";

interface PropsButtonAction{
  onIcon: boolean;
  typeIcon?: "ADD" | "REMOVE" | "EDIT";
  onBackground: boolean;
  title: string;
  newNavigation: () => void;
}

export function ButtonAdd({ onIcon, onBackground, title, typeIcon, newNavigation }: PropsButtonAction) {
  return(
    <>
    
    <Container 
      onBackground={onBackground}
      onPress={newNavigation}>
    { 
      onIcon && (typeIcon === "ADD" ? <IconAdd /> : null ||
      typeIcon === "EDIT" ? <IconEdit /> : null ||
      typeIcon === "REMOVE" ? <IconRemove /> : null)
    }
    <NewMeal
      onColor={onBackground}
    >
      {title}
    </NewMeal>
    </Container>
    </>
  )
}