import { ThemeProvider } from 'styled-components/native';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { Text } from 'react-native';

import theme from '@theme/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </ThemeProvider>
  );
}
