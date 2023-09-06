import { Container , Logo, Profile } from "./styles";

import LogoDailyDiet from "@assets/LogoDailyDiet.svg";

import { User } from "phosphor-react-native";

export function Header() {
  return(
    <Container>
      <Logo>
        <LogoDailyDiet width="100%" height="100%"/>
      </Logo>
      <Profile>
       <User size={32}/>
      </Profile>
    </Container>
  )
}