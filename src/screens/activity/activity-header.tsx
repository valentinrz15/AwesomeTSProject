import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface ActivityHeaderProps {
  titleOne: string;
  titleTwo: string;
  actionOne?: () => void;
  actionTwo?: () => void;
}

export const ActivityHeader: FunctionComponent<ActivityHeaderProps> = ({
  titleOne,
  titleTwo,
  actionOne,
  actionTwo,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={actionOne} style={styles.headerButtons}>
        <Text style={styles.headerTitles}>{titleOne}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={actionTwo} style={styles.headerButtons}>
        <Text style={styles.headerTitles}>{titleTwo}</Text>
      </TouchableOpacity>
    </View>
  );
};
