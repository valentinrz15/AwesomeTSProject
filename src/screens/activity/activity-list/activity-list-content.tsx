import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import activityListStyles from './activity-list-styles';

interface ActivityListContentProps {
  data: {
    title: string;
    id: string;
  };
}

export const ActivityListContent: FunctionComponent<
  ActivityListContentProps
> = ({ data }) => (
  <View
    style={activityListStyles.contentList}
    testID="activity-activity-list-content-container">
    <TouchableOpacity
      testID="activity-activity-list-content-button"
      style={activityListStyles.contentButtonList}>
      <Text>{data.title}</Text>
    </TouchableOpacity>
  </View>
);
