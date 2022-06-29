import React, { FunctionComponent, useContext } from 'react';
import { View, Text } from 'react-native';
import { LocalizationContext } from '../../utils/translations-provider';
import { styles } from './syles';
import { API_URL } from '@env';

/**
 * Types
 */

interface DashboardProps {}

export const Dashboard: FunctionComponent<DashboardProps> = () => {
  const { t } = useContext(LocalizationContext);

  return (
    <View style={styles.container} testID="dashboard-index-container">
      <View style={styles.content} testID="dashboard-index-content">
        <Text>{t.welcome_header}</Text>
        <Text>{API_URL}</Text>
        <Text>Esto es una prueba</Text>
      </View>
    </View>
  );
};
