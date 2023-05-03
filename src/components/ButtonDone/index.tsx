import { Container, Circle, DoneOption } from "./styles";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  backgroundOption: boolean;
  option: boolean;
  title: string;
}

export function ButtonDone({ option, title, backgroundOption, ...rest}: Props) {


  return(
    <Container backgroundOption={backgroundOption} option={option} {...rest}>
      <Circle 
        option={option}
      />

      <DoneOption>
        {title}
      </DoneOption>
    </Container>
  )
}