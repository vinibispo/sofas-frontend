import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';

import Navigator from './src/navigation';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#c32c4f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
}
