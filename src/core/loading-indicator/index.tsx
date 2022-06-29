import React, { FunctionComponent } from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native';
import styles from './styles';
/*
 ** Types
 */

interface LoadingIndicatorProps extends ActivityIndicatorProps {}

/*
 ** Component
 */

export const LoadingIndicator: FunctionComponent<LoadingIndicatorProps> = ({
  size,
  color,
}) => {
  return (
    <View style={styles.container} testID="container-loading-indicator">
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
