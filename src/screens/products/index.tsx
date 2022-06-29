import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
/**
 * Types
 */

interface ProductsProps {}

export const Products: FunctionComponent<ProductsProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
    </View>
  );
};
