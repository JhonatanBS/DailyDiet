import { Container , Logo, Profile, ProfileImage} from "./styles";

import logo from "@assets/logo.png";
import profile from "@assets/profile.png";

export function Header() {
  return(
    <Container>
      <Logo source={logo}/>
      <Profile>
        <ProfileImage source={profile}/>
      </Profile>
    </Container>
  )
}