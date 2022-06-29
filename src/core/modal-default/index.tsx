import React, { FunctionComponent } from 'react';
import { Modal, Text } from 'react-native';
import { ModalDefaultProps } from './interface';
import styles from './styles';
/*
 ** Component
 */

export const ModalDefault: FunctionComponent<ModalDefaultProps> = ({
  testID,
}) => {
  return (
    <Modal style={styles.container} testID={testID}>
      <Text>Modal</Text>
    </Modal>
  );
};
