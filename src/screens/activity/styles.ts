import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  headerButtons: {
    borderWidth: 0.5,
    borderColor: colors.grey,
    backgroundColor: colors.black,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
  },
  headerTitles: {
    fontSize: 18,
    color: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderWidth: 1,
  },
});

export default styles;
