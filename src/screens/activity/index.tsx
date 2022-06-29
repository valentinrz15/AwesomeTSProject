import React, { FunctionComponent } from 'react';
import { SectionList } from 'react-native';
import { ActivityHeader } from './activity-header';
import { ActivityList } from './activity-list';
import styles from './styles';
import { DATA } from './utils';

export const Activity: FunctionComponent<{}> = () => {
  return (
    <>
      <ActivityHeader titleOne="Close" titleTwo="Filters" />
      <SectionList
        testID="activity-index-section-list"
        style={styles.container}
        contentContainerStyle={styles.content}
        sections={DATA}
        keyExtractor={item => item.id}
        stickyHeaderHiddenOnScroll={false}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { header } }) => (
          <ActivityList title="Section 1" data={header} />
        )}
        renderItem={({ section: { data } }) => (
          <ActivityList title="Section 2" data={data} />
        )}
        renderSectionFooter={({ section: { content } }) => (
          <ActivityList title="Section 3" data={content} />
        )}
      />
    </>
  );
};
