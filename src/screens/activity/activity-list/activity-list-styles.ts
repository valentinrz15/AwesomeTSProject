import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

const activityListStyles = StyleSheet.create({
  headerList: {
    fontSize: 22,
    color: colors.black,
  },
  contentList: { flexDirection: 'row' },
  contentButtonList: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  footerList: {},
});

export default activityListStyles;
