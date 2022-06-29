import React, { useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from '../navigation';
import {
  LocalizationContext,
  LocalizationProvider,
} from '../utils/translations-provider';

const App = () => {
  const { initializeAppLanguage } = useContext(LocalizationContext);
  return (
    <LocalizationProvider>
      <NavigationContainer
        onReady={() => {
          initializeAppLanguage();
        }}>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
    </LocalizationProvider>
  );
};

export default App;
