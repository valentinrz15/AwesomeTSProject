import React, { FunctionComponent } from 'react';
import { StyleSheet, FlatList, Dimensions } from 'react-native';
import { ActivityListContent } from './activity-list-content';
import { ActivityListHeader } from './activity-list-header';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  listContent: {
    width: width / 2,
    paddingHorizontal: 20,
  },
});

/**
 * Types
 */

interface ActivityListProps {
  data: Array<{ id: string; title: string }>;
  title: string;
}

export const ActivityList: FunctionComponent<ActivityListProps> = ({
  data,
  title,
}) => {
  return (
    <>
      <ActivityListHeader title={title} />
      <FlatList
        testID="activity-activity-list-index-flat-list"
        contentContainerStyle={styles.listContent}
        data={data}
        numColumns={Math.ceil(data.length / 2)}
        keyExtractor={item => item.id}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActivityListContent data={item} />}
      />
    </>
  );
};
