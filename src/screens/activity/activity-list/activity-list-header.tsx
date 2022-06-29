import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import activityListStyles from './activity-list-styles';

interface ActivityListHeaderProps {
  title: string;
}

export const ActivityListHeader: FunctionComponent<ActivityListHeaderProps> = ({
  title,
}) => <Text style={activityListStyles.headerList}>{title}</Text>;
