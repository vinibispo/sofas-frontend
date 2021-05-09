import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import Navigator from './src/navigation';
import {theme} from './src/utils/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
}
